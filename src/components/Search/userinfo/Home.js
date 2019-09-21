import React from "react"
import "../../../assets/style/Search/userInfo.css"
class Home extends React.Component{
    render() {
        return(
            <div className={"home_k"}>
                <ul>
                    <li>
                        <span><img src={require("../../../assets/search-images/listen.jpg")} alt=""/></span>
                        <span>
                            <p>将故事写给我们——的听歌排行</p>
                            <p>累计听歌7690首</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/love.jpg")} alt=""/></span>
                        <span>
                            <p>将故事写给我们——喜欢的音乐</p>
                            <p>231首，播放4113次</p>
                        </span>
                    </li>
                </ul>
                <ul>
                    <h5>
                        <span>创建的歌单</span>
                        <span>（4个，被收藏3次）</span>
                    </h5>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，播放4次</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，播放4次</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，播放4次</p>
                        </span>
                    </li>
                    <h5>更多歌单</h5>
                </ul>
                <ul>
                    <h5>
                        <span>收藏的歌单</span>
                        <span>（1193）</span>
                    </h5>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，by 夜尽天名，播放8次</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，by 夜尽天名，播放8次</p>
                        </span>
                    </li>
                    <li>
                        <span><img src={require("../../../assets/search-images/5.jpg")} alt=""/></span>
                        <span>
                            <p>浪漫满屋</p>
                            <p>1首，by 夜尽天名，播放8次</p>
                        </span>
                    </li>
                    <h5>更多歌单</h5>
                </ul>
                <ul>
                    <li>基本信息</li>
                    <li>村龄：2年（2017年8月注册）</li>
                    <li>跟多信息</li>
                </ul>
            </div>
        )
    }
}
export default Home