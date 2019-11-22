
var dbEdit = require('./modules/databaseManager.js');

let sql = "INSERT INTO Item VALUES ('4','test','test from test.js')";
function addToDbw(sql) {
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
                });

            })
        }))
}

/*addToDb(sql)
    .then(value=>{
        con.end();
        console.log(value);
    })
    .catch(err => {
        con.end();
        console.log(err)
    });
let sql = "INSERT INTO Item VALUES ('2','test','test from test.js');";

let speakOutput = 'Add was '
con.query("Select * Item;", function (err, result) {
    if (err) throw err;
    speakOutput += result;
    console.log(speakOutput);
});

dbEdit.addToDb(sql)
            .then(value => {
                console.log(value);
            })
            .catch(err => {
                console.log(err);
            });
            */

dbEdit.searchDb("Select * from test.Item where Name='test'")
    .then(value => {
        value.forEach(element => {
            console.log(element);
        });
    })
    .catch(err => {
        console.log(err);
    });
    

return 0;
