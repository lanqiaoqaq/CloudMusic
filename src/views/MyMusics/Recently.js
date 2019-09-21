//本地音乐
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../../store/actionCreator/profile/index";
import { Link } from "react-router-dom";
class Recently extends React.Component{
    render(){
        const {record}=this.props;
         return(
            <>
               <p className="cy_ml_hh cy_lm_hh" >
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <span >最近播放</span>
                        <span style={{marginLeft:"4.2rem",lineHeight: ".29rem"}} className={"iconfont iconfangdajing"}></span>
                        <span className={"iconfont icondiandiandian"}></span>
                </p>
                {
                    record.map((v,i)=>(
                        <div key={i} className={"cy_ml_box"} style={{paddingLeft:".28rem",paddingRight:".5rem"}} onClick={()=>
                            this.props.history.push({ pathname:'/musicplaying',state:{id:v.song.id} })
                        }>
                            <div className={"cy_ml_r"}>
                                <div>
                                    <p>
                                        <span className={"cy_song_width"}>{v.song.name}</span>
                                            <img onClick={(e)=>{
                                            e.stopPropagation();
                                       return this.props.history.push('/mvDetails/'+v.song.mv );
                            }}  style={{display:v.song.mv?"inline-block":"none"}} className="cy_ml_mv" src={require("../../assets/mine_img/微信图片_20190917173616.jpg")}/>
                                    </p>
                                <p>
                                    <img  className="cy_ml_sq" src={require("../../assets/mine_img/微信图片_201909171736161.jpg")}/>
                                        <span className="cy-name-width">{v.song.ar[0].name} - {v.song.al.name}</span>
                                </p>
                                    
                                </div>
                                <span  style={{paddingRight:".1rem"}} className={"iconfont icondiandiandian"} ></span>
                            </div>
                        </div>
                    ))
                }
                
            </>
        )
    }
   componentDidMount(){
       this.props.getRecord();
   }
}
function mapStateToProps(state,props){
    return {
        record:state.profile.cyRecord
    }
}
function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Recently);