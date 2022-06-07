import {Button, Box, Typography} from '@mui/material'
import React from 'react';
import logo2 from "./logo2.png";
import background from "./background_overlay.jpg";
import { Link } from "react-router-dom";
import './Landing.css';

const Landing = () => {
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'white',
        backgroundColor: "#5BAFFF",
    };

    const imageOverlay = {
        backgroundImage: `linear-gradient(#D6FFD6, #5BAFFF), url("${background}")`,
        backgroundBlendMode: "normal",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
    }    

    return(
        <body class="custom_body">
            <Box sx={{ display: 'flex', justifyContent: 'space-between', borderRadius: 1}}>
                    <img src={logo2} style={{ maxWidth: 200, maxHeight: 50, padding: 15}} alt="logo"></img>
                    <Box>
                        <Link to="/login" style={{textDecoration: "none"}}>
                            <Button variant='contained' style={linkStyle}>Login</Button>
                        </Link>
                        <Link to="/signup" style={{textDecoration: "none"}}>
                            <Button variant='contained' style={linkStyle}>Sign Up</Button>
                        </Link>
                    </Box>
            </Box>
            <Box sx={{ margin:"auto", marginTop: "25vh", display:"flex", justifyContent:"center", alignItems:"center", maxHeight:"40vh", 
                border: 4, borderColor: 'white', maxWidth:"30vw", flexDirection:"column"}}>
                <Typography style={{ fontSize: 45, color: 'white', fontFamily: 'open sans'}}>Online Shopping</Typography>
                <Typography style={{ fontSize: 45, color: 'white', fontFamily: 'open sans'}}> Done Right.</Typography>
            <Link to="/shopping" style={{textDecoration: "none"}}>
                <Button variant='contained' size='large' style={{ margin: "1rem", borderRadius: 30, 
                    fontFamily: 'georgia', fontSize: 20, textTransform: 'none' }}>Shop Now</Button>
            </Link>
            </Box>
        </body>
    ) 
};
    
export default Landing