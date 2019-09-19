import React from "react";
import "../../../../assets/style/trend/mvRanking.css";
import {
    Route,
    NavLink
} from 'react-router-dom';
import {getDate} from "../../../../tools/date";
import trendCreator from "../../../../store/actionCreator/trend";
import MvRankingMl from "./MvRankingMl";
import MvRankingHk from "./MvRankingHk";
import MvRankingEura from "./MvRankingEura";
import MvRankingKo from "./MvRankingKo";
import MvRankingJa from "./MvRankingJa";
class MvRanking extends React.Component{
    render() {
        return(
            <>
                <div className={"ra_mvR_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.push("/trend/mv")
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_mvR_follow_header_w"}>MV排行榜</span>
                </div>

                <div className="ui-tab">
                    <ul className="ra1_ui-tab-nav ra1_ui-border-b">
                        <li className="current"><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"#fff",borderBottom:"0.054rem solid #fff"}} exact to={"/mvRanking"}>内地</NavLink></span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"#fff",borderBottom:"0.054rem solid #fff"}} to={"/mvRanking/hk"}>港台</NavLink></span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"#fff",borderBottom:"0.054rem solid #fff"}} to={"/mvRanking/eura"}>欧美</NavLink></span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"#fff",borderBottom:"0.054rem solid #fff"}} to={"/mvRanking/kora"}>韩国</NavLink></span></li>
                        <li><span><NavLink style={{display:"block",height:"0.75rem"}} activeStyle={{color:"#fff",borderBottom:"0.054rem solid #fff"}} to={"/mvRanking/japan"}>日本</NavLink></span></li>
                    </ul>
                    <ul className="ra1_ui-tab-content" >
                        {/*style="width:400%"*/}
                        <li><Route path={"/mvRanking"} exact component={MvRankingMl}></Route></li>
                        <li><Route path={"/mvRanking/hk"} component={MvRankingHk}></Route></li>
                        <li><Route path={"/mvRanking/eura"} component={MvRankingEura}></Route></li>
                        <li><Route path={"/mvRanking/kora" } component={MvRankingKo}></Route></li>
                        <li><Route path={"/mvRanking/japan"} component={MvRankingJa}></Route></li>
                    </ul>
                </div>
            </>
        )
    }
}
export default MvRanking;
