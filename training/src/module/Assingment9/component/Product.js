import React from "react";
import ReactDOM  from "react";
import "../product.css";
import image1 from "./image1.png";
import image2 from "./image2.png";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";
import image5 from "./image5.jpg";
import image6 from "./image6.jpg";

function Product(){
    return(
        <div className={"cards"}>
            <div >
          <img src={image1} className={"image1"}  alt="shoes" />
          <button type="button"  className={"btn1"} >buy</button>
          </div>
          <div >
          <img src={image2} className={"image2"}  alt="specs" /> 
          <button type="button"  className={"btn2"} >buy</button>
          </div>
          <div >
          <img src={image3} className={"image3"}  alt="Belts" /> 
          
          </div> 
          <div >
          <img src={image4} className={"image4"}  alt="Belts" /> 
          
          </div> 
          <div >
          <img src={image5} className={"image5"}  alt="Belts" /> 
          
          </div> 
          <div >
          <img src={image6} className={"image6"}  alt="Belts" /> 
          
          </div> 
          

        </div>
    );
}
export default Product;