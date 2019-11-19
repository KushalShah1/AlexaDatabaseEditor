
var mysql = require('mysql');
var db = require('./configDatabase.json')
var con = mysql.createConnection({
    host: db.host,
    port: db.port,
    user: db.user,
    password: db.password
});
//let sql = "INSERT INTO Item VALUES ('12','test','test from test.js')";
function addToDb(sql) {
    return new Promise((resolve, reject) =>
        con.connect(function (err) {
            if (err) throw err;
            con.query("USE test", function (err, result) {
                if (err) throw err;
                con.query(sql, function (err, result) {
                    if (err) {
                        reject("There was an error adding");
                    }
                    else {
                        resolve("Add was successful");
                    }
                    con.end();
                });

            })
        }))
}

/*addToDb(sql)
    .then(value=>{
        //con.end();
        console.log(value);
    })
    .catch(err => {
        //con.end();
        console.log(err)
    });*/

    module.exports.addToDb=addToDb;

return 0;
