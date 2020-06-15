drop database if exists users;
create database users char set utf8;
use users;
select database();

CREATE TABLE `users` (
  `id` int(25) NOT NULL key auto_increment,
  `name` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `login` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` date NOT NULL,
  `update_at` date NOT NULL,
  `admin` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

create table refreshToken (
	id int not null primary key auto_increment,
    user_id int not null,
    refreshToken varchar(100) not null
);
alter table refreshToken add foreign key (user_id) references users(id);

create table entitlements (
	id int not null primary key auto_increment,
    can_view_users boolean not null default 0,
	can_edit_users boolean not null default 0,
	can_delete_users boolean not null default 0,
	can_view_details boolean not null default 0,
	can_view_details_full boolean not null default 0,
	can_edit_users_full boolean not null default 0,
    user_id int not null
);
alter table entitlements add foreign key (user_id) references users(id);


INSERT INTO `users` (`id`, `name`, `login`, `email`, `password`, `created_at`, `update_at`, `admin`) VALUES
(1, 'Andrey', 'Andrey', 'andrey@gmail.com', 'admin', '2020-01-02', '2020-03-15', 1),
(2, 'Kostya', 'Kostyan', 'kostya@gmail.com', 'agent', '2020-02-22', '2020-04-23', 0),
(3, 'Misha', 'Mihail', 'misha@gmail.com', 'admin', '2020-01-02', '2020-01-02', 1),
(4, 'Sasha', 'Alexandr', 'sasha@gmail.com', 'agent', '2020-01-02', '2020-01-02', 0),
(5, 'Olha', 'Olha', 'olha@gmail.com', 'agent', '2020-06-06', '2020-06-09', 0);

insert into entitlements (can_view_users, can_edit_users, can_delete_users, can_view_details, can_view_details_full, can_edit_users_full, user_id) values
    (true, true, true, true, true, true, 1),
    (true, true, false, true, false, false, 2);

select * from users;
users
