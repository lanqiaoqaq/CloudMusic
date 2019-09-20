import React from 'react';
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search"
class Album extends React.Component{
    render() {
        let userHomeList
        if(this.props.userHomeList) {
            userHomeList  = this.props.userHomeList.result.userprofiles
        }
        // console.log(userHomeList,"3");
        return(
            <div className={"userHome_k"}>
                <ul>
                    {
                        userHomeList?userHomeList.map(v=>(
                            <li key={v.userId}>
                                <span><img src={v.avatarUrl} alt=""/></span>
                                <span>
                                <p>{v.nickname}
                                    <i className={"sex_1"} style={{display:v.gender===1?"inline-block":"none"}}>♂</i>
                                    <i className={"sex_2"} style={{display:v.gender===2?"inline-block":"none"}}>♀</i>
                                </p>
                                <p>{v.signature}</p>
                            </span>
                                <span className={"iconfont iconjiahao"}>关注</span>
                            </li>
                        )):[].map(v=>{

                        })
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getUserHomeList()
    }
}
function mapStateToProps(state,props) {
    return{
        userHomeList: state.search.userHomeList
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Album)