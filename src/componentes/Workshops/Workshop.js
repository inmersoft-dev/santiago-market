import React, { useState } from "react";
import ImgCard from "../ImgCard/ImgCard";

// mui components
import Typography from "@mui/material/Typography";

// own components
import FullModal from "../FullModal/FullModal";

// images
import img1 from "./../../assets/masonry/2.jpg";
import img2 from "./../../assets/masonry/3.jpg";
import img3 from "./../../assets/masonry/5.jpg";

// styles
import "./Workshop.css";

const Workshop = () => {
  const [imgSelect, SetimgSelect] = useState({ img1 });
  const [opacity, setOpacity] = useState(0);

  // full modal props
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [img, setImg] = useState("");
  const [fullModalOpacity, setFullModalOpacity] = useState(0);

  const mouseImg = (e) => {
    setOpacity(0);
    setTimeout(() => {
      SetimgSelect(e.target.currentSrc);
      setOpacity(1);
    }, 205);
  };

  const unMouseImg = (e) => {
    setOpacity(0);
  };

  const showFullModal = (e) => {
    setTitle("Lorem ipsum dolor sit amet consectetur");
    setText(
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, repellat unde. Quos, rerum deserunt! Quod modi perferendis numquam animi laborum similique eum assumenda repellat ducimus vel. Sequi ratione esse illo!"
    );
    setImg(img3);
    setFullModalOpacity(1);
  };

  const hideFullModal = () => {
    setFullModalOpacity(0);
  };

  return (
    <div>
      <FullModal
        title={title}
        text={text}
        img={img}
        onBack={hideFullModal}
        opacity={fullModalOpacity}
      />
      <div
        className="workShop-container"
        style={{
          opacity,
          backgroundImage: `url(${imgSelect})`,
        }}
      ></div>
      <div className="workShop-backgroupd-container">
        <div className="workShop-right">
          <div className="colum-1">
            <ImgCard
              img={img1}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
              onClick={showFullModal}
            />

            <ImgCard
              img={img2}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
              onClick={showFullModal}
            />
          </div>
          <div className="colum-2">
            <ImgCard
              img={img3}
              onMouseEnter={mouseImg}
              onMouseLeave={unMouseImg}
              onClick={showFullModal}
            />
          </div>
        </div>
        <div className="workShop-left">
          <Typography className="workShop-title" variant="h3" color="#fff">
            Title of Section
          </Typography>

          <Typography className="workShop-text" variant="h6" color="#fff">
            'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur '
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
