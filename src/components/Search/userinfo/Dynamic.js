import React from "react"
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../../store/actionCreator/search";
class Dynamic extends React.Component{
    render() {
        const userDynamicList = this.props.userDynamicList;
        // console.log(userDynamicList)
        return(
            <div className={"dynamic_k"}>
                该用户还没有发布动态呢！！
            </div>
        )
    }
}
function mapStateToProps(state,props) {
    return{
        userDynamicList: state.search.userDynamicList,
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator, dispatch)
}
export default connect(mapStateToProps,mapDispatchProps) (Dynamic)