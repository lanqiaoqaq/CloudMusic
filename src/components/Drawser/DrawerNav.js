import React from 'react'

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
                <li>
                    <i className="iconfont icontuichu"></i><span>退出</span>
                </li>
            </ul>
        )
    }
}

export default DrawserNav;