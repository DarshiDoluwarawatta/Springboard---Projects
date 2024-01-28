import React from 'react';
import Navbar from '../Components/Navbar';
import { Heading1, StyledComponentBody } from '../Components/StyledComponents';
import Stack from '@mui/material/Stack'; //remind to import this
import AddressCard from '../Components/AddressCard';
import Logo8 from  '../Styles/Pictures/Contact1.png';
import Logo3 from  '../Styles/Pictures/register1.png';
import Logo9 from  '../Styles/Pictures/Contact2.png';
import Logo1 from  '../Styles/Pictures/LogoContact.png';
import { Footer } from '../Components/StyledComponents';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';

export default function Contact() {
  return (
    <div>
    <Navbar/>
    <br/>
    
          <center><img src={Logo1} alt="elaerning" width={900}height={300}/></center>
   
    <div><center><AddressCard/></center></div>

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
