const { Router } = require("express");
const { UserModel } = require("../db/model");

const delete_user = Router();

const notFound = "Your details not matched with our system";

delete_user.post("/", async (req, res) => {
	try {
		const data = await UserModel.findOneAndDelete(req.body);
		if (!data) throw new Error();
		res.send({ err: false, data });
	} catch {
		res.send({ err: true, message: notFound });
	}
});



module.exports = {
	delete_user,
};
