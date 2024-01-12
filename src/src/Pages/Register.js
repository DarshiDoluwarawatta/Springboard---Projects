import React,{useEffect, useState} from 'react';
import LoginCard from '../Styles/LoginCard.css';
import Stack from '@mui/material/Stack'; //remind to import this
import Register1 from  '../Styles/Pictures/register1.png';
import Register2 from  '../Styles/Pictures/register2.png';

import {Heading, Heading2 } from '../Components/StyledComponents';
import {StyledComponentBody} from '../Components/StyledComponents';
import { Email, Password } from '@mui/icons-material';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/StyledComponents';
  

export default function Register() {

  const[confirmPassword,setConfirmPassword]=useState("")
  const[isMatching,setIsMatching]=useState(true)
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(null)
  const[password,setPassword]=useState("")
  const[email,setEmail]=useState("")
  const[username,setUserName]=useState("")
  const[mobilNo,setMobileNo]=useState("")


  const handlePasswordChange=(e)=>{

    setPassword(e.target.value);

  }

const handleConfirmPasswordChange=(e)=>{

    setConfirmPassword(e.target.value);
    setIsMatching(e.target.value===password)

}

const checkUsernameAvailability=(username)=>{

  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      if(["Rumal","Kanchna","Darshi"].includes(username)){

        reject("user name is taken");
      }else{

        resolve("user name is available")
      }


    },1000);


  });

};

useEffect(()=>{

  if(!username) return;

  setIsLoading(true);
  setError(null);


  checkUsernameAvailability(username)
    .then(()=>setEmail(null))
    .catch((err)=>setError(err))
    .finally(()=>setIsLoading(false));

},[username]);



const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("User Name :",username);
  console.log("E mail :",email);
  console.log("password :",password);
  console.log("Mobil No :",mobilNo);

if(!error && !isLoading){

  console.log("Form submitted with username :",username);

}

};

  return (
    <><div><Navbar /></div><p></p>
    <Stack direction={'column'}>
    <center><img src={Register2} alt="login" width={250} height={150} /><h2 align="center">Register Here..!</h2></center><StyledComponentBody>`</StyledComponentBody>
    </Stack>
    
    <form onSubmit={handleSubmit}>
    
      <div className='container'>
        <div className='header'>

          <div className='text'>Registration Page</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
          <div className='input'>
            <input type='text' placeholder='User Name' value={username} onChange={(e) => setUserName(e.target.value)} required />

          </div>
          <div className='input'>

            <input type='email' name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

          </div>
          <div className='input'>

            <input type='text' value="mobilNo" placeholder='Mobile No' onChange={(e) => setMobileNo(e.target.value)} />

          </div>

          <div className='input'>

            <input type='password' name='password' value={password} placeholder='Password' minlength="8" maxlength="20" onChange={handlePasswordChange} />

          </div>

          <div className='input'>

            <input type='password' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' minlength="8" maxlength="20" onChange={handleConfirmPasswordChange} />

          </div>
          {!isMatching && <span style={{ color: "red" }}>Password do not match</span>}
        </div>
        {/*<div className='forgot-password'>Lost Password ? <span>Click here..!</span></div>*/}
        <div className='submit-container'>
          <div><button className='submit' type="submit" disabled={error || isLoading}>Register</button></div>
        </div>



      </div>
    </form>
    <StyledComponentBody></StyledComponentBody>
        <div >
          <Footer>&copy; {new Date().getFullYear()}TechFusion Academy
          <br/>384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b>
          </Footer>
        </div>
    
    
    </>
    
  );
}
