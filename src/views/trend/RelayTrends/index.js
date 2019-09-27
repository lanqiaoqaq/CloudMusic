import React from "react";
import {Link} from "react-router-dom"
import trendCreator from "../../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";;
class RelayTrends extends React.Component{
    render() {
        return(
            <>
                <div className={"ra_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.push("/trend")
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_follow_header_w"}>转发</span>
                    <span onClick={this.props.relayTrends.bind(this,{id:this.props.match.params.id,uId:this.props.match.params.userId})} className={"ra_addTrands_go"}>发送</span>
                </div>
                <div className={"ra_addTrands_text"} >
                    <textarea placeholder={"说说我的看法..."} />
                </div>
            </>
        )
    }
    componentDidMount() {
        // console.log(this.props.match.params.id);
    }
}
export default connect(state=>({trend:state.trend.trend}),dispatch=>bindActionCreators(trendCreator,dispatch))(RelayTrends);
