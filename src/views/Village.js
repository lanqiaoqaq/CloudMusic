import React from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom';
import "../assets/style/village/index.css"
import Square from "../components/village/square";
import Trend from "../components/village/trend";
class Village extends React.Component{
    render(){
        return(
            <>
                <div className="ui-tab ">
                    <ul className="ui-tab-nav ui-border-b ">
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"red",borderBottom:"0.054rem solid red"}} exact to={"/village"}>广场</NavLink>
                    </span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"red",borderBottom:"0.054rem solid red"}} to={"/village/trend"}>动态</NavLink></span></li>
                    </ul>
                    <ul className="ui-tab-content">
                        <li><Route path={"/village"} exact component={Square}></Route></li>
                        <li><Route path={"/village/trend"} component={Trend}></Route></li>
                    </ul>
                </div>
            </>
        )
    }
    componentDidMount(){

    }
}
export default Village;