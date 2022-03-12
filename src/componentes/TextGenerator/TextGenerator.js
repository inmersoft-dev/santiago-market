import React from "react";


const TextGenerator = ({ contenido, margin, display }) => {
  return (
    <div
      className="banner-text-container"
      style={{
        marginLeft: { margin },
        display:{display}
      }}
    >
     
    </div>
  );
};

export default TextGenerator;
