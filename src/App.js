import React, { useState} from "react";
import {BrowserRouter as Router,Route,Link} from "react-router-dom"
import dataDemo from "./demoData";
import "./App.scss";
import router from './router/router'
import profile, { NameContext, EmailContext } from "./context/profieContext";
function App() {
  return (
    <div className=".average_warp">
        <Router>
      <ul>
        {router.map((item,index)=>{
          return <li><Link to={item.path}>{item.tap}</Link></li>
        })}
        </ul>
 
     {router.map((item,index)=>{
       return <Route key={index} path={item.path} render={
         ()=>{return <item.component/>}
       }></Route>
     })}
   </Router>
   </div>

  );

}
export default App;
