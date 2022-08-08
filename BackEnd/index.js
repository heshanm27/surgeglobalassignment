const express = require("express");
const app = express();

require("dotenv").config();
require("express-async-errors");

app.use(express.json());

//module imports
const notFound = require("./middleware/not_found");
const errorHandlerMiddleware = require("./middleware/error_handle");
const {
  authenticationAdmin,
  authenticationUser,
} = require("./middleware/authentication");
//Router moduel imports
const authRoute = require("./routes/AuthRoute");
const noteRoute = require("./Routes/NoteRoute");
const userRoute = require("./routes/UserRoute");

//Export MongoDB connect Module
const connectDB = require("./DataBase/DataBaseConnetion");

//default route show message
app.get("/", (req, res) => res.send("Surge Global Assignment"));

//route paths
app.use("/api/v1/auth", authRoute);

app.use("/api/v1/user", authenticationAdmin, userRoute);

app.use("/api/v1/note", authenticationUser, noteRoute);

// Not found Route Middleware
app.use(notFound);
// Custome Error Handler Middleware
app.use(errorHandlerMiddleware);

//If PORT environment Variable Not avaliable use Port 5000
const port = process.env.PORT || 5000;

/**
 * @description start express server and start Mongodb atlas connection
 */
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
