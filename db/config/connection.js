const { connect, set } = require("mongoose");

set("strictQuery", true);
require("dotenv").config();

const { URL, DBNAME, QUERY, PORT, KEY} = process.env;

module.exports = {
	KEY,
	PORT,
	connection: connect(URL + DBNAME + QUERY),
};
