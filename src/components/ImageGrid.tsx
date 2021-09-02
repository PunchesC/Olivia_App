import React from 'react';
import "./ImageGrid.css";
import Annie_flower from "../assets/Annie_flower.jpg" ;
import Mocha from "../assets/mochawithhat.jpg";

function ImageGrid(){
  return(
    <div className="img-grid">
      <img className="images"src={Annie_flower} ></img>
    </div>
    
  )
}

export default ImageGrid;