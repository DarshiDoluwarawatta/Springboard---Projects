//import logo from './logo.svg';
//import './App.css';

import { LoginContext } from './Components/LoginContext';
import { RouterProvider } from 'react-router';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Components/Login';
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {
  return (
    <LoginContext>
      <Router>
        <Routes>
        
          <Route path="/" elements={<Login/>}/>
          <Route element={<ProtectedRoutes/>}>
             
          </Route>
        </Routes>
      
      
      
      </Router>
    
    
    
    
    </LoginContext>
  );
}

export default App;
