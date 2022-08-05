const express = require("express");
const app = express();

require("dotenv").config();
app.use(express.json());

//Export MongoDB connect Module
const connectDB = require("./DataBase/DataBaseConnetion");

/**
 * @description start express server and start Mongod atlas connection
 */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("DataBase C");
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
