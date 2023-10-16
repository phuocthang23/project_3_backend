const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./src/config/connectDB");
const initRouters = require("./src/routers");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect to database
connectDB();

// connect to react
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "PUT"],
  })
);

const port = process.env.APP_PORT || 3000;

initRouters(app); // run router

//listen to port
app.listen(port, async () => {
  try {
    console.log(`App listening on port ${port}, http://localhost:${port}`);
  } catch (error) {
    console.log("err", error);
  }
});
