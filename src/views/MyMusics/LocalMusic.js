//本地音乐
import React from "react";
import List from "../../components/MineCloud/List";
class LocalMusic extends React.Component{
    render(){
         return(
            <>
               <p className="cy_ml_hh cy_lm_hh" >
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <span >本地音乐</span>
                        <span style={{marginLeft:"4.2rem",lineHeight: ".29rem"}} className={"iconfont iconfangdajing"}></span>
                        <span className={"iconfont icondiandiandian"}></span>
                </p>
                <div className={"cy_ml_box"} style={{paddingLeft:".28rem",paddingRight:".5rem"}}>
                    <div className={"cy_ml_r"}>
                         <div>
                             <p>
                                  <span>歌名</span>
                                <img className="cy_ml_mv" src={require("../../assets/mine_img/微信图片_20190917173616.jpg")}/>
                             </p>
                           <p>
                               <img  className="cy_ml_sq" src={require("../../assets/mine_img/微信图片_201909171736161.jpg")}/>
                                <span>描述</span>
                           </p>
                        </div>
                        <span  style={{paddingRight:".9rem"}} className={"iconfont icondiandiandian"} ></span>
                    </div>
                </div>
            </>
        )
    }
   
}
export default LocalMusic;