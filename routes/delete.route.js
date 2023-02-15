const { Router } = require("express");
const { UserModel } = require("../db/model");

const delete_user = Router();

const notFound = "Your details not matched with our system";

delete_user.post("/", async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!email || !password) throw new Error();

		const data = await UserModel.findOneAndDelete({ email, password });

		if (!data) throw new Error();
		res.send({ err: false, data });
	} catch {
		res.send({ err: true, message: notFound });
	}
});

module.exports = {
	delete_user,
};
