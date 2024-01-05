import React,{useState} from 'react';
import "../Styles/LoginCard.css";
import { StyledComponentBody } from '../Components/StyledComponents';
import { Button } from '../Styles/Button';
import Stack from '@mui/material/Stack'; //remind to import this


export default function Login() {
const [inputValue,setInputValue]=useState('');
const [selectValue,setSElectValue]=useState('');

const handleSubmit=(e)=>{
  e.preventDefault();
  alert('Form Submitted');

}
const handleInputChange=(e)=>{
  console.log('input Tag:',e.target)
  setInputValue(e.target.value);

}

const handleReset=(e)=>{
    setInputValue('');
    setSElectValue('');

}

  return (
    <Stack direction="column" spacing={3} >
   
    <><div style={{ padding: '20px' }} />
    <form onSubmit={handleSubmit} onReset={handleReset}>
    <div className='box'>
      <div className='container'>
        <div className='top-header'>
          <span>Have an Account ?</span>
          <header>Login</header>
        </div>
        <div>
          <StyledComponentBody></StyledComponentBody>
          <input type='text' value={inputValue} className='input' placeholder='username' required onChange={handleInputChange}/><br />
        </div>
        <div>
          <StyledComponentBody></StyledComponentBody>
          <input type='password' value={inputValue}className='input' placeholder='password' required onChange={handleInputChange} />

        </div>
        <StyledComponentBody></StyledComponentBody>

        <Button>Login</Button>
        <div className='bottom'>
          <div className='left'>
            <input type='checkbox' id="check" />
            <label for="check">Remember</label>
          </div>
          <div className='right'>
            <label><a href="#">Forgot Password</a></label>
          </div>
        </div>
        </div></div></form>
      
    </>
    </Stack>
     
  );
}
