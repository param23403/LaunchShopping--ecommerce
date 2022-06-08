var express = require("express");
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
  setDoc, getDocs, collection, doc, updateDoc, 
} = require("firebase/firestore");
const { async } = require("@firebase/util");

router.post("/userCreation", async (req, res, next) => {
    await setDoc(doc(db, "Users", req.query.id), {
        username: req.query.id,
        password: req.body.password,
        birthday: req.body.birthday,
        defaultAddress: req.body.defaultAddress,
        defaultCreditCard: req.body.defaultCreditCard,
        phoneNumber: req.body.phoneNumber,
        isLogged: false,
    })
});

router.post("/isLogged", async (req, res, next) => {
    console.log(req.query.id);
    await updateDoc(doc(db, "Users", req.query.id), {
        isLogged: true,
    })
});

router.get("/usernames", async (req, res, next) => {
    const users = [];
    const docs = await getDocs(collection(db, "Users"));
    docs.forEach((user) =>
        users.push({ id: user.id, ...user.data() })
    );
    res.json({ result: users });
});

router.get("/products", async (req, res, next) => {
    const products = [];
    const docs = await getDocs(collection(db, "Products"));
    docs.forEach((item) =>
        products.push({ id: item.id, ...item.data() })
    )
    res.json({ result: products })
});

module.exports = router;