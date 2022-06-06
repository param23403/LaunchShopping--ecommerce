import {React,useState} from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './Navbar.css'

const Navbar = (props) => {
     let navigate = useNavigate();

    function homeOnClick(){
       navigate("/homepage")
     }
    function cartOnClick(){
        navigate("/cart")
    }
    
    function accountOnClick(){
        navigate("/account")
      }



    function logoutOnClick(){
      navigate("/")
    }
   
    
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#5BAFFF"}}>
                    <Typography variant="h4" component="div">
                        Cartify
                    </Typography>
                        <Button color="inherit"  onClick={homeOnClick}>Home</Button>
                        <Button color="inherit" onClick={cartOnClick}>Cart</Button>
                        <Button color="inherit" onClick={accountOnClick}>Account</Button>
                        <Button color="inherit" onClick={logoutOnClick}>Logout</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );

}
// style={{backgroundColor: ispage[0] ? 'primary' : "inherit"}}
export default Navbar;
