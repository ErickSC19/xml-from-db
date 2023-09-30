CREATE TABLE `products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` float NOT NULL,
  `count` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `count` (`count`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

insert into products (id, name, price, count) values (1, 'Tray - 16in Rnd Blk', 84.76, 63);
insert into products (id, name, price, count) values (2, 'Onions - Cooking', 29.41, 51);
insert into products (id, name, price, count) values (3, 'Cheese Cheddar Processed', 14.82, 69);
insert into products (id, name, price, count) values (4, 'Cheese - Cheddar, Mild', 97.97, 35);
insert into products (id, name, price, count) values (5, 'Pear - Halves', 81.3, 97);
insert into products (id, name, price, count) values (6, 'Bread - White, Sliced', 86.73, 70);
insert into products (id, name, price, count) values (7, 'Pie Shell - 9', 30.25, 91);
insert into products (id, name, price, count) values (8, 'Compound - Rum', 66.42, 78);
insert into products (id, name, price, count) values (9, 'Turkey - Oven Roast Breast', 93.36, 63);
insert into products (id, name, price, count) values (10, 'Tea Peppermint', 24.37, 31);
insert into products (id, name, price, count) values (11, 'Mushroom - Chantrelle, Fresh', 4.87, 52);
insert into products (id, name, price, count) values (12, 'Bread - Olive Dinner Roll', 10.17, 80);
insert into products (id, name, price, count) values (13, 'Chicken - Leg, Fresh', 87.04, 43);
insert into products (id, name, price, count) values (14, 'Cocoa Powder - Natural', 42.61, 1);
insert into products (id, name, price, count) values (15, '7up Diet, 355 Ml', 76.05, 88);
insert into products (id, name, price, count) values (16, 'Ham - Cooked', 52.61, 100);
insert into products (id, name, price, count) values (17, 'Soup - Campbells, Minestrone', 28.16, 19);
insert into products (id, name, price, count) values (18, 'Muffin - Mix - Strawberry Rhubarb', 94.53, 73);
insert into products (id, name, price, count) values (19, 'Doilies - 8, Paper', 54.43, 1);
insert into products (id, name, price, count) values (20, 'Dc - Frozen Momji', 27.74, 17);
