import Card from '@mui/material';
import React from 'react'
//import GitHubIcon from '@mui/icons-material/GitHub';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';
//import AttachEmailIcon from '@mui/icons-material/AttachEmail';
//import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from './TypePage';
const Statistics = () => {
  return (
    <div>
      <div classname='top'>
        <div classname='card-container'>
            <Card>
              <h3>WPM</h3>
              <p>{speed}</p>
              <h3>Accuracy</h3>
              <p>{correct}</p>
              <h3>Characters</h3>
              <p>{chars}</p>
            </Card>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Statistics
