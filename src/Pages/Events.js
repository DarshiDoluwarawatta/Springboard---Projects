import React from 'react';
import Navbar from '../Components/Navbar';
import { Heading1, StyledComponentBody } from '../Components/StyledComponents';
import { Footer } from '../Components/StyledComponents';
import Logo7 from  '../Styles/Pictures/evnet.png';
import Stack from '@mui/material/Stack'; //remind to import this
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Events() {
  return (
    
    <><div>
    <Navbar/>
    <StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody>
    <center><h1>Upcoming Courses and Events-</h1></center>
    <StyledComponentBody></StyledComponentBody>
    <Stack direction="row" spacing={15} >
    <Stack direction="column" spacing={15} >
    <div align="center"><h5><a href="">SPEAKERS</a></h5>
    <h5><a href="">SCHEDULE</a></h5>
    <h5><a href="">GET IN TOUCH</a></h5>
    </div>
    </Stack>
    <center><img src={Logo7} alt="el" width={700} height={400}/></center>
    
    </Stack>
    <h3 align="center">Coming soon .....</h3>
    <StyledComponentBody></StyledComponentBody>
    
    
   
     
   <p></p> 
   <p></p> 
   <p></p> 
   <p></p> 
   <p></p>
   <p></p> 
   <p></p> 
   <p></p>
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
