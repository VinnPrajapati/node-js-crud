const express = require("express");
const route = require("./routes/routes");
const jwt = require("./helpers/jwtAuth");

require("dotenv").config();
const app = express();
app.use(express.json());

app.use("/api", route);

app.listen(process.env.app_port, () =>
  console.log(`Example app listening on app_port ${process.env.app_port}!`)
);
