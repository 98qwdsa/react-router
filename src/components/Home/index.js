import React, { useState} from 'react'
import profile, { NameContext, EmailContext } from "../../context/profieContext";
import '../../App.scss';
import dataDemo from "c:/Users/zhao.wu/calculator/src/demoData";

let extrasConf = {
    art: 0,
    mathe: 5
  };
function Home(props){
//     let [_Average, set_Average] = useState("");
//   dataDemo.aerageChangeCb = _Average => {
     
//    set_Average(_Average);
//  handelExtras_Average();
//   };
  // let [_Subject, set_Subject] = useState([]);
  // dataDemo.subjectChangeCb = _Subject => {
  //   console.log(_Subject)
  //   set_Subject(_Subject);
  // };
  // let [extras_Average, setExtras_Average] = useState(null);
  // function handelExtras_Average() {
  //   let extras_Average = null;
  //   let totle = 0;
  //   dataDemo._TotalSubject.forEach(e => {
  //     totle += e.score + parseInt(extrasConf[e.code], 10);
  //   });
  //   extras_Average = (totle / dataDemo._TotalSubject.length).toFixed(2);
  //   setExtras_Average(extras_Average);
  // }
  // let [matcheExtra, setMatcheExtra] = useState(extrasConf.mathe);
  // function handelExtrasCb(e) {
  //   e.persist();
  //   extrasConf[e.target.name] = parseInt(e.target.value, 10);
  //   if (e.target.name === "mathe") {
  //     setMatcheExtra(extrasConf.mathe);
  //   }
  // }


  let [name, setName] = useState(profile.name);
  let [email, setEmail] = useState(profile.email);
  return(
   <>
     <div className="average_warp">
     <p>
        email:<input
          name="email"
          value={email}
          onChange={props.handelContextChange}
          style={{ width: "200px" }}
        />
      </p>
      <p>
        name:{name}
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
        Extrasasd_Average: {props.extras_Average}
      </p>
      </div>
   </>
  );
}
export default Home;