import React, {useEffect,useState, useContext} from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';
import { common } from "@mui/material/colors";

const UserProfile=()=>{

const[allInfo, setAllInfo]=useState([]);

{allInfo && allInfo.map((item) => 
<Card key = {item.id} >
{console.log(item)}

{/* <CardActionArea component={Link} to={{pathname:'indivprofilepage', state:{id: item.id }}}> */}
<h2 className="card__t">Username: {item.username}</h2>
{/* <IndivProfilePage/> */}

<Grid container spacing ={2}>
    <Grid className="imageFrame" item xs>
        <CardMedia
            style={{
                width: "auto",
                maxHeight: "100px"
            }}
            component="img"
            alt="profile image"
            image='https://png.pngitem.com/pimgs/s/168-1689599_male-user-filled-icon-user-icon-100-x.png'
            />
    </Grid>
    <Grid  item xs>
        
        <h4 className="card__title">Birthday: {item.birthday}</h4>
        <h4 className="card__title">Address:{item.defaultAddress}  </h4>
        <h4 className="card__title">Phone Number:{item.phoneNumber} </h4>
        <h4 className="card__title">Payment Method:{item.defaultCreditCard} </h4>

    </Grid>
</Grid>
</Card>

)};
        }

export default UserProfile;
