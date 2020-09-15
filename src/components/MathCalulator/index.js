import React, {useContext,useState} from "react";
import Calculator from "../Calculator/Calculator";
import { EmailContext } from "../../context/profieContext";
import useAverage from "../../hooks/useAverage";
import '../../App.scss';
import link from '../../link/link'

// class Mathe extends React.Component {
//   static subject = { code: "mathe", score: 0 };
//   static contextType = EmailContext;
//   render() {
//   return <><span>{this.context}</span><Calculator cb={this.props._editScore} />{this.props.children}</>;
//   }
// }
function Mathe(){
  const context = useContext(EmailContext);//use
  const callbacks = useAverage({ code: "mathe", score: 0 });
  let[showMath,setShowMath]=useState(true)
  function toggle(){
      setShowMath(!showMath);
  }
  return (<>
  <div className="average_warp">

   <button onClick={toggle} value="Math">
            显示/影藏
          </button>
    <p>
     
    </p>
    <span>{showMath&&context}</span>
    {showMath&& <Calculator title="请输入数学成绩" cb={callbacks._editScore} />}
    </div>
    </>);
}
export default Mathe;
