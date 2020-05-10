import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Art from "./components/artCalculator";
import Mathe from "./components/MathCalulator";
import dataDemo from "./demoData";
import "./App.scss";

import profile, { NameContext, EmailContext } from "./context/profieContext";

// class App extends React.Component {
//   constructor(props) {
//     super(props);

//     this.extras = {
//       art: 0,
//       mathe: 5
//     };
//     this.state = {
//       _Average: null,
//       _Subject: [],
//       showArt: true,
//       showMath: true,
//       extras_Average: null,
//       email: profile.email,
//       name: profile.name,
//       matcheExtra: this.extras.mathe
//     };
//     dataDemo.aerageChangeCb = _Average => {
//       this.setState({
//         _Average
//       });
//       this.handelExtras_Average();
//     };
//     dataDemo.subjectChangeCb = _Subject => {
//       this.setState({
//         _Subject
//       });
//     };
//   }
//   handelContextChange = e => {
//     e.persist();
//     this.setState({
//       [e.target.name]: e.target.value
//     });
//   };
//   handelExtras = e => {
//     e.persist();
//     this.extras[e.target.name] = parseInt(e.target.value, 10);
//     if (e.target.name === "mathe") {
//       this.setState({
//         matcheExtra: this.extras.mathe
//       });
//     }
//   };
//   handelExtras_Average = () => {
//     let extras_Average = null;
//     let totle = 0;
//     dataDemo._TotalSubject.forEach(e => {
//       totle += e.score + parseInt(this.extras[e.code], 10);
//     });
//     extras_Average = (totle / dataDemo._TotalSubject.length).toFixed(2);
//     this.setState({
//       extras_Average
//     });
//   };
//   toggle = e => {
//     e.persist();
//     const value = e.target.value;
//     this.setState({
//       [`show${value}`]: !this.state[`show${value}`]
//     });
//   };
//   render() {
//     console.log(this.context);
//     return (
//       <div className="average_warp">
//         <p>
//           email:<input
//             name="email"
//             value={this.state.email}
//             onChange={this.handelContextChange}
//             style={{ width: "200px" }}
//           />
//         </p>
//         <p>
//           name:{this.state.name}
//         </p>
//         <p>
//           _Subject:{this.state._Subject.map(e =>
//             <span key={e.code}>
//               {e.code}:{e.score}/
//             </span>
//           )}
//         </p>
//         <p>
//           _Average:{this.state._Average}
//         </p>
//         <p>
//           Extras_Average: {this.state.extras_Average}
//         </p>
//         <div className="Calculator_warp">
//           <div>
//             <button onClick={this.toggle} value="Art">
//               显示/影藏
//             </button>
//             <NameContext.Provider
//               value={{
//                 name: this.state.name,
//                 changeName: this.handelContextChange
//               }}
//             >
//               {this.state.showArt &&
//                 <Art
//                   title="请计算美术成绩"
//                   onExtrasChange={this.handelExtras}
//                   extrasElm={(extras, handelExtras) => {
//                     this.extras.art = extras;
//                     return (
//                       <p>
//                         extras:<input
//                           type="number"
//                           name="art"
//                           value={extras}
//                           onChange={handelExtras}
//                         />
//                       </p>
//                     );
//                   }}
//                 />}
//             </NameContext.Provider>
//           </div>
//           <div>
//             <button onClick={this.toggle} value="Math">
//               显示/影藏
//             </button>
//             <EmailContext.Provider value={this.state.email}>
//               {this.state.showMath &&
//                 <Mathe title="请计算数学成绩">
//                   <p>
//                     extras:<input
//                       type="range"
//                       min="-20"
//                       max="20"
//                       step="5"
//                       name="mathe"
//                       value={this.state.matcheExtra}
//                       onChange={this.handelExtras}
//                     />
//                     <span>{this.state.matcheExtra}</span>
//                   </p>
//                 </Mathe>}
//             </EmailContext.Provider>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
let extrasConf = {
  art: 0,
  mathe: 5,
};

function Home() {
  return (
    <div>
      <Link to="/art">输入美术成绩</Link>
      <p>请输入美术成绩:</p>
    </div>
  );
}

function ArtCalculator(props) {
  return (
    <div className="Calculator_warp">
      <div>
        <Link to="/mathe">输入数学成绩</Link>
        <button onClick={props.toggle} value="Art">
          显示/影藏
        </button>
        <NameContext.Provider
          value={{
            name: props.name,
            changeName: props.handelContextChange,
          }}
        >
          {props.showArt && (
            <Art
              title="请计算美术成绩"
              onExtrasChange={props.handelExtrasCb}
              extrasElm={(extras, handelExtras) => {
                extrasConf.art = extras;
                return (
                  <p>
                    extras:
                    <input
                      type="number"
                      name="art"
                      value={extras}
                      onChange={handelExtras}
                    />
                  </p>
                );
              }}
            />
          )}
        </NameContext.Provider>
      </div>
    </div>
  );
}

function MathCalulator(props) {
  return (
    <div className="Calculator_warp">
      <div>
        <Link to="/result">查看结果</Link>
        <button onClick={props.toggle} value="Math">
          显示/影藏
        </button>
        <EmailContext.Provider value={props.email}>
          {props.showMath && (
            <Mathe title="请计算数学成绩">
              <p>
                extras:
                <input
                  type="range"
                  min="-20"
                  max="20"
                  step="5"
                  name="mathe"
                  value={props.matcheExtra}
                  onChange={props.handelExtrasCb}
                />
                <span>{props.matcheExtra}</span>
              </p>
            </Mathe>
          )}
        </EmailContext.Provider>
      </div>
    </div>
  );
}

function Result(props) {
  return (
    <div>
      <p>
        email:
        <input
          name="email"
          value={props.email}
          onChange={props.handelContextChange}
          style={{ width: "200px" }}
        />
      </p>
      <p>name:{props.name}</p>
      <p>
        _Subject:
        {props._Subject.map((e) => (
          <span key={e.code}>
            {e.code}:{e.score}/
          </span>
        ))}
      </p>
      <p>_Average:{props._Average}</p>
      <p>Extras_Average: {props.extras_Average}</p>
    </div>
  );
}
function App() {
  let [_Average, set_Average] = useState("");
  dataDemo.aerageChangeCb = (_Average) => {
    set_Average(_Average);
    handelExtras_Average();
  };
  let [_Subject, set_Subject] = useState([]);
  dataDemo.subjectChangeCb = (_Subject) => {
    set_Subject(_Subject);
  };
  let [extras_Average, setExtras_Average] = useState(null);
  function handelExtras_Average() {
    let extras_Average = null;
    let totle = 0;
    dataDemo._TotalSubject.forEach((e) => {
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
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/art">
            <ArtCalculator
              showArt={showArt}
              toggle={toggle}
              name={name}
              handelContextChange={handelContextChange}
              handelExtrasCb={handelExtrasCb}
            />
          </Route>
          <Route path="/mathe">
            <MathCalulator
              showMath={showMath}
              email={email}
              matcheExtra={matcheExtra}
              handelExtrasCb={handelExtrasCb}
            />
          </Route>
          <Route path="/result">
            <Result
              handelContextChange={handelContextChange}
              name={name}
              _Subject={_Subject}
              _Average={_Average}
              extras_Average={extras_Average}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
