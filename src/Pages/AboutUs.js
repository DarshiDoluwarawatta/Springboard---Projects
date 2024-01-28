import React from 'react';
import {Heading1, Heading2, Heading3, StyledComponentBody} from '../Components/StyledComponents';
import Stack from '@mui/material/Stack'; //remind to import this
import Register2 from  '../Styles/Pictures/elearning-education.png';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/StyledComponents';
import AboutCard from '../Components/AboutCard';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Heading } from '../Components/StyledComponents';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';


export default function AboutUs() {
  return (
    <><Navbar /><StyledComponentBody></StyledComponentBody>

    <Stack direction="row" spacing={3} >
              <Heading><div>Who we are?</div></Heading><p></p><p></p>   
               <center><p><img src={Register2} alt="login" width={750} height={350} /></p></center>
               <Heading1><div></div>Any Questions? Call 075 655 7045<p></p>
               <Stack direction="row" spacing={3} >
               <Button type='submit' variant="contained" style={{ backgroundColor: 'blue', width: '100px', color: "primary" }}><NavLink to="/Register">Sign Up</NavLink></Button>
               
              
               <Button type="submit" variant="contained" style={{ width: '100px', color: "primary" }}><NavLink to="/LoginSignUp">Login</NavLink></Button>
              </Stack>
               
               </Heading1>
    </Stack>

    

         
    
    <Stack direction="column" spacing={4}>
     
      <div>
        <h2>Our Vision & Mission - අපේ දැක්ම</h2><StyledComponentBody>`</StyledComponentBody>
        <Heading2><left>" Providing support for innovative digital learning, transforming teaching with technology, and quality education"</left></Heading2>
      </div>
    </Stack>
   
    <StyledComponentBody></StyledComponentBody><center></center><AboutCard /><div>
        <Footer>&copy; {new Date().getFullYear()}TechFusion Academy 
          <br />384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b><b>Tell:075 655 7045</b>
         <p ><a href=""><YouTubeIcon/></a>
              <a href=""><FacebookIcon/></a>
              <a href=""><SubscriptionsIcon/></a></p>
        </Footer>
      </div></>
    
    

    
  );
}
