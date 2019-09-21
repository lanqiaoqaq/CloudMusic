import React from 'react'
import '../../assets/style/find/selec.css'
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'
import FindCreators from '../../store/actionCreator/find'
class CloudSelection extends React.Component{
    constructor(props){
        super(props);
        this.state={
            offset:2
        }
    }
    render(){
        const offset = this.state.offset;
        const {selMv} = this.props;
        return(
            <div className="cloud_selection" onClick={()=>{
                this.props.history.push("/mvDetails/"+selMv.id)
            }}>
                <div className="selec_con">
                    <p className="selec_head">
                        <span>云村精选</span>
                        <span onClick={()=>{
                            this.setState({
                                offset:offset>100?0:offset+1
                            })
                            this.props.getSelMv(offset+1);
                        }}><i className="iconfont iconshuaxin"></i><b>获取新内容</b></span>
                    </p>
                    <p className="selec_img">
                        <img src={selMv.cover} alt=""/>

                        <i className="iconfont iconyousanjiaoxiangyoumianxing"></i>

                        <span className="playcount_mvs">
                            <i className="iconfont iconyousanjiao-wangyiicon"></i>
                            <b>{this.playCountFilter(selMv.playCount)}</b>
                        </span>

                        <span className="dura_mvs">
                            <i className="iconfont iconpaihangbang---"></i>
                            <b>{this.durationFilter(selMv.duration)}</b>
                        </span>

                    </p>
                    <p className="selec_name">
                        {selMv.artistName} 《{selMv.name}》
                    </p>
                </div>

            </div>
        )
    }
    durationFilter(duration){
        duration = Math.floor(duration/1000);
        let miao = duration % 60;
        if(miao < 10){
            miao = "0"+ miao;
        }
        const fen = Math.floor(duration/60);
        return fen+":"+miao;
    }
    playCountFilter(playCount){
        if(playCount <= 99999){
            return playCount;
        }else {
            return Math.floor(playCount / 10000) + "万"
        }
    }
    componentDidMount(){
        this.props.getSelMv(this.state.offset)
    }
}
function mapStateToProps(state,props) {
    return{
        selMv:state.find.selMv
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CloudSelection)