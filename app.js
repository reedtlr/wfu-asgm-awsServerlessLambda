const express = require('express');

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(express.static("css"));
app.use(express.static("vendor"));
app.use(express.static("scss"));
app.use(express.static("img"));

require("./routes/html-routes.js")(app);

module.exports = app;