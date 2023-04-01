/* eslint-disable dot-notation */
import Router from 'express-promise-router';
import authConfig from './auth-config.json';
import db from '../server/db';

const router = new Router();

router.post('/', async (req, res, next) => {
  try {
    const query = {
      name: 'update-user-ref',
      text: 'INSERT INTO chatter.users (username, external_reference) VALUES ($1, $2) RETURNING user_id',
      values: [req.body.user.name, req.body.user.sub],
    };

    const { rows } = await db.query(query);
    const { user_id: userId } = rows[0];
    const { user, accessToken } = req.body;
    const config = {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        user_metadata: {
          chatter_user_id: userId,
        },
      }),
    };

    const result = await fetch(`http://${authConfig.domain}/api/v2/users/${user.sub}`, config);
    const data = await result.json();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

export default router;
