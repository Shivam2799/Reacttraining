/*import React from 'react';
import Login from './module/Assingment9/component/Login';
import Product from './module/Assingment9/component/Product';

import { Route, Switch } from 'react-router-dom';
import Assingment10 from './module/Assingment10';
class App extends React.Component{
  render(){
    return(
      <div>
       
      <Assingment10 />
      </div>
    );
  }
}
export default App;
// git add . 
// git commit -m "naming conventions ex. added home component"
// git push -u origin <branch-Name>*/
import React from 'react'
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

export default App;;