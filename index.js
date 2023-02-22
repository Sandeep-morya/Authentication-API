const express = require("express");
const cors = require("cors");
const { PORT, connection } = require("./db/config/connection");
const { register } = require("./routes/register.route");
const { login } = require("./routes/login.route");
const { profile } = require("./routes/profile.route");
const { delete_user } = require("./routes/delete.route");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));


app.use("/register", register); //registration
app.use("/login", login);  // login
app.use("/profile", profile); // show profile
app.use("/delete", delete_user); // delete Account

app.listen(PORT, async () => {
	console.log("Server is running on PORT: " + PORT);
	try {
		await connection;
		console.log("Connected to DataBase");
	} catch {
		console.log("But Unable to Connect With Database");
	}
});
