import React, {useEffect, useContext, useState} from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {Box, Paper, Button, Dialog,Typography,Grid, DialogTitle, DialogContent, TextField} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import { sizing } from '@mui/system';

const Account=()=>{
    const user = useContext(UserContext);
    const [birthday,setBirthday] = useState()
    const [address,setAddress] = useState()
    const[number,setNumber] = useState()
    const[username,setUsername] = useState()

    const[cc,setCC] = useState()
    const[passmodel,setPassModel] = useState()
    const[bdaymodel,setbdayModel] = useState()
    const[nummodel,setnumModel] = useState()
    const[addmodel,setaddModel] = useState()
    const[usernamemodel,setUserModel] = useState()

    const[curpass, setCurPass] = useState()
    const[newpass, setNewPass] = useState()
    const[newconpass, setNewConPass] = useState()
    const[fetchedpass,setFetchedpass] = useState()
    const[errormodel,seterrorModel] = useState()
    const[passerror,setpasserror] = useState()
    const[newbday,setNewBday]=useState()
    const[newadd,setNewAdd]=useState()
    const[newnum,setNewNum]=useState()
    const[newusername,setNewUserName]=useState()
    let navigate = useNavigate();
    
    useEffect(() => {
          if (user.user === '') {
              navigate('/login');
          }
    },[]);
   
    useEffect(() => {
      fetch("/shopping/usernames")
      .then((res) => res.json())
      .then((data)=>{
        for(let i =0;i<data.result.length;i++) {
          if(user.user==data.result[i].id){
            setUsername(data.result[i].username)
            setBirthday(data.result[i].birthday)
            setAddress(data.result[i].defaultAddress)
            setNumber(data.result[i].phoneNumber)
            setCC(data.result[i].defaultCreditCard)
            setFetchedpass(data.result[i].password)
          }
        }
      })
    
    },[])
    

    const changepass=()=>{
      setPassModel(true)
    }
    const closepass=()=>{
      setPassModel(false)
    }
    const changeuser=()=>{
      setUserModel(true)
    }
    const closeuser=()=>{
      setUserModel(false)
    }
    const changebday=()=>{
      setbdayModel(true)
    }
    const closebday=()=>{
      setbdayModel(false)
    } 
    const changeaddress=()=>{
      setaddModel(true)
    }
    const closeaddress=()=>{
      setaddModel(false)
    }
    const changenumber=()=>{
      setnumModel(true)
    }
    const closenumber=()=>{
      setnumModel(false)
    }
    const updatepass=()=>{
      if(fetchedpass===curpass){
        if(newpass===newconpass){
        fetch("/account/changepassword?id="+user.user, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pass: newpass,
          }),
        })
      }
      else{
        setpasserror(true)
      }
 }    
      else{
        seterrorModel(true)
      }
    }
    const updateusername=()=>{
      fetch("/account/changeusername?id="+user.user, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
           username: newusername,
        }),
      })
    }
    const updatebday=()=>{
      fetch("/account/changebday?id="+user.user, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newbirthday: newbday,
        }),
      })
    }

    const updatenum=()=>{
       fetch("/account/changenumber?id="+user.user, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newNumber: newnum,
        }),
      })
    }
    const updateadd=()=>{
      fetch("/account/changeaddress?id="+user.user, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          newadd: newadd,
        }),
      })
    }
    const closeerror=()=>{
      seterrorModel(false)
    }
    const closepasserror=()=>{
      setpasserror(false)
    }
    return(
      <>
      
      <Navbar ispage={[false, false, true]}/>
      
      <Box sx={{width:'50%', alignitems:'center' }} p={5} px='25%'>
        <Paper>
          <Box p={5} textAlign='center' display='inline-block' alignItems='center'>
          <Grid  marginTop='2vh'><Typography style={{fontFamily: "open sans"}}variant='h3'><b>Welcome {username}</b></Typography></Grid>
          <Grid item id="profileImage">{user.user[0]}</Grid>   
          <Grid container alignItems="center" justifyContent="center" > <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Birthday:</b> {birthday}       <EditIcon onClick={changebday}></EditIcon></Typography></Grid>
          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}><b> Address:</b> {address}       <EditIcon onClick={changeaddress}></EditIcon></Typography></Grid>

          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Phone Number:</b> {number}       <EditIcon onClick={changenumber}></EditIcon></Typography></Grid>
       
          <Grid item xs={12}marginTop='2vh'><Button style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} variant="contained" size='small' onClick={changepass}>Change Passsword</Button></Grid>
          <Grid item xs={12}marginTop='2vh'><Button style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} variant="contained" size='small' onClick={changeuser}>Change Username</Button></Grid>
          <br></br>
          <br></br>
          </Grid> </Box></Paper></Box>
          <Dialog open={passmodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closepass}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Password</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField type='password'placeholder="Enter Current Password" onChange={(e)=>{setCurPass(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='12%'><TextField type='password' placeholder="Enter New Password" onChange={(e)=>{setNewPass(e.target.value)}}></TextField></Grid>
              <br/>

              <Grid item marginLeft='12%'> <TextField type='password'placeholder="Confirm New Password"onChange={(e)=>{setNewConPass(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={(e)=>{updatepass();closepass(e)}}>Change Passsword</Button></Grid>
              </DialogContent>
          </Dialog>
          <Dialog open={bdaymodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closebday}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Birthday</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField placeholder="Enter New Birthday" onChange={(e)=>{setNewBday(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={(e)=>{updatebday();closebday(e)}}>Change bday</Button></Grid>
              </DialogContent>
          </Dialog>
          <Dialog open={nummodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closenumber}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Number</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField placeholder="Enter New Number" onChange={(e)=>{setNewNum(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={(e)=>{updatenum();closenumber(e)}}>Change number</Button></Grid>
              </DialogContent>
          </Dialog> <Dialog open={addmodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closeaddress}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Address</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField placeholder="Enter New Address" onChange={(e)=>{setNewAdd(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={(e)=>{updateadd();closeaddress(e)}}>Change Address</Button></Grid>
              </DialogContent>
          </Dialog>
          <Dialog open={usernamemodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closeuser}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Username</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField placeholder="Enter New Username" onChange={(e)=>{setNewUserName(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={(e)=>{updateusername();closeuser(e)}}>Change Username</Button></Grid>
              </DialogContent>
          </Dialog>
          <Dialog open={errormodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closeerror}></ClearIcon></Grid>
          <DialogTitle>Error</DialogTitle>
            <DialogContent sx={{color:'red'}}>Please enter the correct current password</DialogContent>
          </Dialog>
          <Dialog open={passerror}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closepasserror}></ClearIcon></Grid>
          <DialogTitle>Error</DialogTitle>
            <DialogContent sx={{color:'red'}}>Please confirm your new password correctly</DialogContent>
          </Dialog>
            </>
)};



export default Account;