var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
  addDoc,
} = require("firebase/firestore");



module.exports = router;