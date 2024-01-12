import React from 'react';
import Navbar from '../Components/Navbar';
import { Heading1, StyledComponentBody } from '../Components/StyledComponents';
import Stack from '@mui/material/Stack'; //remind to import this
import AddressCard from '../Styles/AddressCard';
import Logo3 from  '../Styles/Pictures/register1.png';
import { Footer } from '../Components/StyledComponents';

export default function Contact() {
  return (
    <div>
    <Navbar/>
    <br/>
    <center><img src={Logo3} alt="elaerning" width={400} height={200}/></center><p></p>
    <StyledComponentBody>`</StyledComponentBody><p></p>
    <div><center><AddressCard/></center></div>

    <StyledComponentBody></StyledComponentBody>
        <div >
          <Footer>&copy; {new Date().getFullYear()}TechFusion Academy
          <br/>384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b>
          </Footer>
        </div>
      
   
    
    </div>
  );
}
