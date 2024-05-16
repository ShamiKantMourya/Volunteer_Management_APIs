const express = require('express');
const cors = require('cors');

const {dataBase} = require('./db');
const eventRouter = require('./routes/event.routes');
const volunteerRouter = require('./routes/volunteer.route');

const app = express();

//Middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

//Database 
dataBase();

//Routes
app.get("/", (req, res) => {
  res.send("Volunteer Management System");
});

app.use("/api/v1/event", eventRouter);
app.use("/api/v1/volunteer", volunteerRouter);

app.use("/", (err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ error: "Something went wrong" });
});

app.use("/", (req, res) => {
  res.status(404).json({ error: "Route not found" });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})