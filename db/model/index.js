const { model } = require("mongoose");
const { userSchema } = require("./schema");
const uniqueValidator = require("mongoose-unique-validator");

userSchema.plugin(uniqueValidator);
const UserModel = model("user", userSchema);

module.exports = {
	UserModel,
};
