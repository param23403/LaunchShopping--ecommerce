import {React, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {Box, Grid, AppBar, Toolbar,Typography, TextField, Button} from '@mui/material'
import { margin } from '@mui/system';

const Login=()=>{
    let navigate = useNavigate();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [logged, setLogged] = useState(false);
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        backgroundColor: "#5BAFFF",
    };
    const getCreds=()=>{
        console.log('Login Clicked')
    }
    return(
        <>
    <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar style={{backgroundColor: "#5BAFFF"}}>
                  <Typography variant="h3" component="div"style={linkStyle}>
                        ShopCrunch
                    </Typography>
                  </Toolbar>
              </AppBar>
          </Box>
          <Grid item marginTop='10vh'marginLeft='45%'>
    <TextField placeholder='UserName' color='primary' onChange={(e) => {setUsername(e.target.value)}} ></TextField></Grid>
    <Grid item marginTop='2vh' marginLeft='45%' >
    <TextField placeholder='Password' color='primary' onChange={(e) => {setPassword(e.target.value)}}></TextField></Grid>
    <Grid marginLeft='48.5%' marginTop='2vh'><Button onClick={getCreds} variant='contained' style={{backgroundColor: "#5BAFFF"}}>Login</Button></Grid>
    </>
    )}
export default Login