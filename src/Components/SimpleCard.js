import React from 'react';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

import { Heading1, Heading2, Heading3 } from './StyledComponents';
import "../Styles/SimpleCard.css";

export default function SimpleCard() {
  return (
    
    <><div className='card-container'><Heading1>You only have to know onething!</Heading1>
              <Heading2>You can Learn anything</Heading2><Heading3><b>For Free.For Everything.Forever</b></Heading3><p></p><p></p>
              <div >
          <Stack direction="column" spacing={3}>
            <center>  <Button variant="contained" style={{ backgroundColor: 'blue', width: '300px', color: "primary" }}>Start learning now</Button></center>
            <center><Button variant="contained" style={{ backgroundColor: 'blue',width: '300px', color: "primary" }}>Teachers, start here</Button></center>
            <center><Button variant="contained" style={{ backgroundColor: 'blue',width: '300px', color: "primary" }}>Parents,start here</Button></center>
              
          </Stack></div>
          
          
          </div></>
    
  );
}
