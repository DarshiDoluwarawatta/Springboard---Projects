import React from 'react';
import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import { Heading1, Heading2, Heading3 } from './StyledComponents';
import "../Styles/SimpleCard.css";

export default function SimpleCard() {
  return (
    
    <><div className='card-container'><Heading1>You only have to know onething!</Heading1>
              <Heading2>You can Learn anything</Heading2><Heading3>For Free.For Everything.Forever</Heading3>
          <Stack direction="column" spacing={3}>
              <Button variant="contained" style={{ backgroundColor: 'blue', width: '300px', color: "primary" }}>Start learning now</Button>
              <Button variant="contained" style={{ width: '300px', color: "primary" }}>Teachers, start here</Button>
              <Button variant="contained" style={{ width: '300px', color: "primary" }}>Parents,start here</Button>

          </Stack>
          
          
          </div></>
    
  );
}
