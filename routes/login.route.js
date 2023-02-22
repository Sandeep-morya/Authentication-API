const { Router } = require("express");
const { UserModel } = require("../db/model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const {KEY} = require("../db/config/connection")

const login = Router();



/* variables & Error Messages*/
const inputError = "You need to send details in details key. Read Docs";
const notFound = "Your details not matched with our system";

login.post("/", async (req, res) => {
	const { details } = req.body;

	/* Checking if user has provided details key in request body */
	if (details) {
		try {
			const { email, password, username } = details;
			/* Checking if user has provided the password also in details */
			if (!password) {
				throw new Error();
			}

			/* Finding the user in database */
			const data = await UserModel.findOne({ $or: [{ email }, { username }] });
			if (!data) {
				throw new Error();
			}

			/* Comparing the password with the encrypted one */

			const encryption = await bcrypt.compare(password, data.password);
			if (encryption) {
				/* Genrating the token with jwt & key of env file */
				const token = jwt.sign({ profile: data }, KEY);
				res.send({ err: false, token });
				
			} else {
				throw new Error();
			}
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
