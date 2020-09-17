import React, {useContext,useState} from "react";
import Calculator from "../Calculator/Calculator";
import { EmailContext, } from "../../context/profieContext";
import useAverage from "../../hooks/useAverage";
import dataDemo from "../../demoData";

// class Mathe extends React.Component {
//   static subject = { code: "mathe", score: 0 };
//   static contextType = EmailContext;
//   render() {
//   return <><span>{this.context}</span><Calculator cb={this.props._editScore} />{this.props.children}</>;
//   }
// }
function Mathe(props){
  let [showMath,setShowMath]=useState(true);
  function toggle(){
    setShowMath(!showMath)
  }
  const context = useContext(EmailContext);
  const callbacks = useAverage({ code: "mathe", score: 0 });
  return (<>
  <button onClick={toggle} value="math">
            显示/影藏
          </button>
    <p>
    {props.title}
    </p>
    
     {showMath&&<span>{context}</span>}
    {showMath&&<Calculator cb={callbacks._editScore} />}
    </>);
}
export default Mathe;
