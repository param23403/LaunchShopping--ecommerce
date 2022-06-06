import Navbar from '../Navbar/Navbar.js'
import {Button, Box, Grid} from '@mui/material'
import { margin,positions } from '@mui/system';

const Landing=()=>{
    const linkStyle = {
        margin: "1rem",
        textDecoration: "none",
        color: 'black',
        backgroundColor: "#5BAFFF",
    };
    return(
        <>
        <Grid container spacing={2} alignItems ="right">
            <Grid container item sx={9} justifyContext="flex-start">
                <Button variant='contained'style={linkStyle}>Login</Button>
                <Button variant='contained'style={linkStyle}>Sign Up</Button>
            </Grid>
        </Grid>


    <h1>This is the Landing Page</h1>
    </>
   ) }
    
    export default Landing