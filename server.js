const app = require("./app");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

PORT = process.env.PORT;

const DB = process.env.MONGO_URL.replace("PASSWORD_HERE", process.env.PASSWORD);

mongoose
  .connect(DB, { useNewUrlParser: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`App is runnin on PORT: ${PORT}`);
});
