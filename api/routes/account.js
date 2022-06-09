var express = require('express');
var router = express.Router();
var fetch = require("node-fetch");
const db = require("./firebase");

const {
    setDoc, getDocs, collection, doc, updateDoc
  } = require("firebase/firestore");
  const { async } = require("@firebase/util");

router.post('/changepassword',async(req,res,next)=>{
    await updateDoc(doc(db, "Users", req.query.id), {
        password: req.body.pass
    });
})


module.exports = router;