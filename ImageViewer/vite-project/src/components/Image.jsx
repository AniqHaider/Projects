import React, { useState } from "react";
import "./image.css";

const Image = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleClick}
        className="cursor-pointer"
        style={{ width: "200px", height: "200px" }} // set a fixed size
      />
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={src}
              alt={alt}
              onClick={handleClick}
              className="w-3/4 h-3/4 object-contain rounded-lg shadow-lg"
              style={{ width: "80%", height: "80%" }} // set a fixed size
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Image;

