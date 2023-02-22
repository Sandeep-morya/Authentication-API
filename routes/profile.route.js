const { Router } = require("express");
const { UserModel } = require("../db/model");
const jwt = require("jsonwebtoken");
const {KEY} = require("../db/config/connection")

const profile = Router();

/* variables */
const unexpected = "Something went wrong";

profile.get("/", async (req, res) => {
	const token = req.headers.authorization;
	try {
		const decoded = jwt.verify(token,KEY)
        res.send(decoded.profile)
	} catch (error) {
		res.send({
			err: true,
			message: error || unexpected,
		});
	}
});

module.exports = {
	profile,
};
