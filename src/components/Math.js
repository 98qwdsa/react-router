import React from 'react';
import Calculator from './Calculator';
import Extras from './extrasFun';
import { Link } from 'react-router-dom';
function Math({name,getMathScore,getMathExtra}){//父组件的方法及值
    const isMath="isMath";
    const saveMathScore=(newInput)=>{
        getMathScore(newInput);//传给hashModel
    }
    const getMathExtras=(value)=>{
        getMathExtra(value)//传给hashModel
    }
    return(
        <div>
            <Link to="/main"><button>去查看总成绩</button><br/></Link>
            请计算数学成绩<br/>
            <input value={name}></input>
            <Calculator saveMathScore={saveMathScore} isMath={isMath}/>{/*将输入传给Math*/}
            extras:<Extras getMathExtras={getMathExtras}/>{/*Math获取extrasFun的值*/}
        </div>
    )
}
export default Math;