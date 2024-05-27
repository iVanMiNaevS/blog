import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello world");
});

app.post("/auth/login", (req, res) => {
	console.log(req.body);
	res.json({
		status: 200,
	});
});

app.listen(4444, (err) => {
	if (err) {
		return console.log(err);
	}

	console.log("Server started on port 4444");
});
