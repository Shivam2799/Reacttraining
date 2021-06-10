import React, {Component} from 'react';
import './index.css';
class Home extends Component{
    /*renderBox(heading , buttonTitle){
        return(
            <div className={"itemcontainer"}>
            <h3>{"heading"}</h3>
            <button>{buttonTitle}</button>
        </div>
        );
    }*/
render() {
    return (
        <div className={"homeContainer"}>
            <h1 className={"h1tag"}> {"hello"}</h1>
            <h2>Home page</h2>
            {/* {this.renderBox("First container","click me")}
            {this.renderBox("second container","click me sec")}
            {this.renderBox("third container","click me third")} */}
        </div>
    );
}
}
export default Home; 