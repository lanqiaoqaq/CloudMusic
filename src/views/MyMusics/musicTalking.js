import React from "react";
class Talking extends React.Component{
    render(){
        return (
            <>
            <div  className={"ra_mvdetails_recom"}>精彩评论</div>
            {/* <div className={"ra_mvdetails_new_discuss"}>
                        <div className={"ra_asdf"}>
                            <div className={"ra_mvdetails_new_discuss_in_user"}>
                                <img  onClick={()=>{
                                    if(v.user.userId)
                                        this.props.history.push("/userInfo/"+v.user.userId)
                                }} src={v.user?v.user.avatarUrl:""} alt=""/>
                                <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                    <p>{v.user?v.user.nickname:""}</p>
                                    <p>{getDate(v.time)}</p>
                                </div>
                                <div  className={"ra_mvdetails_new_discuss_in_user_z"}>{}  <span  className={"iconfont iconthumb"}></span></div>
                            </div>
                            <div className={"ra_mvdetails_new_discuss_content"}>{}</div>
                        </div>
            </div> */}
            </>
        )
    }
}