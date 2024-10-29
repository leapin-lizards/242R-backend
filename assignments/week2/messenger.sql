CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `userid` INT NOT NULL,
    `password` VARCHAR(20) NOT NULL,
    `username` VARCHAR(20) NOT NULL,
    `pfpurl` VARCHAR(1000) NOT NULL,
    `statusmessage` VARCHAR(100) NOT NULL,
    `hasquit` TINYINT(1) DEFAULT 0,
    `dateregistered` DATE NOT NULL,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(20) NOT NULL,
    `creator` INT NOT NULL,
    `channelurl` VARCHAR(1000) NOT NULL,
    `capacity` INT NOT NULL,
    `hasquit` TINYINT(1) DEFAULT 0,
    `datecreated` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`creator`) REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `content` VARCHAR(2000) NOT NULL,
    `author` INT NOT NULL,
    `channel` INT NOT NULL,
    `dateposted` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`channel`) REFERENCES `channels`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `follower` INT NOT NULL,
    `followee` INT NOT NULL,
    `datefollowed` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`follower`) REFERENCES `users`(`id`) ON DELETE CASCADE, 
    FOREIGN KEY(`followee`) REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `blocker` INT NOT NULL,
    `blocked` INT NOT NULL,
    `dateblocked` DATE NOT NULL,
    PRIMARY KEY(`id`),
    FOREIGN KEY(`blocker`) REFERENCES `users`(`id`) ON DELETE CASCADE,
    FOREIGN KEY(`blocked`) REFERENCES `users`(`id`) ON DELETE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8;