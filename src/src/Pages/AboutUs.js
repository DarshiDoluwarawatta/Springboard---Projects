import React from 'react';
import {Heading1, Heading2, Heading3, StyledComponentBody} from '../Components/StyledComponents';
import Stack from '@mui/material/Stack'; //remind to import this
import Register2 from  '../Styles/Pictures/elearning-education.png';
import Navbar from '../Components/Navbar';
import { Footer } from '../Components/StyledComponents';




export default function AboutUs() {
  return (
    <><Navbar />
    <StyledComponentBody></StyledComponentBody>
    <Stack direction="column" spacing={3}>
      <center><p><img src={Register2} alt="login" width={450} height={250} /></p><h2 align="center">About Us</h2></center>
      <div>
        <h1> Our VISION & MISSION</h1><StyledComponentBody>`</StyledComponentBody>
        <Heading2><left>" Providing support for innovative digital learning, transforming teaching with technology, and quality education"</left></Heading2>
      </div>
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
