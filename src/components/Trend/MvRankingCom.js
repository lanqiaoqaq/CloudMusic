import React from "react";
import {getDate, getPlayerTime} from "../../tools/date";
import trendCreator from "../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom"
class MvRankingCom extends React.Component{
    render() {
        const {mvRankList}=this.props;
        // console.log(mvRankList);
        // console.log(updateTime,data);
        return(
            <>
                <div>
                    <div className={"ra_mvR_time"}>
                        <span>更新时间:</span>
                        <span>{mvRankList.updateTime?getDate(mvRankList.updateTime):""}</span>
                    </div>
                    {
                        mvRankList.data?mvRankList.data.map((v, i) => (
                            <Link to={"/mvDetails/"+v.id} className={"ra_mvR_Mv"} key={v.id}>
                                <div className={"ra_mvR_Mv_in"}>
                                    <img src={v.cover} alt=""/>
                                    <div className={"ra_mvR_Mv_in_rank"}>
                                        <span className={(v.lastRank===1||v.lastRank===2||v.lastRank===3)?"ra_mvR_Mv_in_rank_num_red":"ra_mvR_Mv_in_rank_num"}>{v.lastRank}</span>
                                        <span className={"ra_mvR_Mv_in_rank_change"}></span>
                                    </div>
                                    <div className={"ra_mvR_Mv_in_singer"}>
                                        {v.artistName}-{v.name}
                                    </div>

                                    <div className={"ra_mvR_Mv_in_play"}><span className={"iconfont iconbofang3"}>{getPlayerTime(v.playCount)}</span></div>
                                </div>
                            </Link>
                        )):[].map((v,i)=>{})
                    }
                </div>
            </>
        )
    }
    componentWillReceiveProps(){
        // console.log(123456)
    }
    componentWillMount(){
        // console.log("componentWillMount")
    }
    componentDidMount() {
        // console.log("componentDidMount")
        // console.log(this.props.location.pathname);
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