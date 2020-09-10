import React,{useState} from 'react';
function MainShow({changeEmailAndName,artScore,mathScore,artExtras,mathExtras}){
    
    const [email,setEmail]=useState("zehong.luo@qq.com");//email的状态
    const [name,setName]=useState("zehong.luo");//name的状态
    const changeEmail=(e)=>{
        const email=e.target.value;
        setEmail(email);
        var index=email.indexOf('@');
        setName(email.substring(0,index));
        changeEmailAndName(e.target.value);
      }
    return(
        <div>
            <div className="emailAndName">
            email:<input value={email} onChange={changeEmail}></input><br/>
            name:{name}
            </div>
            <div className="subjectAndAvg">
                Subject:art:{artScore}math:{mathScore}<br/>
                        Average:{(parseInt(artScore)+parseInt(mathScore))/2}<br/>
                Extras_Average:{(parseInt(artExtras)+parseInt(mathExtras))/2}
            </div>
        </div>
    )
}
export default MainShow;