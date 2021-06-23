import React from "react";
import ReactDom from "react-dom";
import Login from "./component/Login";
import Product from "./component/Product";
import Details from "./component/Detail";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function Assingment9(){
    return(
        <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Product} />
           <Route exact path="/product/:id" component={Details} /> 
        </Switch>
      </Router>

    );
}
export default Assingment9;