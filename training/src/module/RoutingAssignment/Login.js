import React from "react";
import  ReactDOM  from "react";
import "/login.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import {useHistory} from "react-router-dom";
function Login(){
    let history = useHistory();
    return(
        <div className ={"mainContainer"}>
            <div className = {"innerContainer"}>
                <form className={"form"}>
                <label for="Username" className={"label"}>Username</label><br></br>
                 <input type="text" id="uname" name="Username" />
                 <label for="pwd" className={"label"}>Password:</label><br></br>
                   <input type="password" id="pwd" name="pwd" />
                   <button
              className={"Login"}
              onClick={() => {
                history.push("./dashboard");
              }}
            >
              Login
            </button>
                </form>

            </div>
        </div>

    );
}
export default Login;