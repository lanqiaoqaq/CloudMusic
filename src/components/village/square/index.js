import React from "react";
import {
    NavLink,Route
} from "react-router-dom";
import HotWall from "./HotWall";
import "../../../assets/style/village/square.css"
export default class Square extends React.Component{
    render() {
        return(
            <>
                <div onClick={()=>{
                    this.props.history.push("/hotWall");
                }} className={"box"}>
                    <div className={"left"}>
                        <p>云村热评墙></p>
                        <h2><span>{"用户名"}</span>,今日走心热评，哪句最触动你？</h2>
                    </div>
                    <div className={"right"}>
                        <p>{(new Date()).getMonth()+1}</p>
                        <p>{(new Date()).getDate()}</p>
                    </div>
                </div>
            </>
        )
    }
}