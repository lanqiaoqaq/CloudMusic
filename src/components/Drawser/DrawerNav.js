import React from 'react'
import axios from 'axios'
class DrawserNav extends React.Component {
    render() {
        return (
            <ul className="drawer_nav">
                <li>
                    <i className="iconfont iconlight"></i><span>夜间模式</span>
                </li>
                <li>
                    <i className="iconfont iconshezhi"></i><span>设置</span>
                </li>
                <li onClick={async ()=>{
                    localStorage.removeItem("userId");
                    await axios.get("/logout");
                    this.props.history.push("/")
                }}>
                    <i className="iconfont icontuichu"></i><span>退出登陆</span>
                </li>
            </ul>
        )
    }
}

export default DrawserNav;