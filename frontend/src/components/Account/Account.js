import React, {useEffect, useContext, useState} from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {Button, Dialog,Typography,Container,Grid, DialogTitle, DialogContent, TextField} from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';

const Account=()=>{
    const user = useContext(UserContext);
    const [birthday,setBirthday] = useState()
    const [address,setAddress] = useState()
    const[number,setNumber] = useState()
    const[cc,setCC] = useState()
    const[passmodel,setPassModel] = useState()
    const[curpass, setCurPass] = useState()
    const[newpass, setNewPass] = useState()
    const[newconpass, setNewConPass] = useState()
    const[fetchedpass,setFetchedpass] = useState()
    let navigate = useNavigate();
    
    useEffect(() => {
          if (user.user === '') {
              navigate('/login');
          }
    },[]);
   
    useEffect(() => {
      fetch("http://localhost:9000/shopping/usernames")
      .then((res) => res.json())
      .then((data)=>{
        for(let i =0;i<data.result.length;i++) {
          if(user.user==data.result[i].id){
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
    const updatepass=()=>{
      if(fetchedpass===curpass){
        if(newpass===newconpass){
        fetch("http://localhost:9000/account/changepassword?id="+user.user, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            pass: newpass,
          }),
        })
        .then(console.log("done"))
        console.log(fetchedpass)
      }
 }     
      else{
        console.log("incorrect current password")
      }
    }
    return(
      <>
      
      <Navbar ispage={[false, false, true]}/>
          
       <Grid container alignItems="center" justifyContent="center">
          <Grid  marginTop='2vh'><Typography style={{fontFamily: "open sans"}}variant='h3'><b>Welcome {user.user}</b></Typography></Grid></Grid> 
          <Grid item id="profileImage">{user.user[0]}</Grid>   
          <Grid container alignItems="center" justifyContent="center" marginLeft='40%'> <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}><b>Birthday:</b> {birthday}</Typography></Grid>
          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}><b> Address:</b> {address}</Typography></Grid>

          <Grid item xs={12}marginTop='2vh'><Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Phone Number:</b> {number}</Typography></Grid>
          <Grid item xs={12}marginTop='2vh'> <Typography variant='h6'style={{fontFamily: "open sans"}}> <b>Credit Card:</b> {cc}</Typography></Grid>
       
          <Grid item xs={12}marginTop='2vh'><Button style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} variant="contained" size='small' onClick={changepass}>Change Passsword</Button></Grid>
          <br></br>
          <br></br>
          </Grid> 
          <Dialog open={passmodel}>
          <Grid item marginLeft='92%' marginTop='2%'><ClearIcon onClick={closepass}></ClearIcon></Grid>
            <DialogTitle variant="h4"><b>Change Password</b></DialogTitle>
            <DialogContent>
              <Grid item maxWidth='100%' marginLeft='12%'><TextField placeholder="Enter Current Password" onChange={(e)=>{setCurPass(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='12%'><TextField placeholder="Enter New Password" onChange={(e)=>{setNewPass(e.target.value)}}></TextField></Grid>
              <br/>

              <Grid item marginLeft='12%'> <TextField placeholder="Confirm New Password"onChange={(e)=>{setNewConPass(e.target.value)}}></TextField></Grid>
              <br/>
              <Grid item marginLeft='20%'><Button variant="contained"style={{ backgroundColor: "#5BAFFF", fontFamily:'open sans' }} onClick={updatepass}>Change Passsword</Button></Grid>
              </DialogContent>
          </Dialog>
      </>
)};



export default Account;