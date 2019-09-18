import React from 'react'
import "../assets/style/find/find_1.css"
import Banner from '../components/Find/Banner'
import MidNav from '../components/Find/MidNav'
import IntroPlaylist from '../components/Find/IntroPlaylist'
import NewSong from '../components/Find/NewSong'
class Find extends React.Component{
    render(){
        return(
            <div>
                <div className={"f_banner"}>
                    <div className={"banner_pic"}>
                        <Banner></Banner>
                    </div>
                </div>
                <MidNav {...this.props}></MidNav>
                <div className={"intro_playlist"}>
                    <div className={"head_playlist"}>
                        <span>推荐歌单</span>
                        <span>歌单广场</span>
                    </div>
                    <IntroPlaylist></IntroPlaylist>
                </div>
                <NewSong></NewSong>
            </div>
        )
    }
}
export default Find;