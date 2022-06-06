var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
  setDoc, getDocs,
} = require("firebase/firestore");
const { async } = require("@firebase/util");

router.post("/userCreation", async (req, res, next) => {
    await setDoc(doc(db, "Users", req.query.id), {
        username: req.query.id,
        password: req.body.password,
        birthday: req.body.birthday,
        creditCardNumber: req.body.creditCardNumber,
        address: req.body.address,
        phoneNumber: req.body.phoneNumber
    })

});

router.get("/usernames", async (req, res, next) => {
    const users = [];
    const docs = await getDocs(collection(db, "Users"));
    docs.forEach((user) =>
        users.push({ id: user.id })
    );
    res.json({ result: users });
});

module.exports = router;