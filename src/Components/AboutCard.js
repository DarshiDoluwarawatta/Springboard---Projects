import React from 'react';
import { Stack } from '@mui/material';
import {  Heading2,  } from './StyledComponents';
import "../Styles/SimpleCard.css";
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import EmojiEventsSharpIcon from '@mui/icons-material/EmojiEventsSharp';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';

export default function AboutCard() {
    const newLocal = <br />;
  return (
    <><div>
          <Stack direction="row" spacing={5}>
              <div>

                  <p className='card-container-p1'><br /><center><SchoolSharpIcon /></center><h5><center><b>Education</b></center></h5><br />
                      The best method for humanity to push the boundaries to achieve true potential.</p>
              </div>

              <div>
                  <p className='card-container-p2'><br/>
                  <center>< LanguageSharpIcon/></center><h5><center><b>Elearning Online</b></center></h5>
                  <br/> We provide the platform and the tools to teach and learn whatever that is in demand to make a better tomorrow.</p>
          </div>
          <div>
              <p className='card-container-p3'><br/><center><EmojiEventsSharpIcon/></center>
              <h5><center><b>An Oasis for Achievement</b></center></h5><br /> TechFusion Academy provides you all the opportunities to take the next step in your life. Whether you are advancing in your career or going at it by yourself, the knowledge you gather here will immensely help you to achieve your goals.</p>
          </div>
       
    </Stack>
      </div></>
  );
}
