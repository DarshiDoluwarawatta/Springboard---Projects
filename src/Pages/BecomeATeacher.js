import React,{ useState} from 'react';
import Navbar from '../Components/Navbar';
import { Heading, Heading1,StyledComponentBody } from '../Components/StyledComponents';
import Stack from '@mui/material/Stack'; //remind to import this
import Teacher from  '../Styles/Pictures/Teacher.png';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import CheckSharpIcon from '@mui/icons-material/CheckSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Footer } from '../Components/StyledComponents';
import { Email,Password } from '@mui/icons-material';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import LocalPhoneSharpIcon from '@mui/icons-material/LocalPhoneSharp';
import validator from 'validator';


export default function BecomeATeacher() {


 //const[isMatching,setIsMatching]=useState(true);
 const[isLoading,setIsLoading]=useState(false);
 const[error,setError]=useState(null);
 const[isMatching,setIsMatching]=useState(true);
 const[password,setPassword]=useState("");
 const[confirmPassword,setConfirmPassword]=useState("")
 const[email,setEmail]=useState("bac@gmail.com");
 const[firstname,setFirstName]=useState("");
 const[lastname,setlastName]=useState("");
 const[username,setUserName]=useState("");
 const[mobilNo,setMobileNo]=useState("012345678");
 const [showError, setShowError] = useState(false);
 
 const [subjectName, setSubjectName] = useState(" ");
 const [qualification, setQualification] = useState(" ");

 const [message, setMessage] = useState(" ");
 
  
  const [message1, setMessage1] = useState(" ");
 
 const [messageColor, setMessageColor] = useState("green");
 const [gender, setGender] = useState('');

   
//set Password
const handlePasswordChange=(e)=>{

  setPassword(e.target.value);

}
// check password is matching or not
const handleConfirmPasswordChange=(e)=>{

  setConfirmPassword(e.target.value);
  setIsMatching(e.target.value===password)

}
 


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
 
const handleGenderChange = (e) => {
  setGender(e.target.value);
};

 
 
 
 
 //check form sumitted or not
const handleSubmit=(e)=>{
  e.preventDefault();
  console.log("Last Name :",lastname);
  console.log("First Name :",firstname);
  console.log("E mail :",email);
  
  console.log("Mobil No :",mobilNo);
  
 

if(!error && !isLoading){

  console.log("Form submitted with username :",lastname);

}

};
  return (
    <div>
    <Navbar/>
    <p></p>
   
    <Stack direction={'column'}>
    <center><img src={Teacher} alt="login" width={450} height={250} /><h2 align="center">How to become an instructor</h2>පහල ඇති පෝරමය පුරවා අයදුම් කරන්න</center><StyledComponentBody>`</StyledComponentBody>
    </Stack>
    
    <Heading1>
    Through TechFusion.lk you can share your knowledge without limits and anyone who is interested in what is being taught can learn from you.<br/> At the same time, you can earn a good monthly income based on your teaching ability. If you can spend a little extra time for this, you too can have a successful journey with TechFusion.lk
    </Heading1>

    <form onSubmit={handleSubmit}>
    
    <div className='container2'>
      <div className='header'>

        <div className='text'>Instructor Registration Page</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
       
      <div className='input'>
      <PersonSharpIcon/>
      <input type='text' placeholder=' First Name' value={firstname} onChange={(e) => setFirstName(e.target.value)} required />

    </div>


    <div className='input'>
    <PersonSharpIcon/>
    <input type='text' placeholder='Last Name' value={lastname} onChange={(e) => setlastName(e.target.value)} required />

   </div>
        
   <div className='input'>
    <PersonSharpIcon/>
    <input type='text' placeholder="User Name" value={username} onChange={(e) => setUserName(e.target.value)} required />

   </div>
        




  <div className='input'>
        <Email/>
          <input type='email' name="email" value={email} placeholder='Email' onChange={handleEmail} /><div style = {{ color: "red" }}> {message1} </div>

        </div>

        
        <div className='input'>
        
          <LocalPhoneSharpIcon/>
          <input type='number'  name="mobilNo" value={mobilNo} placeholder='Mobile No' onChange={handlePhoneNumber} required/>{showError ? (
          <div style = {{ color: "red" }}> Invalid Mobile Number Length </div>
          ) : (
          <div> Valid Mobile number. </div>
          )}

        </div>


        <label >  Gender Type:
          
           
        <input type="radio" name="gender"  id='male' value="male" checked={gender === 'male'} onChange={handleGenderChange} required />Male
        
        <input type="radio" name="gender" id='female' value="female" checked={gender === 'female'} onChange={handleGenderChange} required/>Female
        
      
      </label>

      <div className='input'>Subject:
      
      <input type='text'  value={subjectName} placeholder='Subject'   onChange={(e) => setSubjectName(e.target.value)} required />

    </div>
    <div className='input'>Qualification:
      
      <input type='text'  value={qualification} placeholder='Qualification' onChange={(e) => setQualification(e.target.value)} required />

    </div>

    <div className='input'>
    <Password/>   
     <input type='password' name='password' value={password} placeholder='Password' minlength="8" maxlength="20" onChange={handlePasswordChange} required/>

   </div>

   <div className='input'>
     <CheckSharpIcon/>
     <input type='password' name='confirmPassword' value={confirmPassword} placeholder='Confirm Password' minlength="8" maxlength="20" onChange={handleConfirmPasswordChange} required/>

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
    <br />384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b><b>Tell:075 655 7045</b>
    <p ><a href=""><YouTubeIcon/></a>
        <a href=""><FacebookIcon/></a>
        <a href=""><SubscriptionsIcon/></a></p>
</Footer>
  </div>

    </div>
    
  );
}