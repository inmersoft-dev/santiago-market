import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SvgIcon from '@mui/material/SvgIcon';

/**Importando Estilo CSS */
import './Icons.css';

const socialNet = [TwitterIcon,FacebookOutlinedIcon,EmailIcon,InstagramIcon,WhatsAppIcon]

function Icons({color}) {
  return (
    <div className="socialNetwork">
     {
         socialNet.map((item, index)=>{

            return <div className='socialNetwork-container'>
              <SvgIcon  className="socialNetwork-icon" key={index} component={item} fontSize="medium" sx={{color: {color}}}/>
              </div>
            
         })
     }
    </div>
  )
}

export default Icons;
