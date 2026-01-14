"use strict";

// 모듈
const express = require("express");
const app = express();
const path = require("path");

// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", path.join(__dirname, "./src/views"));
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));

app.use("/", home);

module.exports = app;
