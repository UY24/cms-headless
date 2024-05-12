const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");

const apiRoutes = require("./routes");
const PORT = 3000;

// const db = require("./models");
// db.sequelize.sync({ alter: true });

const setupAndStartServer = () => {
  const app = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
  });
};

setupAndStartServer();
