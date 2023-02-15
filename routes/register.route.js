const { Router } = require("express");
const { UserModel } = require("../db/model");

const register = Router();


register.post("/", async (req, res) => {
	try {
		/* Trying to Register user */
		const user = new UserModel(req.body);
		const data = await user.save();
		res.send({ err: false, data });

	} catch ({errors}) {
        /* Error Handling */
		const errList = [];
		for (let key in errors) {
			errList.push({
				error_in: key,
				type: errors[key].name,
				message: errors[key].message,
				to_be: errors[key].kind,
			});
		}
		res.send({ err: true, errList });
	}
});

module.exports = {
	register,
};
