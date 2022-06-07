import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { UserContext } from "../../contexts/UserContext";

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
  const getCreds = () => {
    fetch("http://localhost:9000/shopping/usernames")
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.result.length; i++) {
          if (data.result[i].id === username) {
              console.log("Username correct");
            if (data.result[i].password === password) {
              setUser(data.result[i].id);
              navigate("/home");
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
            <Typography variant="h3" component="div" style={linkStyle}>
              ShopCrunch
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid item marginTop="10vh" marginLeft="45%">
        <TextField
          placeholder="Username"
          color="primary"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid item marginTop="2vh" marginLeft="45%">
        <TextField
          placeholder="Password"
          color="primary"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></TextField>
      </Grid>
      <Grid marginLeft="48.5%" marginTop="2vh">
        <Button
          onClick={getCreds}
          variant="contained"
          style={{ backgroundColor: "#5BAFFF" }}
        >
          Login
        </Button>
      </Grid>
    </>
  );
};
export default Login;
