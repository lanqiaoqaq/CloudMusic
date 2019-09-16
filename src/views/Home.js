import React from 'react';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'
import Profile from './Profile'
import Find from './Find'
import Village from './Village'
import Video from './Video'
import AudioPlayer from '../components/AudioPlayer'
class App extends React.Component{
    render(){
        return (
            <>
            <Router>
                <nav className={"top_nav"}>
                    <span className={"sidebar"}>
                        <i className={"iconfont icon-sangeheng"}></i>
                        <b className={"msgNum"}>3</b>
                    </span>
                    <NavLink to={"/profile"}>我的</NavLink>
                    <NavLink to={"/"} exact>发现</NavLink>
                    <NavLink to={"/village"}>云村</NavLink>
                    <NavLink to={"/video"}>视频</NavLink>
                    <span onClick={()=>{
                        console.log(this.props.history.push("/search"))
                    }}><i className={"iconfont icon-fangdajing"}></i></span>
                </nav>
                <section>
                    <Switch>
                        <Route path={"/profile"} component={Profile}></Route>
                        <Route path={"/village"} component={Village}></Route>
                        <Route path={"/video"} component={Video}></Route>
                        <Route path={"/"} exact component={Find}></Route>
                    </Switch>
                </section>
                <footer className={"footer"}>
                    <AudioPlayer></AudioPlayer>
                </footer>
            </Router>
            </>
        );
    }
}
export default App;
