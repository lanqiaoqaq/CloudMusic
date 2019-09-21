import React from 'react'

class History extends React.Component {
    render() {
        return (
            <div className={"history"}>
                <p>
                    <i>历史纪录</i>
                    <i className={"iconfont iconlajixiang"}></i>
                </p>
                <p>
                    <b>{localStorage._k}</b>
                    <b>{localStorage._k}</b>
                    <b>{localStorage._k}</b>
                </p>
            </div>
        )
    }
}

export default History