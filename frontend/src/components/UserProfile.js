import React, {useEffect,useState, useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';
import { common } from "@mui/material/colors";
import "./UserProfile.css"

function UserProfile(){
    return(
    <div class="container">
      <div class="cover-photo">
        <img src="profile.jpg" class="profile"></img>
      </div>
      <div class="profile-name">Firebase Username
      <p className="info">Information:</p>
      <p class="about">Birthday:</p>
      <p class="about">Address:</p>
      <p class="about">Phone Number:</p>
      <p class="about">Address:</p>
      </div>
      <button class="payment-btn">Change Payment Method</button>
      <button class="edit-btn">Edit profile</button>
    </div>
    )
};



export default UserProfile;
