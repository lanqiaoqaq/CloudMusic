import React from 'react'
import {
    Route,
    NavLink,
} from 'react-router-dom'
import SearchView from '../components/Search/SearchView'
import Composite from '../components/Search/DetailSearch/Composite'
import Single from '../components/Search/DetailSearch/Single'
import Video from '../components/Search/DetailSearch/Video'
import Album from '../components/Search/DetailSearch/Album'
import SongWriter from '../components/Search/DetailSearch/SongWriter'
import PlayList from '../components/Search/DetailSearch/PlayList'
import RadioStation from '../components/Search/DetailSearch/RadioStation'
import UserHome from '../components/Search/DetailSearch/UserHome'
import '../assets/style/Search/searchDetail.css'
class SearchDetails extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={"detail_nav"}>
                    <SearchView {...this.props}></SearchView>
                    <ul className={"search_nav"}>
                        <li><NavLink to={"/SearchDetails"} exact activeStyle={{color:"red",borderBottom:"2px solid red"}}>综合</NavLink></li>
                        <li><NavLink to={"/SearchDetails/Single"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>单曲</NavLink></li>
                        <li><NavLink to={"/SearchDetails/Video"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>视频</NavLink></li>
                        <li><NavLink to={"/SearchDetails/SongWriter"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>歌手</NavLink></li>
                        <li><NavLink to={"/SearchDetails/Album"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>专辑</NavLink></li>
                        <li><NavLink to={"/SearchDetails/PlayList"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>歌单</NavLink></li>
                        <li><NavLink to={"/SearchDetails/RadioStation"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>主播电台</NavLink></li>
                        <li><NavLink to={"/SearchDetails/UserHome"} activeStyle={{color:"red",borderBottom:"2px solid red"}}>用户</NavLink></li>
                    </ul>
                    <ul>
                        <li><Route path={"/SearchDetails"} exact component={Composite}></Route></li>
                        <li><Route path={"/SearchDetails/Single"} component={Single}></Route></li>
                        <li><Route path={"/SearchDetails/Video"} component={Video}></Route></li>
                        <li><Route path={"/SearchDetails/SongWriter"} component={SongWriter}></Route></li>
                        <li><Route path={"/SearchDetails/Album"} component={Album}></Route></li>
                        <li><Route path={"/SearchDetails/PlayList"} component={PlayList}></Route></li>
                        <li><Route path={"/SearchDetails/RadioStation"} component={RadioStation}></Route></li>
                        <li><Route path={"/SearchDetails/UserHome"} component={UserHome}></Route></li>
                    </ul>
            </div>
        )
    }
}

export default SearchDetails