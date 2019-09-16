import React from "react";
class Type extends React.Component{
    render(){
         return(
        <div className={"mineLine"}>
        <div className={"divCen"}>
            <span className={"iconfont iconyinyue iconStyle"}></span>
            <p  className={"fontCen"}>本地音乐<span>({"lalalal"})</span></p>
        </div>
        <div className={"divCen"}>
            <span className={"iconfont iconzuijinbofang iconStyle"}></span>
            <p  className={"fontCen"}>最近播放<span>({"lalalal"})</span></p>
        </div>
        <div className={"divCen"}>
            <span className={"iconfont iconxiazai iconStyle"}></span>
            <p  className={"fontCen"}>下载管理<span>({"lalalal"})</span></p>
        </div>
        <div className={"divCen"}>
            <span className={"iconfont icondiantai iconStyle"}></span>
            <p  className={"fontCen"}>我的电台<span>({"lalalal"})</span></p>
        </div>
        <div className={"divCen"}>
            <span className={"iconfont iconwodeshoucang iconStyle"}></span>
            <p  className={"fontCen"}>我的收藏<span>({"lalalal"})</span></p>
        </div>
    </div>
    )
    }
   
}
export default Type;