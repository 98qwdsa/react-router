import React, { useState } from "react";
import Calculator from "../Calculator/Calculator";
import { NameContext } from "../../context/profieContext";
import useAverage from "../../hooks/useAverage";
import '../../App.scss';
import link from '../../link/link'
function Art(props) {
  let [extras, setExtras] = useState(5);
  const callbacks = useAverage({ code: "art", score: 0 });
  function handelExtras(e) {
    props.onExtrasChange(e);
    e.persist();
    setExtras(e.target.value);
  }
  let[showArt,setShowArt]=useState(true)
  function toggle(){
      setShowArt(!showArt);
  }
  function handleLink(){

  }
//   function link(e){
//     console.log(e.target.value);
// // alert(e.target.value)
// }
// function link(e){
//   console.log(e.target.value);
// }
  return (
    <>
     <div className="average_warp">
     <button onClick={link} value="/mathCalculator">
           跳到数学
          </button>
      <button onClick={toggle} value="Math">
            显示/影藏
          </button>
          <button onClick={link} value="/Home">
           跳到home
          </button>
        <p>
          {showArt&&props.title}
        </p>
    <NameContext.Consumer>
      {({ name, changeName }) =>
      <div>
       
        <span>
          {showArt&& <input name="name" value={name} onChange={changeName} />}
         
          {showArt&&<Calculator cb={callbacks._editScore} />}
   
          
        </span>
        </div>
        }
    </NameContext.Consumer>
    </div>
    </>
    
  );
}
export default Art;
