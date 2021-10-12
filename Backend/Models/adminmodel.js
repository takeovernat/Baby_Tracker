const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'babytracker'
});

function Insert_Into_Admin_first (id, name, username, child_id){
app.get('/insert', (req, res)=> {
    var sql = 'INSERT INTO Admin ( id, name, username, child_id) values ( ?, ?, ?, ?);';
    let todo = [id, name, username, child_id]
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

function Insert_Into_Admin (name, username, child_id){
    app.get('/insert', (req, res)=> {
        var sql = 'INSERT INTO Admin ( name, username, child_id) values ( ?, ?, ?);';
        let todo = [name, username, child_id]
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

    function deleteAdmin (username){
        app.get('/delete', (req, res)=> {
            var sql = 'DELETE FROM admin WHERE username = (?);';
            let todo = [username]
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
//deleteAdmin("jackstar_01");
//Insert_Into_Admin('robot', 'robotnig', 3);





app.listen(3004, ()=>{

    console.log("server running!");
})