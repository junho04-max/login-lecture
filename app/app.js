"use strict";

const express = require("express");
const path = require("path");

const app = express();

// body 파싱
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 정적 파일
app.use(express.static(path.join(__dirname, "src", "public")));

// 뷰 설정
app.set("views", path.join(__dirname, "src", "views"));
app.set("view engine", "ejs");

// 라우터
const home = require("./src/routes/home"); // ✅ routes 쪽
app.use("/", home);

module.exports = app;
