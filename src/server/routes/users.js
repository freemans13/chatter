import Router from 'express-promise-router';
import db from '../db';

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const { rows } = await db.query('SELECT * FROM users');
    res.send(rows);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM users WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

router.put('/:id', (req, res, next) => {
  const query = {
    // give the query a unique name
    name: 'update-user',
    text: 'UPDATE users SET ref = $1 WHERE id = $2',
    values: [req.body.ref, req.params.id],
  };

  db.query(query, [req.params.id], (err, result) => {
    if (err) {
      next(err);
    } else {
      res.send(result.rows[0]);
    }
  });
});

export default router;
