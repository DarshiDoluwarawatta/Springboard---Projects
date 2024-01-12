import React from 'react';
import Navbar from '../Components/Navbar';
import { Heading1, StyledComponentBody } from '../Components/StyledComponents';
import { Footer } from '../Components/StyledComponents';
import Logo7 from  '../Styles/Pictures/elearning-education.png';

export default function Events() {
  return (
    
    <><div>
    <Navbar/>
    <StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody>
    <StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody><StyledComponentBody></StyledComponentBody>
    <h1>-No Events-</h1>

    <img src={Logo7} alt="el" width={600} height={200}/>
   
     
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
          <br/>384/2,Wekkawatta,Ihala Bomiriya,Kaduwela.<b>E mail:ddoluweera75@gmail.com</b>
          </Footer>
        </div>
   
   </>
  );
}
