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
                <div className="cy_dj">我创建的电台({this.props.createDj.djRadios?this.props.createDj.djRadios.length:""})</div>
                <p className="cy_dj_icon">
                    <span className="iconfont iconhuatong"></span>
                    <span>申请做主播</span>
                </p>
                <div className="cy_dj">我订阅的电台({this.props.dj.djRadios?this.props.dj.djRadios.length:0})</div>
               {
                   this.props.dj.djRadios?this.props.dj.djRadios.map(v=>(
                       <div key={v.id} className="cy_dj_img">
                            <img src={v.picUrl}/>
                            <p>
                                <span>{v.name}</span>
                                <span>by {v.dj.nickname}</span>
                                <span>{v.lastProgramName}</span>
                            </p>
                        </div>
                   )):""
               }
                
                <div className="cy_dj_tj">
                    <p>精品电台推荐</p>
                    <div className="cy_dj_pay">
                         {
                        this.props.pay.data?this.props.pay.data.list.map(v=>(
                             <div key={v.id}>
                                <img style={{width:"100%",height:"3.3rem"}} src={v.picUrl}/>
                                <span>{v.name}</span>
                            </div>
                        )):""
                    }
                    </div>
                   <p style={{textAlign:"center",padding:" 0 0 1rem 0"}}>
                       <span onClick={()=>this.props.history.push("/radiostation")}>
                           更多
                       </span>
                   </p>
                   
                </div>
            </>
        )
    }
   componentDidMount(){
       this.props.getDj(this.props.match.params.id);
       this.props.getpaygift();
   }
}
function mapStateToProps(state,props){
    return {
        dj:state.profile.cydj,
        createDj:state.profile.cyCreateDj,
        pay:state.profile.cypaygift
    }
  }
  function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
  }
  export default connect(mapStateToProps,mapDispatchToProps)(myDj);