import React from 'react'
class SearchView extends React.Component{
    render() {
        return(
            <div className={"heard"}>
                <i className={"iconfont iconzuojiantou"} onClick={()=>{
                    this.props.history.go(-1)
                }}></i>
                <input type="text" placeholder={"去年夏天 - 王大毛"}/>
                <i className={this.props.history.location.pathname==='/search'?'iconfont iconrenyuansousuo':'iconfont iconchahao'}></i>
            </div>
        )
    }
}
export default SearchView