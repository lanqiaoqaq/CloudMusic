import React from "react";
import "../.././../assets/style/trend/allFollow.css"
import trendCreator from "../../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
class AllFollow extends React.Component{
    constructor(){
        super();
        this.state={
            follow:[]
        }
    }
    render() {
        const {follow}=this.state;
        return(
            <>
                <div className={"ra_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_follow_header_w"}>全部关注</span>
                </div>
                <div className={"ra_follow_body"}>
                    {
                        follow.map((v,i)=>(
                            <div onClick={()=>{
                                this.props.history.push("/userInfo/"+v.userId)
                            }} className={"ra_follow_body_p"} key={i}>
                                <div className={"ra_follow_body_p_in"}>
                                    <div className={"ra_follow_avatar"}>
                                        <img src={v.avatarUrl} alt=""/>
                                    </div>
                                    <div className={"ra_follow_det"}>
                                        <p>
                                            {v.nickname}
                                        </p>
                                        <h2>
                                            {v.signature}
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            follow:nextProps.trend.follow
        })
    }

    componentDidMount() {
        // this.props.getTrend();
        this.props.getTrend.bind(this,this.props.match.params.page)();
    }
}
export default connect(state=>({trend:state.trend.trend}),dispatch=>bindActionCreators(trendCreator,dispatch))(AllFollow);