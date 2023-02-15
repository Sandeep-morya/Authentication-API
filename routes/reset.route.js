const { Router } = require("express");
const { UserModel } = require("../db/model");

const reset_user = Router();

const notFound = "Your details not matched with our system";

reset_user.post("/", async (req, res) => {
	try {
		const data = await UserModel.findOne(req.body);
		if (!data) throw new Error();
		res.send({ err: false, data });
	} catch {
		res.send({ err: true, message: notFound });
	}
});

reset_user.patch("/:id", async (req, res) => {
	const _id = req.params.id;
	try {
		const data = await UserModel.findOneAndUpdate({ _id }, req.body, {
			returnOriginal: false,
		});
		if (!data) throw new Error();
		res.send(data);
	} catch {
		res.send({ err: true, message: notFound });
	}
});

module.exports = {
	reset_user,
};
