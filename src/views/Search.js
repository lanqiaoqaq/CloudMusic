import React from 'react'
import '../assets/style/Search/index.css'
import SearchView from '../components/Search/SearchView'
import Advertisement from '../components/Search/Advertisement'
import History from '../components/Search/History'
import HotSearch from '../components/Search/HotSearch'
class Search extends React.Component{
    render(){
        return(
            <div className={"box"}>
                <SearchView history={this.props.history}></SearchView>
                <Advertisement></Advertisement>
                <History></History>
                <HotSearch history={this.props.history} ></HotSearch>
            </div>
        )
    }
}
export default Search;