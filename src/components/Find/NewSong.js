import React from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from '../../store/actionCreator/find/index'
class NewSong extends React.Component{
    constructor(props){
        super(props);
        this.state={
            DiscOrSong:1
        }
    }
    render(){
        const newSong = this.props.newSong;
        console.log(newSong)
        return(
            <div className={"new_disc"}>
                <div className={"head_disc"}>
                    <div>
                        <span onClick={()=>{
                            this.props.getNewDisc();
                            this.setState({
                                DiscOrSong:1
                            })
                        }} className={this.state.DiscOrSong?"_active _left":"_unactive _left"}>新碟</span>
                        <b></b>
                        <span onClick={()=>{
                            this.props.getNewSong();
                            this.setState({
                                DiscOrSong:0
                            })
                        }} className={this.state.DiscOrSong?"_unactive _right":"_active _right"}>新歌</span>
                    </div>
                    <div onClick={()=>{
                        this.props.history.push("/songlist")
                    }}>{this.state.DiscOrSong?"更多新碟":"新歌推荐"}</div>
                </div>
                <ul>
                    {
                        newSong.map(v=>(
                            <li key={v.id} onClick={()=>{
                                this.props.history.push("/musiclist/"+v.id)
                            }}>
                                <div style={{width:"3.1rem",height:"3.24rem"}}>
                                    <img style={{width:"100%",height:"100%",borderRadius:"5px"}} src={v.picUrl ||v.album.picUrl} alt=""/>
                                </div>
                                <p style={{fontSize:"0.3rem",color:"#3b3b3b",lineHeight:"0.44rem",height:"0.44rem",whiteSpace:"nowrap",overflow:"hidden"}}>{v.name}</p>
                                <p style={{fontSize:"0.28rem",color:"#878787",lineHeight:"0.44rem",height:"0.44rem",whiteSpace:"nowrap",overflow:"hidden"}}>{v.company}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount(){
        this.props.getNewDisc();
    }
}
function mapStateToProps(state,props) {
    return{
        newSong:state.find.newSong
    }
}
function mapDispatchProps(dispatch,props) {
    return bindActionCreators(FindCreator,dispatch)
}
export default connect(mapStateToProps,mapDispatchProps)(NewSong)