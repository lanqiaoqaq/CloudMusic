import React from "react";
import {getDate} from "../../tools/date";
import trendCreator from "../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class MvRankingCom extends React.Component{
    render() {
        console.log(this.props.mvRankList)
        const {updateTime,data}=this.props.mvRankList;
        console.log(updateTime)
        return(
            <>
                <div className={"ra_mvR_time"}>
                    <span>更新时间:</span>
                    <span>{"updateTime?getDate(updateTime):"}</span>
                </div>

                <div className={"ra_mvR_Mv"}>
                    <div className={"ra_mvR_Mv_in"}>
                        <img src="" alt=""/>
                        <div className={"ra_mvR_Mv_in_rank"}></div>
                    </div>
                    <div className={"ra_mvR_Mv_in"}>

                    </div>
                </div>
            </>
        )
    }
    componentDidMount() {
        console.log(this.props.location.pathname);
        // if(this.props.location.pathname==="/mvRanking/hk"){
        //     this.props.getMvRankListMl("港台");
        // }
        switch (this.props.location.pathname) {
            case '/mvRanking/hk':this.props.getMvRankListMl("港台");break;
            case '/mvRanking/japan':this.props.getMvRankListMl("日本");break;
            case '/mvRanking':this.props.getMvRankListMl("内地");break;
            case '/mvRanking/eura':this.props.getMvRankListMl("欧美");break;
            case '/mvRanking/kora':this.props.getMvRankListMl("韩国");break;
        }
    }
}
export default connect(state=>({mvRankList:state.trend.mvRankList}),dispatch=>bindActionCreators(trendCreator,dispatch))(MvRankingCom)