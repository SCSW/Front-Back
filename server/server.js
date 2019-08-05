const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors("*"));
app.use("*", bodyParser.json());

app.get("/api/users", (req, res) => {
	res.json({
		id: "0001",
		name: "srun",
		email: "srun@gmail.com"
	});
});

app.post("/login", (req, res) => {
	if (req.body.email !== "srun@gmail.com") {
		res.send("Love you");
	} else {
		res.send("Hello");
	}
});

app.listen(3001, () => console.log("Server started"));
