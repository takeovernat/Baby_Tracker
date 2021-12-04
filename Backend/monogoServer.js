const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()


app.use(cors())
app.use(express.json())

const uri = "mongodb+srv://hellobaby:baby_tracker@cluster0.el6nn.mongodb.net/baby_tracker?retryWrites=true&w=majority";

mongoose.connect(uri, {
	useNewUrlParser: true,
	
	useUnifiedTopology: true,
})
const connection = mongoose.connection
connection.once('open', (res, err) => {
	if(err){
		console.log("could not connect to database!");
	}
	else{
	console.log('Mongodb connection established successfully')
	}
})

const usersRouter = require('./AuthRouter')

app.use('/', usersRouter)

app.listen(3003, () => {
	console.log(`Server is running on port 3003`)
})