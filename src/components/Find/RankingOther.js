import React from 'react'
import '../../assets/style/find/rank.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import FindCreator from '../../store/actionCreator/find'
class RankingOther extends React.Component{
    render(){
        const {topListOther} = this.props;
        return(
            <div className="originaMusic" style={{marginTop:".5rem"}}>
                <h3>其他榜单</h3>
                <ul className="rank_other">
                    {
                        topListOther.map(v=>(
                            <li key={v.id} onClick={()=>{
                                this.props.history.push("/musiclist/"+v.id)
                            }}>
                                <div>
                                    <img src={v.coverImgUrl} alt=""/>
                                    <span>{v.updateFrequency}</span>
                                </div>
                                <p>{v.name}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getRankingListOthers()
    }
}
function mapStateToProps(state) {
    return{
        topListOther:state.find.topListOther
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(RankingOther)