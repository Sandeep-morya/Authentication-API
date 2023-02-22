const { Router } = require("express");
const { UserModel } = require("../db/model");
const bcrypt = require("bcrypt")

const register = Router();

const success = "Registration Successfull"

register.post("/", async (req, res) => {
	try {
		/* Trying to Register user */
		const encrypted_password = await bcrypt.hash(req.body.password, 5)
		const user = new UserModel({...req.body,password:encrypted_password});
		const data = await user.save();

		res.send({ err: false, message:success, data });

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
