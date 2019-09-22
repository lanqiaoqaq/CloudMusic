import React from 'react'
import '../../assets/style/find/selec.css'
import {
    bindActionCreators
} from 'redux'
import {
    connect
} from 'react-redux'
import FindCreators from '../../store/actionCreator/find'
class MvList extends React.Component {
    render() {
        const mvList = this.props.mvList;
        return (
            <>
                {
                    mvList.map(v=>(
                        <div className="cloud_selection" key={v.id} onClick={()=>{
                            this.props.history.push("/mvDetails/"+v.id)
                        }}>
                            <div className="selec_con">
                                <p className="selec_img">
                                    <img src={v.cover} alt=""/>

                                    <i className="iconfont iconyousanjiaoxiangyoumianxing"></i>

                                    <span className="playcount_mvs">
                            <i className="iconfont iconyousanjiao-wangyiicon"></i>
                            <b>{this.playCountFilter(v.playCount)}</b>
                        </span>

                                    <span className="dura_mvs">
                            <i className="iconfont iconpaihangbang---"></i>
                            <b>{this.durationFilter(v.duration)}</b>
                        </span>

                                </p>
                                <p className="selec_name">
                                    {v.artistName} 《{v.name}》
                                </p>
                            </div>

                        </div>
                    ))
                }
            </>
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
        this.props.getMvList()
    }
}
function mapStateToProps(state,props) {
    return{
        mvList:state.find.mvList
    }
}
function mapDispatchToProps(dispatch,props) {
    return bindActionCreators(FindCreators,dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(MvList)