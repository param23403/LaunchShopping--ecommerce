import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Grid, AppBar, Toolbar, TextField, Button } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import logo from '../logow.png';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css";

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const landonclick=()=>{
    navigate('/')
  }
  const getCreds = () => {
    fetch("http://localhost:9000/shopping/usernames")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i].id === username) {
              console.log("Username correct");
            if (data.result[i].password === password) {
              setUser(data.result[i].id);
              navigate("/shopping");
            }
          }
        }
      });
  };
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: "#5BAFFF" }}>
            <Button onClick={landonclick}>
              <img src={logo} style={{ maxWidth: 175, maxHeight: 50, padding: 15}} alt="logo"></img>
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='login-form'>
            <h1 className="loginh">Log In</h1>
                <div className='form-group'>
                <input type="text" placeholder="Enter Username" value={username} onChange={(e)=>{{
                    console.log(e.target.value); 
                    setUsername(e.target.value); 
                }}}/>
                <span className='input-icon'><i className="fa fa-envelope"> <EmailIcon/></i></span>
                </div>
                <div className='form-group'>
                <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                <span className='input-icon'><i className="fa fa-envelope"><LockIcon/></i></span>
                </div>
                <button onClick={getCreds} className='login-btn'>Sign In</button>
        </div>
    </>
  );
};
export default Login;
