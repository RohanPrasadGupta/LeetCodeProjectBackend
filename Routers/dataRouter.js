const express = require("express");
const dataController = require("../Controllers/dataController");

const router = express.Router();

router
  .route("/data")
  .get(dataController.getAllData)
  .post(dataController.addData);

module.exports = router;
