import express from "express";
//security packages

import helment from "helmet";
const xss = require("xss-clean");
import rate from "express-rate-limit";
import http from "http";
import bodyParser from "body-parser";
import cookieparser from "cookie-parser";
import compression from "compression";
import "express-async-errors";
import cors from "cors";
import morgan from "morgan";
import dotEnv from "dotenv";

const Env = dotEnv.config({});

const app = express();

// const express = require("express");
// const bodyparser = require("body-parser");
// const Env = require("dotenv");
// const morgan = require("morgan");
// const app = express();

// //setting so env

// Env.config({ path: `${__dirname}/../config.env` });

// app.use(morgan("dev"));

// const PORT = process.env.PORT || 5000;

// console.log(PORT);

// app.use(bodyparser());

// const start = () => {
//   app.listen(PORT, () => {
//     console.log(`this is listeing ${PORT}`);
//   });

//   console.log(`${__dirname}/../config.env`);
// };

// start();
