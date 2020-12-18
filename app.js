const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require("./routes/api-routes.js")(app);

module.exports = app;
