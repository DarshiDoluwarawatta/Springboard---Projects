import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import NabarStyles from '../Styles/NavbarStyles.css';
import { ThemeProvider } from './ThemeProvider';
import { NavLink } from 'react-router-dom';
import Logo10 from  '../Styles/Pictures/Tech Fusion academy.png';


function Navbar(){

    return(
        <>
            <nav className="nav">
                <a href="index.html"><svg id="" width="100" height="33" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"><svg id="" width="100" height="33" viewBox="0 0 109 43" fill="none" xmlns="http://www.w3.org/2000/svg"> </svg>
                                    </svg>
            
            
                </a>

               
                <div>
                    <ul id="navbar">
                        
                         <li><img src={Logo10} alt="" width={50} height={50}/></li>
                        
                        <div className='menu'>
                
                        <span></span>
                        <span></span>
                        <span></span>
       
                        </div>

                        <li><NavLink to="/"><HomeIcon/></NavLink></li>
                        <li><NavLink to="/">Home page</NavLink></li>
                        <li><NavLink to="/AboutUs">About Us</NavLink></li>              
                        <li><NavLink to="/Courses">Courses</NavLink></li>
                        <li><NavLink to="/Events">Events</NavLink></li>
                        <li><NavLink to="/BecomeATeacher">Become A Teacher</NavLink></li>
                        {/*<li><a href="index.html">Donations</a></li>*/}
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                       
                        
                         <li><a href="index.html"><ThemeProvider/></a></li>
                    </ul>
                </div>



            </nav>
            


        </>
    )
}


export default Navbar;