import React from "react";
class Talking extends React.Component{
    render(){
        return (
            <div onClick={()=>{
                document.querySelector(".ra_mvdetails_addcom1").style.display="none"
            }} className={"ra_mvdetails_recom"}>精彩评论</div>


            <div className={"ra_mvdetails_new_discuss"}>
                {
                    comment.hotComments?comment.hotComments.map((v,i)=>(
                        <div onClick={(e)=>{
                            if(e.target===document.querySelector(".ra_asdf")){
                                document.querySelector(".ra_mvdetails_addcom1").style.display="block";
                                document.querySelector(".ra_mvdetails_addcom1").setAttribute("commentId",v.commentId);
                            }
                        }
                        }  className={"ra_asdf"}>
                            <div className={"ra_mvdetails_new_discuss_in_user"}>
                                <img  onClick={()=>{
                                    if(v.user.userId)
                                        this.props.history.push("/userInfo/"+v.user.userId)
                                }} src={v.user?v.user.avatarUrl:""} alt=""/>
                                <div className={"ra_mvdetails_new_discuss_in_user_s"}>
                                    <p>{v.user?v.user.nickname:""}</p>
                                    <p>{getDate(v.time)}</p>
                                </div>
                                <div onClick={this.props.isLike.bind(this,{t:v.liked?0:1,id:videoDetails.vid,type:5,cid:v.commentId})} style={{
                                    color:v.liked?"red":"#8b8585"
                                }} className={"ra_mvdetails_new_discuss_in_user_z"}>{v.likedCount}  <span  className={"iconfont iconthumb"}></span></div>
                            </div>
                            <div className={"ra_mvdetails_new_discuss_content"}>{v.content}</div>
                        </div>
                    )):[]
                }
            </div>
        )
    }
}