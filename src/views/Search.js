import React from 'react'
import '../assets/style/Search/index.css'
import SearchView from '../components/Search/SearchView'
import Advertisement from '../components/Search/Advertisement'
import History from '../components/Search/History'
import HotSearch from '../components/Search/HotSearch'
class Search extends React.Component{
    render(){
        return(
            <div className={"box_k"}>
                <SearchView {...this.props}></SearchView>
                <div className={"box_k_k"}>
                    <Advertisement></Advertisement>
                    <History></History>
                    <HotSearch {...this.props} ></HotSearch>
                </div>
            </div>
        )
    }
}
export default Search;