
const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'password',
    database: 'babytracker'
});

function Insert_Into_progress(child_id, height, weight, status, day, pee_count, bowel_count, hours_slept){
app.get('/insert', (req, res)=> {
    var sql = 'INSERT INTO child_progress (child_id, height, weight, status, day, pee_count, bowel_count, hours_slept) values ( ?, ?, ?, ?,?,?,?,?);';
    let todo = [child_id, height, weight, status, day, pee_count, bowel_count, hours_slept]
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

    function deleteprogress(child_id){
        app.get('/delete', (req, res)=> {
            var sql = 'DELETE FROM child WHERE child_id = (?);';
            let todo = [child_id]
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

app.listen(3001, ()=>{

    console.log("server running!");
})