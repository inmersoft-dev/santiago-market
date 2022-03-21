import React from "react";
import Typography from "@mui/material/Typography";
/* import Icons from '../Icons/Icons'; */

import './Disruptor.css';
import Masonry from "../Masonry/Masonry";

const Disruptor = () => {
  return (
    <div className="disruptor-container">
       {/*  <Icons color="#e8eaf6"/> */}
      <div className="disruptor-head">
        <div className="disruptor-text-container">
           <Typography className="disruptor-head-title" variant="h3" color="#fff">
          DISRUPTORS
        </Typography>
        <Typography className="disruptor-head-text" variant="body1" color="#fff">
            Personalidades relevantes de la industria exponiendo sus criterios y experiencia en el campo audiovisual
        </Typography>
        </div>
       
      </div>
      <div className="disruptor-articles">
            <Masonry/>
      </div>
    </div>
  );
};

export default Disruptor;
