const { Schema } = require("mongoose");

const userSchema = Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
		gender: String,
		age: String,
		image: String,
	},
	{ versionKey: false },
);

module.exports = { userSchema };
