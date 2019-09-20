import React from 'react'
import '../../assets/style/find/songlist.css'
import SongListBanner from '../../components/Find/SongListBanner'
import Child from '../../views/find/songlist/Child'
import Child1 from '../../views/find/songlist/Child1'
import Child2 from '../../views/find/songlist/Child2'
import Child3 from '../../views/find/songlist/Child3'
import Child4 from '../../views/find/songlist/Child4'
import Child5 from '../../views/find/songlist/Child5'
import Child6 from '../../views/find/songlist/Child6'
import Child7 from '../../views/find/songlist/Child7'
import {
    NavLink,
    Switch,
    Route
} from 'react-router-dom'
class SongList extends React.Component{
    render(){
        return(
            <div className="songlist_skn">
                <div className="songlist_header" onClick={()=>{
                    this.props.history.push("/")
                }}>
                    <i className="iconzuojiantou iconfont"></i>
                    <span>歌单广场</span>
                </div>
                <ul className="songlist_nav">
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} exact={true} to={"/songlist"}>推荐</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child1"}>古风 </NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child2"}>精品</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child3"}>华语</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child4"}>流行</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child5"}>轻音乐</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child6"}>摇滚</NavLink>
                        <NavLink activeStyle={{color:"red",borderBottom:"2px solid red"}} to={"/songlist/child7"}>民谣</NavLink>
                </ul>
                <div className="border_skn"></div>
                <Switch>
                    <Route path={"/songlist"} exact component={Child}></Route>
                    <Route path={"/songlist/child1" }component={Child1}></Route>
                    <Route path={"/songlist/child2" }component={Child2} ></Route>
                    <Route path={"/songlist/child3" }component={Child3} ></Route>
                    <Route path={"/songlist/child4" }component={Child4} ></Route>
                    <Route path={"/songlist/child5" }component={Child5} ></Route>
                    <Route path={"/songlist/child6" }component={Child6} ></Route>
                    <Route path={"/songlist/child7" }component={Child7} ></Route>
                </Switch>
            </div>
        )
    }
}
export default SongList;