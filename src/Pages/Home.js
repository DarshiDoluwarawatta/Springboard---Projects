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
import { NavLink } from 'react-router-dom';




export default function Home() {
  return (
   
      <><div>
          <Navbar/>
          <StyledComponentBody></StyledComponentBody><div></div>
          <Stack direction="row" spacing={3} >
              <Heading><div>Lets E learning at your Home</div></Heading><p></p><p></p>
              <Heading1><div></div>Any Questions? Call 075 655 7045</Heading1>
              
              <Button type='submit' variant="contained" style={{ backgroundColor: 'blue', width: '100px', color: "primary" }}><NavLink to="/Register">Sign Up</NavLink></Button>
            
            
               <Button type="submit" variant="contained" style={{ width: '100px', color: "primary" }}><NavLink to="/LoginSignUp">Login</NavLink></Button>
           
            
          </Stack>
        </div>
          <StyledComponentBody></StyledComponentBody>
        <div>
          <Stack direction="row" spacing={15}>
            <img src={Logo} alt="elaerning" width={650} height={250}/>
            <SimpleCard/>
          </Stack>
          <p></p>
          <VisionCard/>
          <StyledComponentBody>`</StyledComponentBody>
        </div>
    
    
      
          <StyledComponentBody></StyledComponentBody>
        <div >
          <Footer>&copy; {new Date().getFullYear()}TechFusion Academy 
          <br />384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b><b>Tell:075 655 7045</b>
          <p ><a href=""><YouTubeIcon/></a>
              <a href=""><FacebookIcon/></a>
              <a href=""><SubscriptionsIcon/></a>
          </p>
          </Footer>
        </div>
      </>
      
  );
}
