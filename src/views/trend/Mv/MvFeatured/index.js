import React from "react";
import "../../../../assets/style/trend/mvFeatured.css";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import trendCreator from "../../../../store/actionCreator/trend";
import {getPlayerTime} from "../../../../tools/date";
class MvFeatured extends React.Component{
    constructor(){
        super();
        this.state={
            wyMv:[],
            mainland:[],
            HKaT:[],
            europe:[],
            Korea:[],
            japan:[]
        }
    }

    render() {
        // console.log(this.props.featuredMv)
        const {wyMv,mainland,HKaT,europe,Korea,japan}=this.state;
        // console.log(wyMv,mainland,HKaT,europe,Korea,japan);
        return(
            <>
                <div className={"ra_mvF_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_mvF_follow_header_w"}>MV精选</span>
                </div>


                <div className={"ra_Netease_mv_featured_out"}>
                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>网易出品</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                wyMv.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>内地</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                mainland.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>港台</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                HKaT.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>欧美</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                europe.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>韩国</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                Korea.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>


                    <div className={"ra_Netease_mv_featured"}>
                        <div className={"ra_Netease_mv_featured_in"}>
                            <div onClick={()=>{
                                this.props.history.push("/mvFeatured")
                            }} className={"ra_Netease_mv_featured_in_nav"}>
                                <span className={"word"}>日本</span>
                                <span className={"iconfont iconyou"}></span>
                            </div>
                            {
                                japan.map((v,i)=>(
                                    <div onClick={()=>{
                                        this.props.history.push("/mvDetails/"+v.id)
                                    }} className={"ra_Netease_mv_featured_in_wor"} key={i}>
                                        <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                            <Link className={"vedio"} to={"/"}>
                                                <img src={v.cover} alt=""/>
                                                <div className={"playerNum"}>
                                                    <span className={"iconfont iconbofang3"}></span>
                                                    <span>{getPlayerTime(v.playCount)}</span>
                                                </div>
                                            </Link>
                                            <div className={"name"}>
                                                <p>{v.artistName}</p>
                                                <h2 className={"mvname"}>{v.name}</h2>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className={"ra_mainland"}></div>
                <div className={"ra_HKaT"}></div>
                <div className={"ra_europe"}></div>
                <div className={"ra_Korea"}></div>
                <div className={"ra_japan"}></div>

            </>
        )
    }
    componentWillReceiveProps(nextProps, nextContext) {
        this.setState({
            wyMv:nextProps.featuredMv.wyMv,
            mainland:nextProps.featuredMv.mainland,
            HKaT:nextProps.featuredMv.HKaT,
            europe:nextProps.featuredMv.europe,
            Korea:nextProps.featuredMv.Korea,
            japan:nextProps.featuredMv.japan
        })

    }

    componentDidMount() {
        this.props.getFeaturedMv();
    }
}
export default connect(state=>({featuredMv:state.trend.featuredMv}),dispatch=>bindActionCreators(trendCreator,dispatch))(MvFeatured)
