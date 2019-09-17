import React from 'react'
import SearchView from '../components/Search/SearchView'
class SearchDetails extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div>
                <SearchView history={this.props.history}></SearchView>
            </div>
        )
    }
}
export default SearchDetails