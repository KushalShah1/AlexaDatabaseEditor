const quoteHelper= require("./modules/quoteHelper.js");

async function testMod(){
    await quoteHelper.getQuote().then(function(value){
        let quote= JSON.parse(value).content;

        console.log(quote);
    },function(error){
        console.log("error")
    })
}

testMod();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "alexa-database.cr3m4jv1cm6k.us-east-1.rds.amazonaws.com",
  port: "3306",
  user: "Kutoo1",
  password: "DOG123kus#"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});