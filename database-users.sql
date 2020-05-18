drop database if exists users;
create database users char set utf8;
use users;
select database();

create table users (
	id int not null primary key auto_increment,
    name varchar(30) not null,
    login varchar(30) not null,
    email varchar(30) not null,
    password varchar(30) not null,
    created_at date not null,
    update_at date not null,
    admin boolean not null
);

insert into users  (name, login, email, password, created_at, update_at, admin) values 
    ("Andrey", "admin", "andrey@mail.ru", "admin", "2020-01-02", "2020-01-02", true),
    ("Kostya", "agent", "kostya@mail.ru", "agent", "2020-01-02", "2020-01-02", false);

select * from users;
    
