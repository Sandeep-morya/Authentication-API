const express = require("express");
const { PORT, connection } = require("./db/config/connection");

const app = express();

app.use(express.json());

app.listen(PORT, async () => {
	console.log("Server is running on PORT: " + PORT);
	try {
		await connection;
		console.log("Connected to DataBase")
	} catch {
		console.log("But Unable to Connect With Database");
	}
});
