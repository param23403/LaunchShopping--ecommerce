import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {Link} from "react-router-dom";
import { Typography } from '@mui/material';
import { common } from "@mui/material/colors";


<Card key = {item.id} style = {indivProfileCard}>
{console.log(item)}
<Link to ='indivprofilepage' state={{id:item.id,spotifyID:item.spotifyID, username:item.username}} style={{textDecoration:'none',color:common.black}}>
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
        <h4 className="card__title">Address:{item.birthday}  </h4>
        <h4 className="card__title">Phone Number:{iteam.phonenumber} </h4>
    </Grid>
</Grid>
</Link>
</Card>
