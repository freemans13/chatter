do $$
	declare stu_id uuid;
	declare sam_id uuid;
	declare tom_id uuid;
	declare harry_id uuid;
	declare gary_id uuid;
	declare rich_id uuid;

	declare sam_chat_id uuid;

begin
	delete from chatter.messages;
	delete from chatter.chat_users;
	delete from chatter.chats;
	delete from chatter.users;	
	
	insert into chatter.users (username) values ('stu') returning user_id into stu_id;
	insert into chatter.users (username) values ('sam') returning user_id into sam_id;
	insert into chatter.users (username) values ('tom') returning user_id into tom_id;
	insert into chatter.users (username) values ('harry') returning user_id into harry_id;
	insert into chatter.users (username) values ('gary') returning user_id into gary_id;
	insert into chatter.users (username) values ('rich') returning user_id into rich_id;
	
	insert into chatter.chats (name) values ('sam') returning chat_id into sam_chat_id;
	insert into chatter.chat_users (chat_id, user_id) values (sam_chat_id, stu_id);
	insert into chatter.chat_users (chat_id, user_id) values (sam_chat_id, sam_id);
	insert into chatter.messages (chat_id, user_id, message) values (sam_chat_id, stu_id, 'You ready for dinner?');
	insert into chatter.messages (chat_id, user_id, message) values (sam_chat_id, sam_id, 'Gimme 5');
	insert into chatter.messages (chat_id, user_id, message) values (sam_chat_id, stu_id, 'no worries');
	insert into chatter.messages (chat_id, user_id, message) values (sam_chat_id, sam_id, ':heart');
	
	

end $$;