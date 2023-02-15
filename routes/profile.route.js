const { Router } = require("express");
const { UserModel } = require("../db/model");
const jwt = require("jsonwebtoken");

const profile = Router();

/* variables */
const notFound = "username or password is not matched with our system";
const unexpected = "Something went wrong";
const key = "Sandeep-morya-authentication-api";

profile.post("/", async (req, res) => {
	const token = req.headers.authorization;
	try {
		const decoded = jwt.verify(token,key)
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
