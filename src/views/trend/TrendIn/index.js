import React from "react";
import {
    NavLink,Route,Link
} from "react-router-dom";
import TrendBar from "../../../components/Trend/TrendBar";
import MyAtention from "../../../components/Trend/MyAtention";
export default class TrendIn extends React.Component{
    render() {
        return(
            <>
                <MyAtention {...this.props}></MyAtention>
                <TrendBar {...this.props}></TrendBar>
                <TrendBar {...this.props}></TrendBar>
                <TrendBar {...this.props}></TrendBar>
                <TrendBar {...this.props}></TrendBar>
            </>
        )
    }
}