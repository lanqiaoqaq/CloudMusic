import React from "react";
import "../../../assets/style/trend/singerDetails.css"
class SingerDeatils extends React.Component{
    render() {
        return(
            <>
                <div style={{}} className={"ra_singer_details_top"}>
                    <div className={"ra_singer_details_top1"}>
                        <span onClick={()=>{
                            this.props.history.go(-1);
                        }} className={"ra_singer_details_top1_goback iconfont iconzuojiantou"}></span>
                        <span className={"ra_singer_details_top1_name"}>{"歌手名"}</span>
                    </div>
                    <div className={"ra_singer_details_top2"}>
                        <span>{"关注"}</span>
                    </div>
                </div>
            </>
        )
    }
}
export default SingerDeatils;