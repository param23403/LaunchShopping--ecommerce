import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar } from "@mui/material";
import { UserContext } from "../../contexts/UserContext";
import logo from '../logow.png'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import "./Login.css"

const Login = () => {
  const { user, setUser } = useContext(UserContext);
  let navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [logged, setLogged] = useState(false);
  const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: "black",
    backgroundColor: "#5BAFFF",
  };
  const landonclick=()=>{
    navigate('/')
  }
  const goToSignUp=()=>{
    navigate('/signup')
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
              fetch("http://localhost:9000/shopping/isLogged?id=" + data.result[i].id, 
                {method: "POST",}
              )
              .then((res) => console.log(res.json()));
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
          <img src={logo} onClick={landonclick} style={{ maxWidth: 175, maxHeight: 50, padding: 15}} alt="logo"></img>
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
                <Button onClick={getCreds} className='login-btn' variant="contained">Sign In</Button>
                <p></p>
                <Button onClick={goToSignUp} className='login-btn' variant="contained">Create Account</Button>
                
        </div>
      
    </>
  );
};
export default Login;
