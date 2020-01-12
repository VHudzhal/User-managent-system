const express = require('express');
const bodyParser = require("body-parser");

const server = express();
const jsonParser = bodyParser.json();
server.use(jsonParser);

server.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

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
  const select = "select * from users"
  connection.query(select, function(err, result){
    res.json(result)
    return
  })
})
// CREATED NEW USER(AUTHORIZATION - required, USER - requirde)
server.post("/users", function (req, res) {
  const date = new Date()
  const currentDate = formatDate(date)
  const insert = `insert into users(name, email, password, created_at, update_at) values ("${req.body.name}", "${req.body.name}@mail.ru", 12345 , "${currentDate}", "${currentDate}");`
  connection.query(insert, function(err, result){
    res.send(`Users ${req.body.name} added`)
  })
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

function formatDate(date) {

  var dd = date.getDate();
  if (dd < 10) dd = '0' + dd;

  var mm = date.getMonth() + 1;
  if (mm < 10) mm = '0' + mm;

  var yy = date.getFullYear();

  return yy + '-' + mm + '-' + dd;
}


const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "vladymyrlem",
  database: "users",
  password: "vg13ddt92"
});
connection.connect(function(err){
  if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
});


server.listen(3001);
