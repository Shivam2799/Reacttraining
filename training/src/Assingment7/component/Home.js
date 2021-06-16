import React from "react";
import obj from "./Data";
export default function Home(){
    if(localStorage.getItem("data") == null){
        localStorage.setItem("data", JSON.stringify(obj));
    }
    return(
        <div className={"mainContainer"}>
<div className={"innerContainer"}>
    <form className={"form"}>
    <label for="gsearch" className={"label"}>Search Here:</label><br></br>
<input type="search" id="gsearch" name="gsearch" className={"input"}></input>
<button type="button" className={"submit"}>SUBMIT</button>
    </form>
</div>
        </div>
    );
}