import React from 'react';
import NavLink from 'react-router-dom';

export default function DashboardContent() {
  return (
    <div>
      <nav>
      <NavLink to='/dashboard_2'>Dashboard</NavLink>
      <NavLink to='about'>About</NavLink>
      </nav>
      
     <hr/>
     Dashboard Page
    </div>
  );
}
