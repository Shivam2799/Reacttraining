import React from "react";
import ReactDOM  from "react";

import { useHistory, Link } from "react-router-dom";
function Product(){
    let history = useHistory();
    return(
        <div className={"cards"}>
            <div >
          <img src={image1} className={"image1"}  alt="shoes" />
          <Link to={`/product/${1}`}>
          <button type="button"  className={"btn1"} >buy</button>
          </Link>
          </div>
          <div >
          <img src={image2} className={"image2"}  alt="specs" />
          <Link to ={`/product/${1}`} >
          <button type="button"  className={"btn2"} >buy</button>
          </Link>
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