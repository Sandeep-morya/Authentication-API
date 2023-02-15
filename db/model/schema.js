const { Schema } = require("mongoose");


const userSchema = Schema(
	{
		username: { type: String, required: true, unique: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		name: { type: String, required: true },
		gender: { type: String, required: true },
		age: { type: Number, required: true },
		image:{type:String}
	},
	{ versionKey: false },
);


module.exports={userSchema}