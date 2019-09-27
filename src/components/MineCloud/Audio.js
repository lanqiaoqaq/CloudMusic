import React from "react";
import "../../assets/style/mineCloud/musicPlaying.css";
import ContinuousSlider from "./Slider"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  profileCreators  from "../../store/actionCreator/profile/index";
import pubsub from "pubsub-js"
class Audio extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        id:"xixi",
      isPlay: true,
      isMuted: false,
      volume: 100,
      allTime: 0,
      currentTime:0,
      src:""
    }
  }
    render(){
        const {isPlay,id,currentTime,allTime}=this.state;
        const src=this.props.music;
        return(
            <div className="audioBox">
                {/* id:歌曲id,
                src:歌曲地址，
                preload：是否在页面加载后立即加载 设置autoplay后无效，
                canplay 当浏览器可以播放音频/视频时
                timeupdate 当目前的播放位置已更改时 */}
            <audio 
              id={`audio${id}`}
              src={src.code?src.data[0].url:""}
              autoPlay
              onCanPlay={() => this.controlAudio('allTime')}
              onTimeUpdate={(e) =>{
                this.controlAudio('getCurrentTime')
                this.timeUpdate();
                this.controlAudio('allTime');
            }}
            >
              您的浏览器不支持 audio 标签。
            </audio> 
            <div className={"cy_audio_flex"}>
                        <span className="current">
                    {this.millisecondToDate(currentTime)}
                    </span>
                    {/* 精度条 */}
                     <p ref="timeline" className="cy_timeline">
                            <span ref="playhead" className="playhead" onMouseDown={this.down.bind(this)}></span>
                        </p>
                       {/* <ContinuousSlider audio={document.getElementById(`audio${this.state.id}`)} currentTime={this.state.currentTime} controlAudio={(a,b)=>this.controlAudio(a,b)}></ContinuousSlider> */}
                    {/* 显示时间 */}
                    <span className="current">
                    {this.millisecondToDate(allTime)}
                    </span>
            </div>
           <div className={"cyiconFather"}>
           <i className={"cyiconpause iconfont iconliebiaobofang"}></i>
             <i  onClick={()=>this.props.prevSong()} className={"cyiconpause iconfont iconshangyishou1"}></i>
                {/* 控制播放暂停  */}
            <i 
              className={`cyiconpause iconfont ${isPlay ? `iconbofang2` : `iconbofang`}`} 
              onClick={() => this.controlAudio(isPlay ? 'pause' : 'play')}
            />
            
            <i onClick={()=>this.props.nextSong()} className={"cyiconpause iconfont iconshangyishou"}></i>
            <i className={"cyiconpause iconfont iconicon"}></i>
           </div>
            {/* 修改当前时间 */}
            {/* <input 
              type="range" 
              className="time" 
              step="0.01" 
              max={allTime}     
              value={currentTime}  
              onChange={(value) => this.controlAudio('changeCurrentTime',value)} 
            /> */}
            {/* 控制是否静音 */}
            {/* <i 
              className={isMuted ? 'mute' : 'nomute'} 
              onClick={() => this.controlAudio('muted')}
            /> */}
            {/* 控制音量 */}
            {/* <input 
              type="range" 
              className="volume"
              onChange={(value) => this.controlAudio('changeVolume',value)} 
              value={isMuted ? 0 : volume} 
            /> */}
          </div>
        )
    }
   
      
      timeUpdate() {
        const audio = document.getElementById(`audio${this.state.id}`)
        this.props.getTime(this.state.currentTime,this.state.isPlay);
        var playPercent = 7.6 * (this.state.currentTime / audio.duration);
        this.refs.playhead.style.webkitTransform  = "translateX("+playPercent + "rem)";
        this.refs.playhead.style.transform = "translateX("+playPercent + "rem)";
        if (this.state.currentTime == audio.duration) {
            this.setState({
                isPlay: false
            })
        }
    }

    timelineClick(e) {
                //更新坐标位置
                let clientWd=document.body.clientWidth||document.documentElement.clientWidth;
                if(e.target.nodeName==='P'){
                     const playhead=this.refs.playhead;
                    const audio = document.getElementById(`audio${this.state.id}`)
                    var newLeft = (e.clientX - this.refs.timeline.offsetLeft);
                    // console.log(newLeft,this.refs.timeline.offsetLeft,this.refs.timeline.clientWidth)
                    if (newLeft >= 0 && newLeft <= this.refs.timeline.clientWidth) {
                        playhead.style.transform = "translateX("+ newLeft +"px)";
                    }
                    if (newLeft < 0) {
                        playhead.style.transform = "translateX(0)";
                    }
                    if (newLeft >this.refs.timeline.clientWidth) {
                        playhead.style.transform = "translateX("+ this.refs.timeline.clientWidth + "px)";
                    }
                    // 更新时间
                    audio.currentTime = audio.duration * (newLeft / this.refs.timeline.clientWidth);
                }
               
            }

      millisecondToDate(time) {
        const second = Math.floor(time % 60)
        let minite = Math.floor(time / 60)
        // let hour
        // if(minite > 60) {
        //   hour = minite / 60
        //   minite = minite % 60
        //   return `${Math.floor(hour)}:${Math.floor(minite)}:${Math.floor(second)}`
        // }
        return `${minite}:${second >= 10 ? second : `0${second}`}`
      }
    
      controlAudio(type,value) {
        const { id,src } = this.props;
        const audio = document.getElementById(`audio${this.state.id}`)
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
              this.props.getTime(this.state.currentTime,this.state.isPlay);
            })

            break
          case 'pause':
            audio.pause()
            this.setState({
              isPlay: false
            },()=>{
              this.timeChange();
              this.props.getTime(this.state.currentTime,this.state.isPlay);
            })
            break
          case 'muted':
            this.setState({
              isMuted: !audio.muted
            })
            audio.muted = !audio.muted
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
          case 'changeVolume':
            audio.volume = value / 100
            this.setState({
              volume: value,
              isMuted: !value
            })
            break  
        }
      }
      // componentWillReceiveProps(nextProps){
      //   if(nextProps.currentTime!==this.props.currentTime){
      //    this.setState({
      //       currentTime:nextProps.currentTime.time
      //     })
      // }
        
      // }
      timeChange(){
        this.props.changeDeg(this.state.isPlay);
      }
      down(e) {
        const dv=this.refs.playhead;
        console.log(dv)
        //获取x坐标和y坐标
        let x = e.clientX;
        //获取左部和顶部的偏移量
       let l =  dv.offsetLeft;
        //开关打开
        let isDown = true;
        //设置样式  
        dv.style.cursor = 'move';

    //     window.onmousemove=function(e) {
    //       if (isDown == false) {
    //           return;
    //       }
    //       //获取x和y
    //       var nx = e.clientX;
    //       //计算移动后的左偏移量和顶部的偏移量
    //       var nl = nx - (x - l);
      
    //       dv.style.left = nl + 'px';
    //   }
    //   dv.onmouseup = function() {
    //     //开关关闭
    //     isDown = false;
    //     dv.style.cursor = 'default';
    // }
    }
      componentDidMount(){
        // this.setState({
        //   isPlay:this.props.isPlay
        // })
          this.timeUpdate();
          this.controlAudio("changeCurrentTime",this.props.currentTime.time?this.props.currentTime.time:0)
          this.refs.timeline.addEventListener("click", this.timelineClick.bind(this));
          this.refs.playhead.addEventListener("mousedown", this.down.bind(this));
        // console.log(this.props)
        this.setState({
          isPlay:this.props.currentTime.play?false:true
        },()=>this.controlAudio(this.state.isPlay ? 'pause' : 'play'))
          // this.props.getMusic(this.props.id?this.props.id:this.props.location.state.id);
      }
}
function mapStateToProps(state,props){
  return {
      music:state.profile.cyMusic,currentTime:state.profile.cyCurrentTime
  }
}
function mapDispatchToProps(dispatch,props){
  return bindActionCreators(profileCreators,dispatch);
}
export default connect(mapStateToProps,mapDispatchToProps)(Audio);