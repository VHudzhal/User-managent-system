const express = require('express');
const bodyParser = require("body-parser");
const request = require('request');

const server = express();
const jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4206');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

server.get("/", function (req, res) {
  console.log("Start page requested.");
  res.json("Start page requested.")
});

// RETURN ALL USER WITH PAGINATION (AUTHORIZATION - required)
server.get("/users", function(req, res){
  res.json({
    data: [{
      name: "Sergiy",
      email: "Sergiy@gmail.com",
      password: "123456",
      created_at: "2020-03-23",
      update_at: "2020-04-14",
      id:1
    },{
      name: "Ivan",
      email: "Ivan@gmail.com",
      password: '123123',
      created_at: "2020-02-15",
      update_at: "2020-02-25",
      id:2
    },{
      name: "Andriy",
      email: "Andriy@gmail.com",
      password: '123123',
      created_at: "2020-01-14",
      update_at: "2020-01-29",
      id:3
    },{
      name: "Vasya",
      email: "Vasya@gmail.com",
      password: '123123',
      created_at: "2020-03-07",
      update_at: "2020-03-18",
      id:4
    },{
      name: "Victor",
      email: "Victor@gmail.com",
      password: '123123',
      created_at: "2020-04-24",
      update_at: "2020-04-27",
      id:5
    },{
      name: "Danil",
      email: "Danil@gmail.com",
      password: '123123',
      created_at: "2020-01-12",
      update_at: "2020-01-22",
      id:6
    },{
      name: "Alex",
      email: "Alex@gmail.com",
      password: '123123',
      created_at: "2019-12-24",
      update_at: "2019-12-25",
      id:7
    },
  ],
    pagination:[{
      page: 1,
      pageSize: 5,
      rowCount: 4,
      pageCount: 3
    }]
  })
})
// CREATED NEW USER(AUTHORIZATION - required, USER - requirde)
server.post("/users", function (req, res) {
  res.send("CREATED NEW USER")
})
// UPDATE USER by ID User Details(AUTHORIZATION - required, userId - required)
server.get("/users/:id", function (req, res) {
  res.send("Update user")
})

// CREATED NEW USER (AUTHORIZATION - required, UserForUpdate - required, userID - required)
server.put("/users/:id", function (req, res){
  res.send("Created new User")
})

// DELETE USERS (id)
server.delete("/users/:id", function (req, res) {
  res.send("User Delete")
})
// RETURN auth token witch user for system access (AUTHDATA - required)
server.post("/auth/sign-in", function (req, res){
  res.send("User sign-in")
})
// Return renewed auth tiket witch user for system access (Authorization - required)
server.post("/auth/sign-in", function (req, res){
  res.send("renewed auth token")
})




// const mysql = require("mysql2");

// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "tour",
//   password: "bealong123"
// });
// connection.connect(function(err){
//   if (err) {
//       return console.error("Ошибка: " + err.message);
//     }
//     else{
//       console.log("Подключение к серверу MySQL успешно установлено");
//     }
// });


server.listen(3001); 
