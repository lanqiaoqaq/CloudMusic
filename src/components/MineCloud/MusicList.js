//歌单列表页
import React from "react";
import List from "./List";
import MusicListHead from "./MusicListHead";
class MusicList extends React.Component{
    render(){
         return(
            <>
               <MusicListHead {...this.props}></MusicListHead>
               <List></List>
            </>
        )
    }
   
}
export default MusicList;