import React from 'react'
import "../assets/style/mineCloud/musicPlaying.css";
import Audio from "../components/MineCloud/Audio";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import profileCreators from "../store/actionCreator/profile/index";
class MusicPlaying extends React.Component {
    constructor() {
        super();
        this.state = {
            songList: [],
            id: "",
            deg: true,
            isShow: true,
            isLike:true,
            like:false
        }
    }
    render() {
        // console.log(this.state.songList, this.state.id)
        // console.log(this.props.songDetail)
        // console.log(23423)
        // let {like}=this.state;
       
        return (

            <div  className="cy_au_box">

                <div className={"cyHead"}>
                    <div>
                        <span className={"iconfont iconzuojiantou"} onClick={() => this.props.history.go(-1)}></span>
                        <p>
                            <span>{this.props.songDetail.code ? this.props.songDetail.songs[0].name : ""}</span>
                            <span>{this.props.songDetail.code ? this.props.songDetail.songs[0].ar[0].name : ""}</span>
                        </p>
                    </div>
                    <span className={"iconfont iconshare"} ></span>
                </div>
                <div className={"cyMusic"} style={{ display: this.state.isShow ? "block" : "none" }} onClick={() => this.setState({ isShow: !this.state.isShow })}>
                    <div className={"cyson1"}>
                        <div style={{position:"relative"}}>
                        <img className={"cyimg1"} src={require("../assets/mine_img/changpian.jpg")}></img>
                        <img className={"cyImgBox"} style={{ animationPlayState: !this.state.deg ? "paused" : "running" }} src={this.props.songDetail.code ? this.props.songDetail.songs[0].al.picUrl : ""} />
                        </div>
                      
                        <div className="cy_au_icon">
                            <span className={`iconfont cyiconaixin ${this.state.like?`iconaixin1`:`iconaixin`}`} onClick={(e)=>this.rerender(e)}></span>
                            <span className={"iconfont iconxiazai1"} ></span>
                            <span className={"iconfont iconpinglun cyiconpinglun"}></span>
                            <span className={"iconfont icondiandiandian"} ></span>
                        </div>
                    </div>
                </div>
                <div className={"cy_au_lrc"} style={{ display: this.state.isShow ? "none" : "block" }} onClick={(e) => this.setState({ isShow: !this.state.isShow })}>
                    <pre className="lyricbox">
                        {this.props.lyric.lrc?this.props.lyric.lrc.lyric:""}
                    </pre>
                </div>

                <footer className={"cyFooter"}>
                    <Audio {...this.props} id={this.state.id} prevSong={this.prevSong.bind(this)} nextSong={this.nextSong.bind(this)} deg={this.state.deg} changeDeg={this.changeDeg.bind(this)}></Audio>
                </footer>

            </div>
        )
    }
    changeDeg(data) {
        this.setState({
            deg: data //把父组件中的deg替换为子组件传递的值
        });

    }
    rerender=(e)=>{
        e.stopPropagation();
        // console.log(!like,23423);
        this.props.changeLike(!this.state.like,this.state.id).then(()=>this.props.getLikeMusic(localStorage.userId));
        this.setState({
            like:!this.state.like
        })
        console.log(this.state.like)
    }
    nextSong() {
        this.state.songList.map((v, i) => {
            if (v.id.toString() == this.state.id) {
                return ((a) => {
                    this.setState({
                        id: this.state.songList[a + 1 > this.state.songList.length - 1 ? 0 : a + 1].id
                    }, () => {
                        this.props.getSonDetail(this.state.id);
                        this.props.getMusic(this.state.id);
                        this.props.getLyric(this.state.id);
                    })
                })(i)
            }
        })
    }
    prevSong() {
        this.state.songList.map((v, i) => {
            if (v.id.toString() == this.state.id) {
                return ((a) => {
                    this.setState({
                        id: this.state.songList[a - 1 < 0 ? this.state.songList.length - 1 : a - 1].id
                    }, () => {
                        this.props.getSonDetail(this.state.id);
                        this.props.getMusic(this.state.id);
                        this.props.getLyric(this.state.id);
                    })
                })(i)
            }
        })
    }
    changeLikeMusic(){
        // console.log(this.props)
        // let like=this.state.like;
        this.props.likeMusic.ids?this.props.likeMusic.ids.map(v=>{
            if(v===this.state.id) return this.setState({like:true});
        }):this.setState({like:false});
        // console.log(this.state.like,"jaskdkajsdh")
    }
    componentWillReceiveProps(nextProps){
        // console.log(this.props,119)
        // let like=this.state.like;
        if(nextProps.likeMusic.ids) nextProps.likeMusic.ids.map(v=>{
            if(v===this.state.id) return this.setState({like:true});
        });
    }
    componentDidMount() {
       
        this.setState({
            songList: this.props.location.state.song,
            id: this.props.location.state.id,
            isLike:true
        })
        this.props.getSonDetail(this.props.location.state.id);
        this.props.getMusic(this.props.location.state.id);
        this.props.getLyric(this.props.location.state.id);
        this.props.getLikeMusic(localStorage.userId).then(()=> this.changeLikeMusic());
    }
}
function mapStateToProps(state, props) {
    return {
        music: state.profile.cyMusic,
        songDetail: state.profile.cySongDetail,
        lyric:state.profile.cylyric,
        likeMusic:state.profile.cyLikeMusic
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlaying);