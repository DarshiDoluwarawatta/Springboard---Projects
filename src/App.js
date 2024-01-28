//import './App.css';

import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import Home from './Pages/Home';

import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'
import Register from './Pages/Register';
import LoginSingUp from './Pages/LoginSingUp';
import Events from './Pages/Events';
import Courses from './Pages/Courses';
import CourseRegistration from './Pages/CourseRegistration';
import StudentRegistration from './Pages/StudentRegistration';
import BecomeATeacher from './Pages/BecomeATeacher';
import Navbar from './Components/Navbar';
import DashboardPage from './Pages/DashboardPage';
import MessageSender from './Components/MessageSender';


 


function App() {
  return (
    
    <div className="App">
      
      <Router>
        <Routes>
        
        <Route path ='/' element={<Home/>}/>
        <Route path ='/AboutUs'  element={<AboutUs/>}/>
        <Route path ='/Contact'  element={<Contact/>}/>
        <Route path ='/Courses'  element={<Courses/>}/>
        <Route path ='/Events'  element={<Events/>}/>
        <Route path ='/BecomeATeacher'  element={<BecomeATeacher/>}/>
        <Route path ='/CourseRegistration'  element={<CourseRegistration/>}/>
        <Route path ='/LoginSignUp'  element={<LoginSingUp/>}/>
        <Route path ='/Register'  element={<Register/>}/>
        <Route path ='/StudentRegistration'  element={<StudentRegistration/>}/>
        <Route path ='/Navbar'  element={<Navbar/>}/>
        <Route path ='/MessageSender'  element={<MessageSender/>}/>
      

        </Routes>
        </Router>

     
    
          
    </div>

     


        
  );
}

export default App;