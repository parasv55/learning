const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
	const allUsers = await User.find({});
	res.json(allUsers);
});

router.get('/:id', async (req, res) => {
	const user = await User.findById(req.params.id);
	res.json(user);
});

router.post('/', async (req, res) => {
	const newUser = new User(req.body);
	await newUser.save();
	res.status(201).json(newUser);
});

module.exports = router;