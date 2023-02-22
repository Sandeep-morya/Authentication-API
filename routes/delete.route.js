const { Router } = require("express");
const { UserModel } = require("../db/model");
const { compare } = require("bcrypt");

const delete_user = Router();

const notFound = "Your details not matched with our system";
const success = "Account Successfully Deleted";

delete_user.delete("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		/* Checking if user has given email & password in request body */
		if (!email || !password) throw new Error();

		/* Finding the user in database */
		const user = await UserModel.findOne({ email });
		if (!user) {
			throw new Error();
		}

		/* Comparing the password with the encrypted one */
		const encryption = await compare(`${password}`, user.password);
		if (!encryption) throw new Error();

		/* Finally Deleteing the Account */
		const data = await UserModel.findByIdAndDelete({ _id: user._id });
		res.send({ err: false, messagee: success, data });
	} catch {
		res.send({ err: true, message: notFound });
	}
});

module.exports = {
	delete_user,
};
