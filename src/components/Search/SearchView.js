import React from 'react'
class SearchView extends React.Component{
    render() {
        return(
            <div className={"heard"}>
                <i className={"iconfont iconzuojiantou"} onClick={()=>{
                    this.props.location.pathname==='/search'?this.props.history.push("/"):this.props.history.push("/search")
                }}></i>
                <input type="text" placeholder={"去年夏天 - 王大毛"}/>
                <i className={this.props.location.pathname==='/search'?'iconfont iconrenyuansousuo':'iconfont iconchahao'}></i>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.props.location.pathname)
    }
}
export default SearchView