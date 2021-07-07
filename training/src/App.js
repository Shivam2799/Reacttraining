import React from "react";

import Header from './module/RoutingAssignment/Header';
import Detail from "./module/RoutingAssignment/Detail";
import Footer from "./module/RoutingAssignment/Footer";
import Login from "./module/Assingment9/component/Login";
import Product from "./module/Assingment9/component/Product";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


class App extends React.Component{
  render(){
    return(
      <div>
        <Router>
        <Switch>
          
        <Route exact path="/" component={Login} />
          <Route exact path="/dashboard" component={Product} />
           <Route exact path="/product/:id" component={Detail} />
           
        </Switch>
      </Router>
       
      <Header />
      <Detail />
      <Footer />
      <Login />
      </div>
    );
  }
}
export default App;
// git add . 
// git commit -m "naming conventions ex. added home component"
// git push -u origin <branch-Name>
/*import React from 'react'
import './App.css'
import {useSelector,useDispatch } from "react-redux";
import {incNumber,decNumber,getUserData} from './actions/index';
const App=()=>{
  const {userData}=useSelector((state=>state.changeTheNumber))
  
  const dispatch=useDispatch();
  return (
    <>
    
    <div className="quantity">
    
      <button onClick={()=>{
            dispatch(getUserData())
        }}>userData</button>
    </div>
    <table id="customers">
  <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>YEAR</th>
  </tr>

  {userData.length &&
  userData.map((user)=>{
    return(
      <tr>
    <td>{user.id}</td>
    <td>{user.name}</td>
    <td>{user.year}</td>
  </tr>
    )

  })}
 
</table>

    </>
  )
}

export default App;
import React from "react";
import "./App.css";
import Assingment12 from "./module/Assingment12";
class App extends React.Component {
  render() {
    return (
      <div className={`App`}></div>
      );
    }
  }
  
  export default App;*/