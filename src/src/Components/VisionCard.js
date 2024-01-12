import React from 'react';
import { Stack } from '@mui/material';
import {  Heading2,  } from './StyledComponents';
import "../Styles/SimpleCard.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
  return (
    <>
    <Stack direction="row" spacing={3}>
        <div>
            <p className='card-container-p'> Our live 1-to-1 online classrooms for grades 6-12 match your student’s pace and preferences, so they can learn faster, dive deeper, and never get left behind.</p>
        </div>
        <div>
            <Heading2><b>“TechFusion Provide faculty support for innovative digital learning, transforming teaching with technology, and quality education".”</b></Heading2>
        </div>
    </Stack>
      </>
              
  );
}
