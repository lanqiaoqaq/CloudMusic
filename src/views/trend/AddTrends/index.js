import React from "react";
import {Link} from "react-router-dom"
import trendCreator from "../../../store/actionCreator/trend";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";;
class AddTrends extends React.Component{
    constructor(){
        super();
        this.state={
            songName:""
        }
    }
    render() {
        const {songName}=this.state
        return(
            <>
                <div className={"ra_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.push("/trend")
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_follow_header_w"}>发动态</span>
                    <span onClick={this.props.addSong.bind(this,{id:this.props.match.params.id})} className={"ra_addTrands_go"}>发送</span>
                </div>
                <div className={"ra_addTrands_text"} >
                    <textarea placeholder={"一起聊聊吧"} />
                </div>
                <Link to={"/recently1"}><div className={"ra_addTrands_song"}>
                    {
                        songName===""?"给动态配上音乐":this.state.songName
                    }
                </div></Link>
            </>
        )
    }
    componentDidMount() {
        console.log(this.props.match.params.id,this.props.match.params.name);
        if(this.props.match.params.id!="asd"){
            this.setState({
                songName:this.props.match.params.name
            })
        }
    }
}
export default connect(state=>({trend:state.trend.trend}),dispatch=>bindActionCreators(trendCreator,dispatch))(AddTrends);
