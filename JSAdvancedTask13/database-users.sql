drop database if exists users;
create database users char set utf8;
use users;
select database();

create table users (
	id int not null primary key auto_increment,
    name varchar(30) not null,
    email varchar(30) not null,
    password int not null,
    created_at date not null,
    update_at date not null
);

insert into users  (name, email, password, created_at, update_at) values 
    ("Misha", "misha@mail.ru", 12345, "2020-01-02", "2020-01-02"),
    ("Ivan", "ivan@mail.ru", 54321, "2020-01-01", "2020-01-01"),
    ("Andrii", "andrii@mail.ru", 123123, "2020-01-02", "2020-01-02"),
    ("Sasha", "sasha@mail.ru", 123456789, "2019-12-31", "2019-12-31"),
    ("Ann", "ann@mail.ru", 112233, "2020-01-02", "2020-01-02");
    
select * from users order by name