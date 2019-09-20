import React from "react";
import "../../../../assets/style/trend/mvFeatured.css";
import {Link} from "react-router-dom"
class MvFeatured extends React.Component{
    render() {
        return(
            <>
                <div className={"ra_mvF_follow_header"}>
                    <span onClick={()=>{
                        this.props.history.go(-1)
                    }} className={"iconfont iconzuojiantou"}></span>
                    <span className={"ra_mvF_follow_header_w"}>MV精选</span>
                </div>


                <div className={"ra_Netease_mv_featured"}>
                    <div className={"ra_Netease_mv_featured_in"}>
                        <div onClick={()=>{
                            this.props.history.push("/mvFeatured")
                        }} className={"ra_Netease_mv_featured_in_nav"}>
                            <span className={"word"}>网易出品</span>
                            <span className={"iconfont iconyou"}></span>
                        </div>
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                        </div>
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
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                        </div>
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
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
                        </div>
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
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>



                        </div>
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
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>

                        </div>
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
                        <div onClick={()=>{
                            this.props.history.push("/mvDetails")
                        }} className={"ra_Netease_mv_featured_in_wor"}>
                            <div className={"ra_Netease_mv_featured_in_wor_in"}>
                                <Link className={"vedio"} to={"/"}>
                                    <img src={require("../../../../assets/img/TrendImg/1.jpg")} alt=""/>
                                    <div className={"playerNum"}>
                                        <span className={"iconfont iconbofang3"}></span>
                                        <span>{"播放量"}</span>
                                    </div>
                                </Link>
                                <div className={"name"}>
                                    <p>啦啦啦</p>
                                    <h2>喵喵喵</h2>
                                </div>
                            </div>
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
}
export default MvFeatured;