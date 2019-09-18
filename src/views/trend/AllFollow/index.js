import React from "react";
import "../.././../assets/style/trend/allFollow.css"
class AllFollow extends React.Component{
    render() {
        return(
            <>
                <div className={"ra_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_follow_header_w"}>全部关注</span>
                </div>
                <div className={"ra_follow_body"}>
                    <div onClick={()=>{
                        this.props.history.push("/userInfo")
                    }} className={"ra_follow_body_p"}>
                        <div className={"ra_follow_body_p_in"}>
                            <div className={"ra_follow_avatar"}>
                                <img src={require("../../../assets/img/TrendImg/1.jpg")} alt=""/>
                            </div>
                            <div className={"ra_follow_det"}>
                                <p>
                                    用户名
                                </p>
                                <h2>
                                    简介
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default AllFollow;