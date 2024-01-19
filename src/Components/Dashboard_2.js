import React from 'react';
import {Routes,Route} from 'react-router-dom';
import DashboardContent from './DashboardContent';
import About from "./About";

export default function Dashboard_2() {
  return (
    <div>
      <Routes>
            <Route path='/' element={<DashboardContent/>}/>
            <Route path='about' element={<About/>}/>
          

      </Routes>
    </div>
  );
}
