/*CREATE DATABASE chat;*/

USE chat;

DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  message VARCHAR(144),
  roomname VARCHAR(20),
  username VARCHAR(20)
  /* createdAt DATE,
  -- id_usernames INTEGER,
  -- id_roomnames INTEGER*/
  
);

/* Create other tables and define schemas for them here! */
DROP TABLE IF EXISTS usernames;
    
CREATE TABLE usernames (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30)
);

DROP TABLE IF EXISTS roomnames;
    
CREATE TABLE roomnames (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  roomname VARCHAR(20)
);


/*
INSERT INTO usernames (name) VALUES ('Valjean');


*/
/*-- ALTER TABLE messages ADD FOREIGN KEY (id_usernames) REFERENCES usernames (id);
-- ALTER TABLE messages ADD FOREIGN KEY (id_roomnames) REFERENCES roomnames (id);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

-- INSERT INTO `messages` (`id`,`text`,`createdAt`,`id_usernames`,`id_roomnames`) VALUES
-- ('','','','','');
-- INSERT INTO `usernames` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `roomnames` (`id`,`roomname`) VALUES
-- ('','');*/