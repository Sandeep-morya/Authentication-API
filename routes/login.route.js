const { Router } = require("express");
const { UserModel } = require("../db/model");
const jwt = require("jsonwebtoken");

const login = Router();

/* variables & Error Messages*/
const inputError = "You need to send details in details key. Read Docs";
const notFound = "Your details not matched with our system";
const key = "Sandeep-morya-authentication-api";

login.post("/", async (req, res) => {
	const { details } = req.body;

	if (details) {
		try {
			if (!details.password) {
				throw new Error();
			}

			const data = await UserModel.findOne(details);
			if (!data) {
				throw new Error();
			}

			const token = jwt.sign({ profile: data }, key);
			res.send({ err: false, token });
		} catch (error) {
			res.send({ err: true, message: notFound });
		}
	} else {
		res.send({ err: true, message: inputError });
	}
});

module.exports = {
	login,
};
