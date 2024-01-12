import { Button } from '@mui/material';
import React,{useState} from 'react';


export default function NameInnputForm() {
const [inputName,setInputName]=useState('');

const handleInputChange=(e)=>{
  //console.log('input Tag:',e.target)
  setInputName(e.target.value);

}
const handleSubmit=(e)=>{
  //console.log('input Tag:',e.target)
 // onNameChange(inputName);

}


    return (
    <div>
    <form>

        <input type="text" value={inputName} onChange={handleInputChange}/>
        <Button  type='submit' onClick={handleSubmit}></Button>
    </form>
    </div>
  );
}
    
