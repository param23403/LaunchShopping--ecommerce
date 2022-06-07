var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
    setDoc, getDocs, collection, doc
  } = require("firebase/firestore");
  const { async } = require("@firebase/util");

router.get("/users", async (req, res, next) => {
    const users = [];
    const docs = await getDocs(collection(db, "Users"));
    docs.forEach((user) =>
        users.push({ username: user.username, pass:user.password })
    );
    res.json({ result: users });
});


module.exports = router;
