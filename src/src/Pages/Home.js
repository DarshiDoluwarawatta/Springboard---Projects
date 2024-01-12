import React from 'react';
import Stack from '@mui/material/Stack'; //remind to import this
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Button from '@mui/material/Button';
import { Heading1, StyledComponentBody } from '../Components/StyledComponents';
import { Heading } from '../Components/StyledComponents';
import Logo from  '../Styles/Pictures/Blue e-Learning Platform Branding Education Email Newsletter Graphic.png';
import SimpleCard from '../Components/SimpleCard';
import { Footer } from '../Components/StyledComponents';
import VisionCard from '../Components/VisionCard';
import Navbar from '../Components/Navbar';




export default function Home() {
  return (
   
      <><div>
          <Navbar/>
          <StyledComponentBody></StyledComponentBody>
          <Stack direction="row" spacing={3} ><Heading>Lets E learning at your Home</Heading>
           
              <Button type='submit' variant="contained" style={{ backgroundColor: 'blue', width: '100px', color: "primary" }}>Sign Up</Button>
            
            
               <Button type="submit" variant="contained" style={{ width: '100px', color: "primary" }}>Login</Button>
           
            <Heading1>Any Questions? Call 075 655 7045</Heading1><YouTubeIcon/><FacebookIcon/><SubscriptionsIcon/>
          </Stack>
        </div>
          <StyledComponentBody></StyledComponentBody>
        <div>
          <Stack direction="row" spacing={15}>
            <img src={Logo} alt="elaerning" width={600} height={200}/>
          <SimpleCard/>
          </Stack>
      
          <VisionCard/>
          <StyledComponentBody>`</StyledComponentBody>
        </div>
    
    
      
          <StyledComponentBody></StyledComponentBody>
        <div >
          <Footer>&copy; {new Date().getFullYear()}TechFusion Academy
          <br/>384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b>
          </Footer>
        </div>
      </>
      
  );
}


