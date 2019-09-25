import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  profileCreators  from "../store/actionCreator/profile/index";
class AudioPlayer extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          isPlay: true,
          allTime: 0,
          currentTime:0
        }
      }
    render(){
        let a=0;
        // console.log( this.props)
        let id=0;
        if(this.props.cySongDetail.songs&&this.props.music.data){
             id=this.props.music.data[0].id;
            for(let i=0;i< this.props.cySongDetail.songs.length;i++){
                if(this.props.cySongDetail.songs[i].id==id){
                    a=i;
                    continue;
                }
            }
        }
        return(
            <div className={"audio_player"}  onClick={()=>this.props.history.push({pathname:"/musicplaying",state:{id}})}>
                <div className={"audio_son"}>
                    <img style={{width:"1.2rem",height:"1.2rem",borderRadius:"50%"}} src={this.props.cySongDetail.songs?this.props.cySongDetail.songs[a].al.picUrl:""} alt=""/>
                   
                    <div>
                        <p className={"musicName"}>{this.props.cySongDetail.songs?this.props.cySongDetail.songs[a].name:""}</p>
                        <p className={"musicBody"}>{this.props.cySongDetail.songs?this.props.cySongDetail.songs[a].ar[0].name:""}</p>
                    </div>
                </div>
                <div>
                    <span className={"iconfont iconbofang icon_audio"}></span>
                    <span className={"iconfont iconsangeheng icon_audio"}></span>
                </div>
                <audio 
              id="myaudio"
              src={this.props.music.code?this.props.music.data[0].url:""}
              autoPlay
              onCanPlay={() => this.controlAudio('allTime')}
              onTimeUpdate={(e) =>{
                this.controlAudio('getCurrentTime')
                this.controlAudio('allTime');
            }}
            >
              您的浏览器不支持 audio 标签。
            </audio> 
            </div>
        )
    }

    controlAudio(type,value) {
        const { id,src } = this.props;
        const audio = document.getElementById("myaudio")
        switch(type) {
          case 'allTime':
            this.setState({
              allTime: audio.duration
            })
            break
          case 'play':
            audio.play()
            this.setState({
              isPlay: true
            },()=>{
              this.timeChange();
            })

            break
          case 'pause':
            audio.pause()
            this.setState({
              isPlay: false
            },()=>{
              this.timeChange();
            })
            break
          case 'changeCurrentTime':
            this.setState({
              currentTime: value
            })
            audio.currentTime = value
            if(value == audio.duration) {
              this.setState({
                isPlay: false
              })
            }
            break
          case 'getCurrentTime':
            this.setState({
              currentTime: audio.currentTime
            })
            if(audio.currentTime == audio.duration) {
              this.setState({
                isPlay: false
              })
            }
            break
        }
      }
      componentWillReceiveProps(nextProps){
          console.log(nextProps.currentTime.time)
        if(nextProps.currentTime!==this.props.currentTime){
            this.controlAudio("changeCurrentTime",nextProps.currentTime.time?nextProps.currentTime.time:0)
        }
      }
    componentDidMount(){
        console.log(this.props.currentTime)
        this.controlAudio("changeCurrentTime",this.props.currentTime.time?this.props.currentTime.time:0)
    }
}
function mapStateToProps(state, props) {
    return {
        music:state.profile.cyMusic,
        cySongDetail:state.profile.cySongDetail,
        currentTime:state.profile.cyCurrentTime
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(AudioPlayer);