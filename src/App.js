import React, { useState } from "react";
import Art from "./components/artCalculator";
import Mathe from "./components/MathCalulator";
import dataDemo from "./demoData";
import "./App.scss";
import router from "./router/router";
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"

import profile, { NameContext, EmailContext } from "./context/profieContext";
import Home from "./components/Home";

let extrasConf = {
  art: 0,
  mathe: 5
};


export function home(props){
  return (
            <div>
              <p>
      email:<input
        name="email"
        value={props.email}
        onChange={props.handelContextChange}
        style={{ width: "200px" }}
      />
    </p>
    <p>
      name:{props.name}
    </p>
    <p>
      _Subject:{props._Subject.map(e =>
        <span key={e.code}>
          {e.code}:{e.score}/
        </span>
      )}
    </p>
    <p>
      _Average:{props._Average}
    </p>
    <p>
      Extras_Average: {props.extras_Average}
    </p>
            </div>
  );
};


function App() {
  let [_Average, set_Average] = useState("");
  dataDemo.aerageChangeCb = _Average => {
    set_Average(_Average);
    handelExtras_Average();
  };
  let [_Subject, set_Subject] = useState([]);
  dataDemo.subjectChangeCb = _Subject => {
    set_Subject(_Subject);
  };
  let [extras_Average, setExtras_Average] = useState(null);
  function handelExtras_Average() {
    let extras_Average = null;
    let totle = 0;
    dataDemo._TotalSubject.forEach(e => {
      totle += e.score + parseInt(extrasConf[e.code], 10);
    });
    extras_Average = (totle / dataDemo._TotalSubject.length).toFixed(2);
    setExtras_Average(extras_Average);
  }
  let [matcheExtra, setMatcheExtra] = useState(extrasConf.mathe);
  function handelExtrasCb(e) {
    e.persist();
    extrasConf[e.target.name] = parseInt(e.target.value, 10);
    if (e.target.name === "mathe") {
      setMatcheExtra(extrasConf.mathe);
    }
  }
  let [showArt, setShowArt] = useState(true);
  let [showMath, setShowMath] = useState(true);
  function toggle(e) {
    e.persist();
    if (e.target.value === "Art") {
      setShowArt(!showArt);
    }
    if (e.target.value === "Math") {
      setShowMath(!showMath);
    }
  }
  
  function handelExtras(e) {
    e.persist();
    extrasConf[e.target.name] = parseInt(e.target.value, 10);

    if (e.target.name === "mathe") {
        setMatcheExtra(extrasConf.mathe);
    }

}
function handleChangeContext(e) {
  e.persist();
  if (e.target.name === "email") {
  
      setEmail(e.target.value);
  }
  else {

      setName(e.target.value);
  }
}
  let [name, setName] = useState(profile.name);
  let [email, setEmail] = useState(profile.email);

  function handelContextChange(e) {
    e.persist();
    if (e.target.name === "name") {
      setName(e.target.value);
    }

    if (e.target.name === "email") {
      setEmail(e.target.value);
    }
  }

  return (
    <div className="average_warp">
      <Router>
          {router.map((item,index)=>{
        return <li><Link to={item.path}>{item.tap}</Link></li>
      })}
        <Switch>
                    <Route exact path="/artCalculator">
                        <Art
                            toggle={toggle}
                            name={name}
                            handleChangeContext={handleChangeContext}
                            showArt={showArt}
                            handelExtras={handelExtras}
                        />
                    </Route>
                    <Route exact path="/mathCalculator">
                        <Mathe
                            toggle={toggle}
                            email={email}
                            showMath={showMath}
                            handelExtras={handelExtras}
                        />
                    </Route>
                    <Route exact path="/home">
                        <Home
                            email={email}
                            handleChangeContext={handleChangeContext}
                            name={name}
                            _Subject={_Subject}
                            _Average={_Average}
                            extras_Average={extras_Average}
                        />
                    </Route>
                </Switch>
      </Router>
      <p>
      _Subject:{_Subject.map(e =>
        <span key={e.code}>
          {e.code}:{e.score}/
        </span>
      )}
    </p>
    

    </div>
  );
}
export default App;
