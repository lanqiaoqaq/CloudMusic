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
            isShow: true
        }
    }
    render() {
        // console.log(this.state.songList, this.state.id)
        console.log(this.props)
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
                            <span className={"iconfont iconaixin cyiconaixin"} ></span>
                            <span className={"iconfont iconxiazai1"} ></span>
                            <span className={"iconfont iconpinglun cyiconpinglun"}></span>
                            <span className={"iconfont icondiandiandian"} ></span>
                        </div>
                    </div>
                </div>
                <div className={"cy_au_lrc"} style={{ display: this.state.isShow ? "none" : "block" }} onClick={() => this.setState({ isShow: !this.state.isShow })}>
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

    componentDidMount() {
        this.setState({
            songList: this.props.location.state.song,
            id: this.props.location.state.id
        })
        this.props.getSonDetail(this.props.location.state.id);
        this.props.getMusic(this.props.location.state.id);
        this.props.getLyric(this.props.location.state.id);
    }
}
function mapStateToProps(state, props) {
    return {
        music: state.profile.cyMusic,
        songDetail: state.profile.cySongDetail,
        lyric:state.profile.cylyric
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(MusicPlaying);