const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dataRouter = require("./Routers/dataRouter");

const app = express();

const corsOption = {
  origin: "http://localhost:5173",
  methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
  credential: true,
};

app.use(cors(corsOption));
app.use(express.json());
app.use(morgan("dev"));
app.use("/api/data/v1/", dataRouter);

app.use("*", (req, res, next) => {
  res.status(404).json({
    status: "Failed",
    message: `cannot Find ${req.originalUrl} on this site`,
  });
});

module.exports = app;
