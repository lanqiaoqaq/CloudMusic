import React from 'react'
import "../assets/style/mineCloud/musicPlaying.css";
import Audio from "../components/MineCloud/Audio"
class MusicPlaying extends React.Component{
    constructor(){
        super();
        this.state={
            song:[],
            picUrl:"",
            name:"",
            isPlay:true,
            deg:0
        }
    }
    render(){
        const {song,picUrl,name,deg}=this.state;
        return(
            <div >
            
                     <div className={"cyHead"}>
                    <div>
                        <span className={"iconfont iconzuojiantou"} onClick={()=>this.props.history.go(-1)}></span>
                        <p>
                            <span>{song.name}</span>
                            <span>{name}</span>
                        </p>
                    </div>
                    <span className={"iconfont iconshare"} ></span>
                </div>
                <div className={"cyMusic"}>
                    <div className={"cyson1"}>
                         <img className={"cyimg1"} src={require("../assets/mine_img/changpian.jpg")}></img>
                        <img className={"cyImgBox"} src={picUrl}  />
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
        },() =>{
           console.log(this.state.deg);//setState是异步操作，但是我们可以在它的回调函数里面进行操作
        });
 
    }
    componentDidMount(){
        this.setState({
            song:this.props.location.state.song,
            picUrl:this.props.location.state.song.al.picUrl,
            name:this.props.location.state.song.ar[0].name
        })
    }
}
export default MusicPlaying;