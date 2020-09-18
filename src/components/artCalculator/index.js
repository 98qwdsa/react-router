import React, { useState } from "react";
import Calculator from "../Calculator/Calculator";
import profile, { NameContext,EmailContext } from "../../context/profieContext";
import useAverage from "../../hooks/useAverage";
import dataDemo from "c:/Users/zhao.wu/calculator/src/demoData";
// class Art extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       extras: 5
//     };
//   }
//   static subject = { code: "art", score: 0 };
//   handelExtras = e => {
//     this.props.onExtrasChange(e);
//     e.persist();
//     let extras = e.target.value;
//     this.setState({
//       extras
//     });
//   };
//   render() {
//     return (
//       <NameContext.Consumer>
//         {({ name, changeName }) =>
//           <span>
//             <input name="name" value={name} onChange={changeName} />
//             <Calculator cb={this.props._editScore} />
//             {this.props.extrasElm(this.state.extras, this.handelExtras)}
//           </span>}
//       </NameContext.Consumer>
//     );
//   }
// }
let extrasConf = {
  art: 0,
  mathe: 5
};
function Art(props) {
  const callbacks = useAverage({ code: "art", score: 0 });
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
    <>
      <button onClick={toggle} value="Art">
            显示/隐藏
          </button>
        <p>
          {props.title}
        </p>
      
    <NameContext.Consumer>
   
      {({ name, changeName }) =>
        <span>
          {showArt&&<input name="name" value={name} onChange={changeName} />}
          {showArt&&<Calculator cb={callbacks._editScore} />}
       
        </span>}
    </NameContext.Consumer>
    </>
  );
}
export default Art;
