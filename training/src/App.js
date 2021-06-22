import React from 'react';
import Login from './module/Assingment9/component/Login';
import Product from './module/Assingment9/component/Product';

import { Route, Switch } from 'react-router-dom';
import Assingment9 from './module/Assingment9';
class App extends React.Component{
  render(){
    return(
      <div>
       
      <Assingment9 />
      </div>
    );
  }
}
export default App;
// git add . 
// git commit -m "naming conventions ex. added home component"
// git push -u origin <branch-Name>