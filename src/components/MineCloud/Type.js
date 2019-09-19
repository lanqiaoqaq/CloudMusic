import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../store/actionCreator/profile/index";
class Type extends React.Component{
    render(){
        const {subcount}=this.props;
        console.log(this.props)
         return(
        <div className={"mineLine"}>
            
                 <div className={"divCen"} onClick={()=>this.props.history.push("/localmusic")}>
                    <span className={"iconfont iconyinyue iconStyle"}></span>
                    <p  className={"fontCen"}>本地音乐<span>({"lalalal"})</span></p>
                </div>
                <div className={"divCen"}  onClick={()=>this.props.history.push("/recently")}>
                    <span className={"iconfont iconzuijinbofang iconStyle"}></span>
                    <p  className={"fontCen"}>最近播放<span>({"lalalal"})</span></p>
                </div>
                <div className={"divCen"}>
                    <span className={"iconfont iconxiazai iconStyle"}></span>
                    <p  className={"fontCen"}>下载管理<span>({"lalalal"})</span></p>
                </div>
                <div className={"divCen"}>
                    <span className={"iconfont icondiantai iconStyle"}></span>
                    <p  className={"fontCen"}>我的电台<span>({})</span></p>
                </div>
                <div className={"divCen"}>
                    <span className={"iconfont iconwodeshoucang iconStyle"}></span>
                    <p  className={"fontCen"}>我的收藏<span>({"lalalal"})</span></p>
                </div>
            
       
    </div>
    )
    }
    componentDidMount(){
        this.props.getSubcount();
    }
   
}
function mapStateToprops(state,props){
    return {
        subcount:state.profile.sySubcount
    }
}
function mapDispatchToprops(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
}
export default connect(mapStateToprops,mapDispatchToprops)(Type);