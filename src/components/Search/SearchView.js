import React from 'react'
import {
    connect
} from 'react-redux'
import {
    bindActionCreators
} from 'redux'
import FindCreator from "../../store/actionCreator/search";

class SearchView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            StrList: ""
        }
    }

    getabc() {
        this.refs.abc.value = this.refs.abc.value.replace(/[, ]/g, '');
        if (this.refs.abc.value) {
            this.props.getFuzzySearchList(this.refs.abc.value)
            this.setState({
                StrList: this.refs.abc.value
            })
        }else {
            this.setState({
                StrList:""
            })
        }
    }
    getcontext() {
        localStorage._k = this.refs.abc.value;
        this.props.location.pathname === '/SearchDetails'?this.props.history.push("/SearchDetails/Single"):this.props.history.push("/SearchDetails");
        this.setState({
            StrList:""
        });
    }
    render() {
        const {fuzzySearchList} = this.props;
        return (
            <div className={"heard"}>
                <i className={"iconfont iconzuojiantou"} onClick={() => {
                    this.props.location.pathname === '/search' ? this.props.history.push("/") : this.props.history.push("/search")
                }}></i>
                <input type="text" placeholder={"去年夏天 - 王大毛"} ref={"abc"} onChange={this.getabc.bind(this)}/>
                <i className={this.props.location.pathname === '/search' ? 'iconfont iconrenyuansousuo' : 'iconfont iconchahao'}></i>
                <div className={"mySearch"} style={{display: this.state.StrList ? "block" : "none"}}>
                    <h5 onClick={this.getcontext.bind(this)} ref={"context"}>搜索 "{this.state.StrList}"</h5>
                    <ul>
                        {
                            fuzzySearchList.map(v => (
                                <li key={v.id} className={"iconfont iconfangdajing"} onClick={()=>{
                                    this.props.location.pathname === '/SearchDetails'?this.props.history.push("/SearchDetails/Single"):this.props.history.push("/SearchDetails");
                                    localStorage._k = v.name
                                    this.setState({
                                        StrList:""
                                    })
                                }}>{v.name}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getFuzzySearchList()
    }
}

function mapStateToProps(state, props) {
    return {
        fuzzySearchList: state.search.fuzzySearchList
    }
}

function mapDispatchProps(dispatch, props) {
    return bindActionCreators(FindCreator, dispatch)
}

export default connect(mapStateToProps, mapDispatchProps)(SearchView)