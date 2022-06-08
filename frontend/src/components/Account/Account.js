import React, {useEffect, useState, useContext} from "react";
import "./Account.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import {Button} from '@mui/material'
function Account(){
    const user = useContext(UserContext);
    const [birthday,setBirthday] = useState()
    const [address,setAddress] = useState()
    const[number,setNumber] = useState()
    const[cc,setCC] = useState()

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

          }
        }
        
      })},[])
    
    const editonClick=()=>{
      console.log("edit clicked")
    }
    return(
      <>
      
      <Navbar ispage={[false, false, true]}/>
      <div className="container">
        <div className="cover-photo">
          <img src="profile.jpg" class="profile"></img>
        </div>
        <div className="profile-name">Welcome {user.user}
          <p className="about">Birthday: {birthday}</p>
          <p className="about">Address: {address}</p>
          <p className="about">Phone Number: {number}</p>
          <p className="about">Credit Card: {cc}</p>
        </div>
          <Button  variant="contained" size='small'>Change Payment Method</Button>
          <br></br>
          <br></br>
          <Button  variant="contained" onClick='editonClick'>Edit profile</Button>
      </div>
      </>
)};



export default Account;