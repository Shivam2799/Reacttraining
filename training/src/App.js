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
import React from "react";
import { Provider } from "react-redux";
import store from "./module/Assignment11/store";

import screens from "./module/Assingment11/screens";


const App = () => {
  return (
    <Provider store={store}>
      <screens />
    </Provider>
  );
};

export default App;