import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';

import imagenArticulo from "./../../assets/AboutUs/about1.jpg";



import './Article.css';


const Article = () => {
  return (
    <div className='article-container'>
        <div className='article-leftSide'>
            <img className='article-img' src={imagenArticulo}/>
            
            <button className='article-arrowIcon-container'>
              <SvgIcon  className="article-arrowIcon"  component={ArrowBackIosNewIcon} fontSize="large" sx={{color: '#fff'}}/>
            </button>
            <Typography className='article-title' variant="h3" color="#fff">
                
                Introduccion a la producción virtual</Typography>

        </div>
        <div className='article-rigthSide'>
            <Typography className='article-text' variant="body1" color="#fff">
                'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
                Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. 
                <br/>
                <br/>
                <br/>
                Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,'

            </Typography>
        </div>
      
    </div>
  )
}

export default Article
