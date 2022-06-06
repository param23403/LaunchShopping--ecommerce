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
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black'
    };
    
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#5BAFFF"}}>
                    <Typography variant="h3" component="div"style={linkStyle}>
                        ShopCrunch
                    </Typography>
                        <Link to='homepage'style={linkStyle}><Button color="inherit"  onClick={homeOnClick}>Home</Button></Link>
                        <Link to='cart'style={linkStyle}><Button color="inherit" onClick={cartOnClick}>Cart</Button></Link>
                        <Link to ='account'style={linkStyle}><Button color="inherit" onClick={accountOnClick}>Account</Button></Link>
                        <Link to='/'style={linkStyle}><Button color="inherit" onClick={logoutOnClick}>Logout</Button></Link>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );

}
// style={{backgroundColor: ispage[0] ? 'primary' : "inherit"}}
export default Navbar;
