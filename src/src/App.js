/* eslint-disable react/jsx-no-undef */

//import './App.css';

import React from 'react';
import Home from './Pages/Home';
import { Router,Routes,Route } from 'react-router-dom';
import AboutUs from './Pages/AboutUs';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import LoginSingUp  from './Pages/LoginSingUp';
import Register from './Pages/Register';
import Events from './Pages/Events';

export default function App() {
  return (
   /*<Home/>
   <AboutUs/>
   <Courses/>
   <Contact/>
   <LoginSingUp/>
   <Register/>*/
   <Events/>
  );
}



