//歌单列表页
import React from "react";
class MusicListHead extends React.Component{
    render(){
         return(
            <>
                <div className="cy_ml_head" style={{ backgroundImage: `url(${require("../../assets/search-images/s2.jpg")})` }}>
                    <p className="cy_ml_hh">
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <span >歌单</span>
                        <span style={{lineHeight: ".29rem"}} className={"iconfont iconfangdajing"}></span>
                        <span className={"iconfont icondiandiandian"}></span>
                    </p>
                    <div className="cy_ml_mm">
                        <img style={{width:"3.83rem",height:"3.84rem",margin:".2rem .5rem 0 .2rem"}} src={require("../../assets/search-images/s2.jpg")}/>
                        <div >
                            <p className="cy_ml_wrap">哈哈哈哈哈哈哈哈哈哈哈哈xiixiixiiiixixi哈哈哈哈哈哈</p>
                            <div>
                            <img className="cy_ml_iconImg" src={require("../../assets/search-images/s2.jpg")}/>
                            <span >名字</span>
                            <span className={"iconfont iconyou"}></span>
                            </div>
                        </div>
                    </div>
                    <div className="cy_ml_bm">
                        <span className={"iconfont iconxinjian"}></span>
                        <span className={"iconfont iconpinglun"}></span>
                        <span className={"iconfont iconshare"}></span>
                        <span className={"iconfont iconxiazai1"}></span>
                    </div>
                </div>
            </>
        )
    }
   
}
export default MusicListHead;