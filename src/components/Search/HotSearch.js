import React from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from '../../store/actionCreator/search/index'
class HotSearch extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {hotList} = this.props
        // console.log(hotList)
        return (
            <div className={"hot"}>
                <h5>热搜榜</h5>
                <ul>
                    {
                        hotList.map((v, i) => (
                            <li key={v.score} onClick={() => {
                                this.props.history.push("/SearchDetails");
                                localStorage._k = v.searchWord
                            }}>
                                <span className={"red:i+1"}>{i + 1}</span>
                                <span>
                            <p>
                                <i>{v.searchWord}</i>
                                <i>{v.score}</i>
                                <i className={"red"}
                                   style={{display: v.iconType === 1 ? "inline-block" : "none"}}>HoT</i>
                                <i className={"green"}
                                   style={{display: v.iconType === 2 ? "inline-block" : "none"}}>NEW</i>
                                <i className={"red"}
                                   style={{display: v.iconType === 5 ? "inline-block" : "none"}}>👆</i>
                            </p>
                            <p>{v.content}</p>
                        </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }

    componentDidMount() {
        this.props.getHotList();
    }
}

function mapStateToProps(state, props) {
    return {
        hotList: state.search.hotList
    }
}

function mapDispatchProps(dispatch, props) {
    return bindActionCreators(FindCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(HotSearch)