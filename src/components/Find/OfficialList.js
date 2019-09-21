import React from 'react'
import '../../assets/style/find/rank.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindCreator from '../../store/actionCreator/find'
class OfficialList extends React.Component{
    render(){
        let {topList} = this.props;
        return(
                <div className="originaMusic" style={{marginTop:".5rem"}}>
                    <h3>官方榜</h3>
                    <ul className="orgin_list">
                        {
                            topList.map(v=>(
                                <li style={{height:"2.84rem"}} key={v.id} onClick={()=>{
                                    this.props.history.push("/musiclist/"+v.id)
                                }}>
                                    <div style={{height:"2.84rem",width:"2.84rem",position:"relative"}}>
                                        <img
                                            style={{height:"100%",width:"100%",borderRadius:"0.4rem"}}
                                            src={v.coverImgUrl}
                                            alt=""
                                        />

                                    </div>
                                    <div className="music_exm_s">
                                        {
                                            v.tracks? v.tracks.map((item,j)=>(
                                                <p style={{fontsize:".34rem",color:"#717171"}} key={j}>
                                                    {j+1}.
                                                    <b>{item.first}</b>-
                                                    <b>{item.second}</b>
                                                </p>
                                            )):[]
                                        }
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        )
    }
    componentDidMount(){
        this.props.getRankingList()
    }
}
function mapStateToProps(state) {
    return{
        topList:state.find.topList
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(OfficialList)