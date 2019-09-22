//本地音乐
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  profileCreators  from "../../store/actionCreator/profile/index";
class myDj extends React.Component{
    render(){
         return(
            <>
               <p className="cy_ml_hh cy_lm_hh" >
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <span >我的电台</span>
                </p>
                <div className="cy_dj">我创建的电台()</div>
                <p className="cy_dj_icon">
                    <span className="iconfont iconhuatong"></span>
                    <span>申请做主播</span>
                </p>
                <div className="cy_dj">我订阅的电台()</div>
                <div className="cy_dj_img">
                    <img />
                    <p>
                        <span>sajkdh</span>
                        <span>fdsf</span>
                        <span>sdf</span>
                    </p>
                </div>
                <div className="cy_dj_tj">
                    <p>精品电台推荐</p>
                    <div>
                        <img/>
                        <span>hsdjkf</span>
                    </div>
                </div>
            </>
        )
    }
   componentDidMount(){
       this.props.getDj(this.props.match.params.id);
   }
}
function mapStateToProps(state,props){
    return {
        music:state.profile.cyMusic
    }
  }
  function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
  }
  export default connect(mapStateToProps,mapDispatchToProps)(myDj);