import React from 'react'
import "../assets/style/find_1.css"
class Find extends React.Component{
    render(){
        return(
            <div>
                <div className={"f_banner"}>
                    <div className={"banner_pic"}>

                    </div>
                </div>
                <ul className={"intro"}>
                    <li>
                        <div>
                            <i className={"iconfont icontuijian"}></i>
                        </div>
                        <p>每日推荐</p>
                    </li>
                    <li>
                        <div>
                            <i className={"iconfont icontuijian"}></i>
                        </div>
                        <p>每日推荐</p>
                    </li>
                    <li>
                        <div>
                            <i className={"iconfont icontuijian"}></i>
                        </div>
                        <p>每日推荐</p>
                    </li>
                    <li>
                        <div>
                            <i className={"iconfont icontuijian"}></i>
                        </div>
                        <p>每日推荐</p>
                    </li>
                    <li>
                        <div>
                            <i className={"iconfont icontuijian"}></i>
                        </div>
                        <p>每日推荐</p>
                    </li>
                </ul>
                <div className={"intro_playlist"}>
                    <div className={"head_playlist"}>
                        <span onClick={()=>{
                            console.log(this.props)
                        }}>推荐歌单</span>
                        <span>歌单广场</span>
                    </div>
                    <ul className={"playlist_list"}>
                        <li>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p></p>
                        </li>
                        <li>
                            <div></div>
                            <p></p>
                        </li> <li>
                        <div></div>
                        <p></p>
                    </li> <li>
                        <div></div>
                        <p></p>
                    </li> <li>
                        <div></div>
                        <p></p>
                    </li> <li>
                        <div></div>
                        <p></p>
                    </li>




                    </ul>
                </div>
                <div className={"new_disc"}>
                    <div className={"head_disc"}>
                        <div>
                            <span className={"_active _left"}>新碟</span>
                            <b></b>
                            <span className={"_unactive _right"}>新歌</span>
                        </div>
                        <div>
                            更多新碟
                        </div>
                    </div>
                    <ul>
                        <li>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p></p>
                            <p></p>
                        </li>
                        <li>
                            <div>
                                <img src="" alt=""/>
                            </div>
                            <p></p>
                            <p></p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Find;