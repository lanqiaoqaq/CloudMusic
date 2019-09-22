import React from 'react'
import '../../assets/style/find/rank.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindCreator from '../../store/actionCreator/find'

import OfficialList from '../../components/Find/OfficialList'
import RankingOther from '../../components/Find/RankingOther'

class Ranking extends React.Component{
    render(){
        const {rewardTopList}=this.props;
        let {songs} = rewardTopList;
        if(!songs) songs = [];
        return(
            <div className="rank_s">
                <div className="rank_head" onClick={()=>{
                    this.props.history.push("/")
                }}>
                    <i className="iconfont iconzuojiantou"></i>
                    <b>排行榜</b>
                </div>
                <div className="rankContent">
                    <div className="originaMusic">
                        <h3>云音乐赞赏榜</h3>
                        <ul className="orgin_list">
                            <li style={{height:"2.84rem"}} onClick={()=>{
                                this.props.history.push("/musiclist/2809513713")
                            }}>
                                <div style={{height:"2.84rem",width:"2.84rem",position:"relative"}}>
                                    <img
                                        style={{height:"100%",width:"100%",borderRadius:"0.4rem"}}
                                        src={rewardTopList.coverUrl}
                                        alt=""
                                    />
                                    <span className="ab_data">每月更新</span>
                                </div>
                                <div className="music_exm_s">
                                    {
                                        songs.map((v,i)=>(
                                            <p style={{fontsize:".34rem",color:"#717171"}} key={v.id}>
                                                {i+1}.
                                                <b>{v.name}</b>-
                                                <b>{v.artists[0].name}</b>
                                            </p>
                                        ))
                                    }
                                </div>
                            </li>
                        </ul>
                    </div>
                    <OfficialList {...this.props}></OfficialList>
                    <RankingOther {...this.props}></RankingOther>
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRankingRewardToplist();
    }
}
function mapStateToProps(state) {
    return{
        rewardTopList:state.find.rewardTopList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Ranking)