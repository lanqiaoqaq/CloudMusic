import React from 'react';
import {
    Route,
    NavLink
} from 'react-router-dom';
import "../assets/style/trend/index.css";
import TrendIn from "./trend/TrendIn";
import Mv from "./trend/Mv";
class Trend extends React.Component{
    render(){
        return(
            <>
                <div className="ra_ui-tab ">
                    <ul className="ra_ui-tab-nav ra_ui-border-b ">
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"red",borderBottom:"0.054rem solid red"}} exact to={"/trend"}>动态</NavLink>
                    </span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"red",borderBottom:"0.054rem solid red"}} to={"/trend/mv"}>MV</NavLink></span></li>
                    </ul>
                    <ul className="ra_ui-tab-content">
                        <li><Route path={"/trend"} exact component={TrendIn}></Route></li>
                        <li><Route path={"/trend/mv"} component={Mv}></Route></li>
                    </ul>
                </div>
            </>
        )
    }
    componentDidMount(){

    }
}
export default Trend;