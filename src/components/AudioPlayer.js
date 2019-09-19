import React from 'react'

class AudioPlayer extends React.Component{
    constructor(){
        super();
        this.state={

        }
    }
    render(){
        return(
            <div className={"audio_player"} onClick={()=>this.props.history.push("/musicplaying")}>
                <div className={"audio_son"}>
                    {/* <img src="" alt=""/> */}
                    <p style={{width:"1.2rem",height:"1.2rem",background:"red",borderRadius:"50%"}}></p>
                    <div>
                        <p className={"musicName"}>歌名</p>
                        <p className={"musicBody"}>简介</p>
                    </div>
                </div>
                <div>
                    <span className={"iconfont iconbofang icon_audio"}></span>
                    <span className={"iconfont iconsangeheng icon_audio"}></span>
                </div>
            </div>
        )
    }
}
export default AudioPlayer