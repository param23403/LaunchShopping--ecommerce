import {React, useState} from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import './Navbar.css'
import logo from '../logow.png'
const Navbar = (props) => {
     let navigate = useNavigate();

    function shoppingOnClick(){
       navigate("/shopping")
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
        color: 'white',
    };

    const [isPage, setPage] = useState(props.ispage);

    const landonclick=()=>{
        navigate('/')
    }
   
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "#5BAFFF"}}>
                    <Button onClick={landonclick}>
                        <img src={logo} style={{ maxWidth: 175, maxHeight: 50, padding: 15}} alt="logo"></img>
                    </Button>                        
                    <Link to='/shopping'style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[0] ? "#1F73C3" : "#5BAFFF"}} onClick={shoppingOnClick}>Shop</Button>
                    </Link>
                    <Link to='/cart'style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[1] ? "#1F73C3" : "#5BAFFF"}} onClick={cartOnClick}>Cart</Button>
                    </Link>
                    <Link to='/account'style={linkStyle}>
                        <Button color="inherit" style={{backgroundColor: isPage[2] ? "#1F73C3" : "#5BAFFF"}} onClick={accountOnClick}>Account</Button>
                    </Link>
                    <Box sx={{ justifyContent: 'flex-end' }}>
                        <Link to='/'style={linkStyle}>
                            <Button color="inherit" onClick={logoutOnClick}>Logout</Button>
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
        </>
    );
}
export default Navbar;
