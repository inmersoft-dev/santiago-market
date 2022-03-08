import React from "react";
import "./Sponsor.css";

const Sponsor = ({ sponsor }) => {
  return (
    <div
      className="sponsor"
      style={{
        backgroundImage: `url(${sponsor})`,
        /* backgroundSize: "cover",
        backgroundPosition: "center center", */
      }}
    ></div>
  );
};

export default Sponsor;
