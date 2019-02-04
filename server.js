var express = require('express');
var exphbs  = require('express-handlebars');
var mysql = require('mysql');

var app = express();

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "eatdaburger"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


var PORT = process.env.PORT || 3000;
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.get('/', function(req, res) {
    res.render('home', {name: "Alvaro", hobby: "coding"})
})

app.get('/burgers', function(req,res){
    con.query("SELECT * from burger", function(err,result){
        console.log(result)
        res.send('recieved burgers')
    })
})




app.listen(PORT, function(){
    console.log("listening on port " + PORT)
})