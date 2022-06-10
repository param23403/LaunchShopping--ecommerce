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
router.post('/changeusername',async(req,res,next)=>{
    await updateDoc(doc(db, "Users", req.query.id), {
        username: req.body.username
    });
})
router.post('/changebday',async(req,res,next)=>{
    await updateDoc(doc(db, "Users", req.query.id), {
        birthday: req.body.newbirthday
    });
})
router.post('/changeaddress',async(req,res,next)=>{
    await updateDoc(doc(db, "Users", req.query.id), {
        defaultAddress: req.body.newadd
    });
})
router.post('/changenumber',async(req,res,next)=>{
    await updateDoc(doc(db, "Users", req.query.id), {
        phoneNumber: req.body.newNumber
    });
})


module.exports = router;