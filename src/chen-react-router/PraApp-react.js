import React, { useState } from 'react'
import './component.css';
import PraArt from './PraArt';
import PraMathe from './PraMathe';
import dataDemo from "./demoData";
import profile, { NameContext, EmailContext } from "./profile";
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
let extrasconfig = {
    art: 0,
    mathe: 0
};
function Result(props) {
    return (
        <div>
            <p>
                {/* 显示和修改的Email值 */}
                email:<input
                    name="email"
                    value={props.email}
                    onChange={props.handleChangeContext}
                />
            </p>
            <p>
                {/* 显示name的值 */}
                name:{props.name}
            </p>
            <p>
                {/* 显示科目和所添加的分数 */}
          _Subject:{props._Subject.map((e) =>(
                    <span key={e.code}>
                        {e.code}:{e.score}/
                        </span>
                ))}
            </p>
            <p>
                {/* 显示没有经过Extras值影响的平均数 */}
          _Average:{props._Average}
            </p>
            <p>
                {/* 显示通过Extras的值的影响后的平均数 */}
          Extras_Average: {props.extras_Average}
            </p>
        </div>
    )
}
function Art(props) {
    //console.log(props);
    return (
        <div className="can">
            <div className="float-left">
                <button onClick={props.toggle} value="Art">显示/隐藏</button>
                <NameContext.Provider
                    value={{
                        name: props.name,
                        changeName: props.handleChangeContext
                    }}
                >
                    {/* 引用组件PraArt */}
                    {props.showArt &&
                        <PraArt
                            title="请输入美术成绩"
                            onExtrasChange={props.handelExtras}
                            extrasElm={(extras, handelExtras) => {
                                extrasconfig.art = extras;
                                return (
                                    <p>
                                        extras:<input
                                            type="number"
                                            name="art"
                                            value={extras}
                                            onChange={handelExtras}
                                        />
                                    </p>
                                );
                            }}
                        />}
                </NameContext.Provider>

            </div>
        </div>
    )
}

function Math(props) {
    console.log(props);
    return (
        <div className="can">
            <div className="float-left">
                <button onClick={props.toggle} value="math">显示/隐藏</button>
                <EmailContext.Provider value={props.email}>
                    {/* 引用组件PraMathe组件 */}
                    {props.showMath &&
                        <PraMathe
                            title="请输入数学成绩"
                            render={(emails) => {
                                emails = props.email;
                            }}
                            onExtrasChange={props.handelExtras}
                            extrasMathe={(extras, handelExtras) => {
                                extrasconfig.mathe = extras;
                                return (
                                    <p>
                                        extras:<input
                                            type="number"
                                            name="mathe"
                                            value={extras}
                                            onChange={handelExtras}
                                        />
                                    </p>
                                );
                            }}
                        />}
                </EmailContext.Provider>
            </div>
        </div>

    )
}

function PraApp() {

    let [_Average, set_Average] = useState("");
    let [_Subject, set_Subject] = useState([]);
    let [extras_Average, setExtras_Average] = useState(null);
    let [email, setEmail] = useState(profile.email);
    let [name, setName] = useState(profile.name);
    let [showArt, setShowArt] = useState(true);
    let [showMath, setShowMath] = useState(true);
    let [matcheExtra, setMatcheExtra] = useState(extrasconfig.mathe);//
    dataDemo.aerageChangeCb = _Average => {
        set_Average(_Average);
        handelExtras_Average();
    };
    dataDemo.subjectChangeCb = _Subject => {
        set_Subject(_Subject);
    };

    //优化上面两个函数
    function handleChangeContext(e) {
        e.persist();
        if (e.target.name === "email") {
            // this.setState({
            //     email: e.target.value
            // });
            setEmail(e.target.value);
        }
        else {
            // this.setState({
            //     name: e.target.value
            // });
            setName(e.target.value);
        }
    }

    //把当前分数同步在组件上
    function handelExtras(e) {
        e.persist();
        extrasconfig[e.target.name] = parseInt(e.target.value, 10);
        // if (e.target.name === 'mathe') {
        //     // this.setState({
        //     //     extrasMathe: name
        //     // });
        // }
        if (e.target.name === "mathe") {
            setMatcheExtra(extrasconfig.mathe);
        }

    }
    //计算平均分数
    function handelExtras_Average() {
        let extras_Average = null;
        let totle = 0;
        dataDemo._TotalSubject.forEach(e => {
            totle += e.score + parseInt(extrasconfig[e.code], 10);
        });
        extras_Average = (totle / dataDemo._TotalSubject.length).toFixed(2);
        setExtras_Average(extras_Average);
    };

    function toggle(e) {
        e.persist();
        if (e.target.value === "Art") {
            setShowArt(!showArt);
            console.log("art:" + showArt);
        }
        if (e.target.value === "math") {
            setShowMath(!showMath);
            console.log("math:" + showMath);
        }
    }
    console.log("这是：",_Subject,_Average);
    return (
        <div className="container">
            <Router>
                <header>
                <Link to="/art"><button><span>请输入美术成绩</span></button></Link>
                <Link to="/math"><button><span>请输入数学成绩</span></button></Link>
                <Link to="/result"><button><span>显示结果</span></button></Link>
                </header>
                <Switch>
                    <Route exact path="/art">
                        <Art
                            toggle={toggle}
                            name={name}
                            handleChangeContext={handleChangeContext}
                            showArt={showArt}
                            handelExtras={handelExtras}
                        />
                    </Route>
                    <Route exact path="/math">
                        <Math
                            toggle={toggle}
                            email={email}
                            showMath={showMath}
                            handelExtras={handelExtras}
                        />
                    </Route>
                    <Route exact path="/result">
                        <Result
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
        </div>
    );
}

export default PraApp;
