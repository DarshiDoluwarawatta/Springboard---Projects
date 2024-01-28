import React,{useState,useEffect} from 'react';
import Navbar from '../Components/Navbar.js';
import Logo6 from  '../Styles/Pictures/Courses.png';
import Stack from '@mui/material/Stack'; //remind to import this
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { StyledComponentBody,Heading, StyledButton } from '../Components/StyledComponents.js';
import { Footer } from '../Components/StyledComponents';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import { NavLink } from 'react-router-dom';


export default function Courses() {
  const[userData,setUserData]=useState([]);
  const[userSerchData,setUserSerchData]=useState([]);
  const[name,SetName]=useState('')
  const[course,setCourse]=useState('')
  
  useEffect(() => {
    const data =[
      
      {name:"Manoj",lname:"perera",age:"45",profession:"Java Instructor",course:"Java",Grade:"any"},
      {name:"Akila",lname:"Ranathunga",age:"36",profession:"It teacher",course:"IT",Grade:"6-11"},
      
      {name:"Jagath", lname:"Withanage",age:"28",profession:"It Teacher",course:"IT", Grade:"O/L && A/L"},
      {name:"Darshi", lname:"Doluweera",age:"51",profession:"BIT (UCSC)Graduate",course:"IT", Grade:"6-11"},
     { name:"Saman", lname:"Senadeera",age:"37",profession:"Full Stack Developer",course:"Web DEveloper", Grade:"any"},
    
    ];

    setUserData(data);
    setUserSerchData(data);
  },[]);
  
    const handleSearch=()=>{
        debugger
        //alert("Clicked")
        const newData =
        userData
         .filter(x=>x.name===(name===''? x.name:name))
         .filter(y=>y.course===(course===''? y.course:name))
          setUserData(newData)
          setUserSerchData(newData);

    }
  return (
    <>
    <Navbar/>
    <p></p><p></p>
   <div>
   <Stack direction="row" spacing={3} >
   <h3>Register Here....</h3>
   <StyledButton><NavLink to="/CourseRegistration">Register</NavLink></StyledButton>
   </Stack>
    <center><img src={Logo6} alt="" width={425} height={300}/></center><p></p>
    <StyledComponentBody>`</StyledComponentBody><p></p>
    <Heading>Courses</Heading>
    </div>
    <div>
      
      
     
      <Table>
        <tr>
          
        <td>
        <input class="form-control"
        type='text' placeholder='Enter name .......' onChange={(e) => SetName(e.target.value)} />
      </td>
        <td>
            <select class="form-control" onChange={(e)=>setCourse(e.target.value)}>
             
            <option value=" ">--Select--</option>
            <option value="Java">Java</option>
            
            <option value="IT">IT</option>
            <option value="Web DEveloper">Web Developer</option>
            
            </select>

         </td>
          
          
          
          <td>
           
          <StyledButton onClick={() => handleSearch()}><SearchSharpIcon/>Search</StyledButton>
          </td>

        </tr>




      </Table>

      <Table responsive striped size='sm'>
        <thead>
          <tr>


            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>profession</th>
            <th>Course</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
          {userSerchData && userSerchData.length > 0 ?
            userSerchData.map(item => <tr>
              <td>{item.name}</td>
              <td>{item.lname}</td>
              <td>{item.age}</td>
              <td>{item.profession}</td>
              <td>{item.course}</td>
              <td>{item.Grade}</td>
            </tr>
            )

            : "No data"}
        </tbody>




      </Table>

    


    </div>

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


 
