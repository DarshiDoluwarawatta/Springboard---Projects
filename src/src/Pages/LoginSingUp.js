import React, { useState } from 'react';
import LoginCard from '../Styles/LoginCard.css';
import Stack from '@mui/material/Stack'; //remind to import this
import Login from  '../Styles/Pictures/Login.png';
import Login2 from  '../Styles/Pictures/Login2.jpg';
import Login1 from  '../Styles/Pictures/E lraning Center.png';
import { StyledComponentBody } from '../Components/StyledComponents';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/StyledComponents';

export default function LoginSingUp(){

 
  const[username,setUserName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[isLoading,setIsLoading]=useState(false)
  const[error,setError]=useState(null)

 

  const handleSubmit=(e)=>{

    e.preventDefault();
    console.log("User Name :",username);
    console.log("E mail :",email);
    console.log("password :",password);


    if(!error && !isLoading){

      console.log("You sucessfully Logged in :",username);
    
    }
  }
    return (
    <><Navbar />
    <p></p><Stack direction="column" spacing={3}>
        <center><img src={Login1} alt="login" width={600} height={150} /><img src={Login2} alt="login" width={300} height={150} /><img src={Login} alt="login" width={350} height={150} /></center>

        <StyledComponentBody>`</StyledComponentBody>
        <form onSubmit={handleSubmit}>

          <div className='container'>
            <div className='header'>
              <div><h5> Welcome..! Online Portal</h5></div>
              <div className='text'>Login</div>
              <div className='underline'></div>
            </div>

            <div className='inputs'>
              <div className='input'>

                <input type='text' value={username} placeholder='UserName' onChange={(e) => setUserName(e.target.value)} />

              </div>
              <div className='input'>

                <input type='email' name="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />

              </div>

              <div className='input'>

                <input type='password' name='password' value={password} placeholder='Password'  minlength="8" maxlength="20"  onChange={(e) => setPassword(e.target.value)} />

              </div>
            </div>
            {/*<div className='forgot-password'>Lost Password ? <span>Click here..!</span></div>*/}
            <div className='submit-container'>
              <button className="submit" type="submit" disabled={error || isLoading}>Submit</button>
            </div>

            <div>
              <div> <label>Do not have an account?</label></div>
              <button className="submit" type="submit" disabled={error || isLoading}>Sign Up</button>
            </div>

          </div>
        </form>
      </Stack>
      <StyledComponentBody></StyledComponentBody>
        <div >
          <Footer>&copy; {new Date().getFullYear()}TechFusion Academy
          <br/>384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b>
          </Footer>
        </div>
      
      </>
    );

    }
  


