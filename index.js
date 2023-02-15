const express = require("express");
const { PORT, connection } = require("./db/config/connection");
const { register } = require("./routes/register.route");
const {login} = require("./routes/login.route")

const app = express();

app.use(express.json());
app.use(express.static("public"))
app.use("/register", register);
app.use("/login", login);

app.listen(PORT, async () => {
	console.log("Server is running on PORT: " + PORT);
	try {
		await connection;
		console.log("Connected to DataBase");
	} catch {
		console.log("But Unable to Connect With Database");
	}
});
