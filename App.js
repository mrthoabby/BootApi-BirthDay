//TODO: Imports the necessary node modules
require("dotenv").config({ path: "./config/.appSettings" });
const EXPRESS = require("express");
const CORS = require("cors");

//TODO: Implements the necessary node modules
const APP = EXPRESS();

//TODO: Use the necessary node modules
APP.use(CORS());
APP.use(EXPRESS.json());
APP.use("/api", require("./routing/Core.js"));

//TODO: Implements the necessary build functions
const toStartApp = () => {
  APP.listen(process.env.APP_PORT || 3005, () => {
    console.log(`Server is running on port ${process.env.APP_PORT}`);
  });
};

//TODOC: To start Core Application
toStartApp();
