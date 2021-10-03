
const { MongoClient } = require("mongodb");
// uri string for MongoDB deployment's connection string.
const uri = "mongodb+srv://hellobaby:baby_tracker@cluster0.el6nn.mongodb.net/baby_tracker?retryWrites=true&w=majority";

const client = new MongoClient(uri);

async function deleteuser(username){
   
    try{
    await client.connect();
    const database = client.db('baby_tracker');
    const users = database.collection('users');
    const query = {username: username}
    await users.deleteOne(query);
    console.log("successfully deleted user \n" + username);

}
finally
    {
    await client.close();
    }

}//func
//deleteuser("globoynat").catch(console.dir);

async function updateuser(username, update){
   
    try{
    await client.connect();
    const database = client.db('baby_tracker');
    const users = database.collection('users');
    await users.updateOne(username, update);
    console.log("successfully updated user " + userObj.username);

}
finally
    {
    await client.close();
    }

}//func

async function adduser(userObj){
   
    try{
    await client.connect();
    const database = client.db('baby_tracker');
    const users = database.collection('users');
    await users.insertOne(userObj);
    console.log("successfully added new user " + userObj.username);

}
finally
    {
    await client.close();
    }

}//func
const userObj = {username: "ron", password: "123444", age: "28", email: "gkkkk@yahoo.com"};
adduser(userObj).catch(console.dir);


async function maketable(name){
 
     try{
     await client.connect();
     //
    const babydb = client.db('baby_tracker');
    console.log(babydb.databaseName);
    console.log("successfully added new table " + name + "in database " + babydb.databaseName);
 }
 
 finally
     {
     await client.close();
     }
 
 }//func

//maketable("babies").catch(console.dir);

//authenticates users, will be upgraded in later sprints to do server side user input checks and also hashed passwords
async function auth(username, password){
    try{
        await client.connect();
        const database = client.db('baby_tracker');
        const users = database.collection('users');
        const isusername = {username: username};
        const user = await users.findOne(isusername)
        if(user == null){
            console.log("username does not exist");
            await client.close();
        }
        else if (user.password == password){
            console.log("successfully logged on!");
        }
        else{
            console.log("user name or password entered does not match");
        }
    }
    finally{
        await client.close();
    }
}


