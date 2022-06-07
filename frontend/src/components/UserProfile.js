import React, {useEffect,useState, useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import { ListItem, Typography } from '@mui/material';
import { common } from "@mui/material/colors";
import "./UserProfile.css"
import Navbar from "./Navbar/Navbar";
import db from "./firebase"

function UserProfile(){
    const[allInfo,setAllInfo]=useState([]);
    const [user, setUser] = useState('')



    function getUser(e){
        e.preventDefault();
        db.collection('Users').doc("Survivrr").get()
        .then(snapshot => setUser(snapshot.data()))

    }
    return(
        <>
        <Navbar ispage={[true, false, false]}/>
    <div className="container">
      <div className="cover-photo">
        <img src="profile.jpg" class="profile"></img>
      </div>
      <div className="profile-name">Firebase Username {user.username}
      <p className="info">Information:</p>
      <p className="about">Birthday:{user.birthday}</p>
      <p className="about">Address:{user.defaultAddress}</p>
      <p className="about">Phone Number:{user.phoneNumber}</p>
      <p className="about">Credit Card:{user.defaultCreditCard}</p>
      </div>
      <button className="payment-btn">Change Payment Method</button>
      <button className="edit-btn">Edit profile</button>
    </div>
    </>
)};



export default UserProfile;
