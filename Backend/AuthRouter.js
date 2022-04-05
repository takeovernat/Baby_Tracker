const router = require('express').Router()
let User = require('./Model/user.model')
const {forgotpassword} = require("../controller/Admin.controller")


router.put('/forgot-password', forgotpassword)

router.route('/users').get((req, res) => {
	User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error:' + err))
})

router.route('/').get((req, res) => {
    User.find()
		.then((users) => res.json(users))
		.catch((err) => res.status(400).json('Error:' + err))
})




router.route('/users/add').post((req, res) => {
	const username = req.body.username
	const password = req.body.password
    const email = req.body.email

	const newUser = new User({ username, password, email })

	newUser
		.save()
		.then(() => res.json('New user added!'))
		.catch((err) => res.status(400).json('Error: ' + err))
})

module.exports = router