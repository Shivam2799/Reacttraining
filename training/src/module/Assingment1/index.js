import React,{Component} from "react";
import "./index.css";
import image from "./logo.png"
class Assingment1 extends Component{
    render(){
        return(
            <div className = {"webpageContainer"}>
                <div className = {"mainContainer"}>
                <div className={"innerContainer"}>
                    <div className={"Save"}>
                        <p>Save your</p><span>money now.</span>
                    </div>
                    <div className = {"manage"}>
                        <pre>
                            Manage your company Bot in few<br></br>
                            easy steps.join our pro plan to try<br></br>
                            a 360 experience of our service.<br></br>
                            <br></br>
                            
                            Start your 14 days of free Pro plan,<br></br>
                            you can always upgrade it or stay<br></br>
                            with the Lite version for free<br></br>
                        </pre>
                    </div>
                    <img src={image}  className={"logo"}></img>
                </div>
                <div className={"Plan"}>
                    <p>Start now<br></br>your <span>free plan.</span></p>
                </div>
                <div className={"corporate"}>
                    <span>Are you corporate?</span><br></br><p>Contact us</p>
                </div>
                <div className={"innerContainer2"}>
                    <div className={"lite"}>
                        <p>Lite</p>
                    </div>
                    <div className={"Free"}>
                        <p>Free</p><br></br><span>with restrictions.</span>
                    </div>
                    <div className={"blank"}></div>
                    <div className={"includes"}>
                        <p>Plan includes:</p>
                    </div>
                    <span className={"tick1"}>&#10003;</span>
                    <div className={"para1"}>
                       <p> Manage conversations directly from your website.</p>
                    </div>
                    <div className={"para2"}>
                    <span className={"tick2"}>&#10003;</span>
                    <p>Bot without the AI service</p>
                    </div>
                    <div className={"para3"}>
                    <span className={"tick3"}>&#10003;</span>
                    <p>Achieved chat for 30 days</p>
                    </div>
                    <div className={"para4"}>
                    <span className={"tick4"}>&#10003;</span>
                    <p>Free, for always</p>
                    </div>
                    <span className={"view"}>View all the features</span>
                    <div className={"button1"}>
                    <button type="button"className={"btn1"} >Start 14 days of Pro Plan</button>
                    </div>
                    
                </div>
                <div className={"innerContainer3"}>
                    <div className={"pro"}>
                        <p>Pro</p>
                    </div>
                    <div className={"monthly"}>
                        <p>29$</p><br></br><span>monthly</span>
                    </div>
                    <div className={"blank1"}></div>
                    <div className={"all"}>
                        <p>All of Lite plus:</p>
                    </div>
                    <span className={"tick5"}>&#10003;</span>
                    <div className={"para5"}>
                       <p> Bot with AI that can recognize the<br></br> user's behaviour and can automtize<br></br>the sentences</p>
                    </div>
                    <div className={"para6"}>
                    <span className={"tick6"}>&#10003;</span>
                    <p>Unlimited conversational flows</p>
                    </div>
                    <div className={"para7"}>
                    <span className={"tick7"}>&#10003;</span>
                    <p>Facebook,Twitter,Instagram and <br></br>Linkedin integration</p>
                    </div>
                    <div className={"para8"}>
                    <span className={"tick8"}>&#10003;</span>
                    <p>Achieved chat without limits.</p>
                    </div>
                    <span className={"view2"}>View all the features</span>
                    <div className={"button2"}>
                    <button type="button"className={"btn2"} >Start 14 days of Pro Plan</button>
                    </div>
                    
                </div>
                </div>

            </div>
        );
    }
}
export default Assingment1;
