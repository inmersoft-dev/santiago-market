import React from "react";

import PropTypes from "prop-types";

// mui components
import {
  CardActionArea,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

// images
import media from "./../../../assets/masonry/4.jpg";

// styles
import "./MediaCard.css";

const MediaCard = (props) => {
  const { className } = props;
  return (
    <Card className={`card-media ${className}`}>
      <CardActionArea>
        <CardMedia component="img" image={media} alt="Title of media" />
        <CardContent
          sx={{ padding: "6px !important", paddingLeft: "15px!important" }}
        >
          <Typography variant="body2" component="div">
            Title Media
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            Description about the film
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

MediaCard.defaultProps = {
  className: "",
};

MediaCard.propTypes = {
  className: PropTypes.string,
};

export default MediaCard;
