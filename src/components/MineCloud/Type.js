import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../store/actionCreator/profile/index";
class Type extends React.Component{
    render(){
        const {subcount,record}=this.props;
         return(
        <div className={"mineLine"}>
            
                 <div className={"divCen"} onClick={()=>this.props.history.push("/localmusic")}>
                    <span className={"iconfont iconyinyue iconStyle"}></span>
                    <p  className={"fontCen"}>本地音乐<span>({"0"})</span></p>
                </div>
                <div className={"divCen"}  onClick={()=>this.props.history.push("/recently")}>
                    <span className={"iconfont iconzuijinbofang iconStyle"}></span>
                    <p  className={"fontCen"}>最近播放<span>({record?record.length:0})</span></p>
                </div>
                <div className={"divCen"}>
                    <span className={"iconfont icondiantai iconStyle"}></span>
                    <p  className={"fontCen"}>我的电台<span>({subcount?subcount.djRadioCount:0})</span></p>
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
        this.props.getRecord();
    }
   
}
function mapStateToprops(state,props){
    return {
        subcount:state.profile.cySubcount,
        record:state.profile.cyRecord
    }
}
function mapDispatchToprops(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
}
export default connect(mapStateToprops,mapDispatchToprops)(Type);