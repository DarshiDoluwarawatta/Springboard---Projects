import React,{useEffect, useState} from 'react';
import LoginCard from '../Styles/LoginCard.css';
import Stack from '@mui/material/Stack'; //remind to import this
//import Register1 from  '../Styles/Pictures/register1.png';
import course1 from  '../Styles/Pictures/Courses1.png';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Email } from '@mui/icons-material';
//import {Heading, Heading2 } from '../Components/StyledComponents';
import {StyledComponentBody} from '../Components/StyledComponents';
//import { Email, Password } from '@mui/icons-material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/StyledComponents';
import validator from 'validator';



export default function Register() {

  //const[confirmPassword,setConfirmPassword]=useState("");
  //const[isMatching,setIsMatching]=useState(true);
  const[isLoading,setIsLoading]=useState(false);
  const[error,setError]=useState(null);
  //const[password,setPassword]=useState("");
  const[email,setEmail]=useState("bac@gmail.com");
  const[username,setUserName]=useState("");
  const[mobilNo,setMobileNo]=useState("012345678");
  const [showError, setShowError] = useState(false);
  const [message1, setMessage1] = useState(" ");
 const [userId, setUserID] = useState('');
 const [courseId,setCourseID] = useState('');

 

//set gender type
//const handleGenderChange = (e) => {
 // setGender(e.target.value);
//};
//check user name is available or not
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

//check user name availability
  checkUsernameAvailability(username)
    .then(()=>setEmail(null))
    .catch((err)=>setError(err))
    .finally(()=>setIsLoading(false));

},[username]);


//check phone no. length
const handlePhoneNumber=(e)=>{
  let new_Number = e.target.value;
  let new_Number_length = new_Number.length;
  setMobileNo(new_Number);
  if (new_Number_length > 10 || new_Number_length < 10) {
    setShowError(true);
  } else if (new_Number_length === 10) {
    setShowError(false);
  }

};

//check Email is valid or not.
const handleEmail=(e)=>{

  let new_Email = e.target.value;
    setEmail(new_Email);
    if (!validator.isEmail(new_Email)) {
      setMessage1("Please, enter a valid email!");
    } else {
      setMessage1("");
    }
}



//check form sumitted or not
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("User ID :",userId );
  console.log("User Name :",username);
  console.log("Mobil No :",mobilNo);
  console.log("Email :",email);
if(!error && !isLoading){

  console.log("Form submitted with username :",username);

}

};

  return (
    <><div><Navbar /></div><p></p>
   
    <Stack direction={'column'}>
    <center><img src={course1} alt="login" width={350} height={250} /><h2 align="center">Register here..!</h2></center><StyledComponentBody>`</StyledComponentBody>
    </Stack>
    
    <form onSubmit={handleSubmit}>
    
      <div className='container3'>
        <div className='header'>

          <div className='text'>Virtual Course Registration Form</div>
          <div className='underline'></div>
        </div>

        <div className='inputs'>
        <div className='input'>
        <SchoolSharpIcon/>
            <input type='text' placeholder='Course ID' value={courseId} onChange={(e) => setCourseID(e.target.value)} required />

          </div>
          
        <div className='input'>
        <PersonSharpIcon/>
            <input type='text' placeholder='Student ID' value={userId} onChange={(e) => setUserID(e.target.value)} required />

          </div>

          <div className='input'>
            <PersonSharpIcon/>
            <input type='text' placeholder='Student Name' value={username} onChange={(e) => setUserName(e.target.value)} required />

          </div>
          
                    
          <div className='input'>
          
            <LocalPhoneSharpIcon/>
            <input type='number'  name="mobilNo" value={mobilNo} placeholder='Mobile No' onChange={handlePhoneNumber} required/>{showError ? (
            <div style = {{ color: "red" }}> Invalid Mobile Number Length </div>
            ) : (
            <div> Valid Mobile number. </div>
            )}

          </div>


          <div className='input'>
            <Email/>
            <input type='email' name="email" value={email} placeholder='Email' onChange={handleEmail} /><div style = {{ color: "red" }}> {message1} </div>

          </div>
           
         

          <center><div >
          <h5>List of Clases : </h5>
          <select >
             
            <option value=" ">--Select--</option>
                       
            
            <option value="IT 106">IT 106</option>
            <option value="IT 107">IT 107</option>
            <option value="IT 108">IT 108</option>
            <option value="IT 109">IT 109</option>
            <option value="IT 110">IT 110</option>
            <option value="IT 111">IT 111</option>
            <option value="IT 112">IT 112</option>
            <option value="Web DEveloper">Web Developing</option>
            <option value="Java">Java Programing</option>
            
          </select><br/><p><br/>  Select a class</p>

          </div>
          </center>
         
             
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
          <br />384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b><b>Tell:075 655 7045</b>
          <p ><a href=""><YouTubeIcon/></a>
              <a href=""><FacebookIcon/></a>
              <a href=""><SubscriptionsIcon/></a></p>
      </Footer>
        </div>
    
    
    </>
    
  );
}
