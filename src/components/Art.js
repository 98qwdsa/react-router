import React from 'react';
import Calculator from './Calculator';
import { Link } from 'react-router-dom';
function Art({email,getArtScore,getArtExtras}){//父组件传递的方法及值
    const isArt="isArt";//标记Art的输入
    const saveArtScore=(newInput)=>{
        getArtScore(newInput);//值传递给hashModel
    }
    const changeArtExtras=(e)=>{
        getArtExtras(e.target.value)//值传递给hashModel
    }
    return(
        <div>
            <Link to="/math"><button>去计算数学成绩</button><br/></Link>
            请计算美术成绩<br/>
            <input value={email} readOnly></input>
            <Calculator saveArtScore={saveArtScore} isArt={isArt} />{/*将输入值传递给art */}
            extras:<input onChange={changeArtExtras}></input>
        </div>
    )
}
export default Art;