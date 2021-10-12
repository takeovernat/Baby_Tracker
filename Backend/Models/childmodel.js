
const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'babytracker'
});

function Insert_Into_child_first (id, admin_id, age, height, weight, diet_id){ //tested
app.get('/insert', (req, res)=> {
    var sql = 'INSERT INTO child ( id, admin_id, age, height, weight, diet_id) values ( ?, ?, ?, ?,?,?);';
    let todo = [id, admin_id, age, height, weight, diet_id]
    db.query(sql, todo, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            res.send(result);
        }

    });
});
}

function Insert_Into_child ( admin_id, age, height, weight, diet_id){ //in case we want to do id auto increment
    app.get('/insert', (req, res)=> {
        var sql = 'INSERT INTO child ( admin_id, age, height, weight, diet_id) values ( ?, ?, ?,?,?);';
        let todo = [admin_id, age, height, weight, diet_id]
        db.query(sql, todo, (err, result) => {
            if(err){
                console.log(err);
            }
            else{
                res.send(result);
            }
    
        });
    });
    }
//Insert_Into_child_first(3, 12, 22, 23, 30.4, 3);

    function deletechild(id){ //test
        app.get('/delete', (req, res)=> {
            var sql = 'DELETE FROM child WHERE id = (?);';
            let todo = [id]
            db.query(sql, todo, (err, result) => {
                if(err){
                    console.log(err);
                }
                else{
                    res.send(result);
                }
        
            });
        });
    }

//deletechild(3);

app.listen(3004, ()=>{

    console.log("server running!");
})