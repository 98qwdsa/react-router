import React from 'react';
import Art from './components/Art';
import Math from './components/Math';
import MainShow from './components/mainShow';
import './hashModel.css';
import { HashRouter, Route } from 'react-router-dom';
export default class HashModel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"zehong.luo@qq.com",
            name:"zehong.luo",
            artScore:"",
            mathScore:"",
            artExtras:"",
            mathExtras:""
        }
    }
    changeEmailAndName=(value)=>{
        var index=value.indexOf('@');
        this.setState({
            email:value,
            name:value.substring(0,index)
        })
    }
    getArtScore=(newInput)=>{
        this.setState({
            artScore:this.state.artScore+newInput
        })
    }
    getMathScore=(newInput)=>{
        this.setState({
            mathScore:this.state.mathScore+newInput
        })
    }
    getArtExtras=(value)=>{
        this.setState({
            artExtras:value
        })
    }
    getMathExtras=(value)=>{
        this.setState({
            mathExtras:value
        })
    }
    render(){
        return(
            <div className="content">
                <HashRouter>
                    <div className="main">
                        <Route path="/main">
                            {<MainShow 
                                changeEmailAndName={this.changeEmailAndName}
                                artScore={this.state.artScore}
                                mathScore={this.state.mathScore}
                                artExtras={this.state.artExtras}
                                mathExtras={this.state.mathExtras}
                            />}
                        </Route>
                    </div>
                    <div className="art">
                        <Route path="/art">
                            {<Art 
                            email={this.state.email} 
                            getArtScore={this.getArtScore}
                            getArtExtras={this.getArtExtras}
                            />}
                        </Route>
                        
                    </div>
                    <div className="math">
                        <Route path="/math">
                            {<Math 
                            name={this.state.name}
                            getMathScore={this.getMathScore}
                            getMathExtra={this.getMathExtras}
                            />}
                        </Route>
                    </div>
                </HashRouter>
            </div>
        )
    }
}