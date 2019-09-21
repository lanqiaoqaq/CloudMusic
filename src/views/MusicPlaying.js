import React from 'react'
import "../assets/style/mineCloud/musicPlaying.css";
import Audio from "../components/MineCloud/Audio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../store/actionCreator/profile/index";
class MusicPlaying extends React.Component{
    constructor(){
        super();
        this.state={
            song:[],
            picUrl:"",
            name:"",
            isPlay:true,
            deg:true
        }
    }
    render(){
        return(
            
            <div >
            
                     <div className={"cyHead"}>
                    <div>
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <p>
                            <span>{this.props.songDetail.code?this.props.songDetail.songs[0].name:""}</span>
                            <span>{this.props.songDetail.code?this.props.songDetail.songs[0].ar[0].name:""}</span>
                        </p>
                    </div>
                    <span className={"iconfont iconshare"} ></span>
                </div>
                <div className={"cyMusic"}>
                    <div className={"cyson1"}>
                         <img className={"cyimg1"} src={require("../assets/mine_img/changpian.jpg")}></img>
                        <img className={"cyImgBox"} style={{animationPlayState:!this.state.deg?"paused":"running"}} src={this.props.songDetail.code?this.props.songDetail.songs[0].al.picUrl:""}  />
                         <div>
                         <span className={"iconfont iconaixin cyiconaixin"} ></span>
                         <span className={"iconfont iconxiazai1"} ></span>
                         <span className={"iconfont iconpinglun cyiconpinglun"} ></span>
                         <span className={"iconfont icondiandiandian"} ></span>
                         </div>
                    </div>
                </div>
                <footer className={"cyFooter"}>
                    <Audio {...this.props} deg={this.state.deg}  changeDeg={this.changeDeg.bind(this)}></Audio>
                </footer>
               
            </div>
        )
    }
    changeDeg(data) {
        this.setState({
            deg: data //把父组件中的deg替换为子组件传递的值
        });
 
    }
    componentDidMount(){
        // this.setState({
        //     song:this.props.location.state.song,
        //     picUrl:this.props.location.state.song.al.picUrl,
        //     name:this.props.location.state.song.ar[0].name
        // })
        this.props.getSonDetail(this.props.location.state.id);
    }
}
function mapStateToProps(state,props){
    return {
        music:state.profile.cyMusic,
        songDetail:state.profile.cySongDetail
    }
  }
  function mapDispatchToProps(dispatch,props){
    return bindActionCreators(profileCreators,dispatch);
  }
  export default connect(mapStateToProps,mapDispatchToProps)(MusicPlaying);