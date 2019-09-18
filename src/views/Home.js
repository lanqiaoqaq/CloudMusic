import React from 'react';
import {
    NavLink,
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import Profile from './Profile'
import Find from './Find'
import Trend from "./Trend";
import AudioPlayer from '../components/AudioPlayer'
import Drawer from '../components/Drawser/DrawerIndex.js'
class App extends React.Component{
    render(){
        return (
            <>
            {/*<Router>*/}
                <nav className={"top_nav"}>
                    {/*<span className={"sidebar"}>*/}
                        {/*<i className={"iconfont icon-sangeheng"}></i>*/}
                        {/*<b className={"msgNum"}>3</b>*/}
                    {/*</span>*/}
                    <Drawer></Drawer>
                    <NavLink to={"/profile"}>我的</NavLink>
                    <NavLink to={"/"} exact>发现</NavLink>
                    <NavLink to={"/trend"}>动态</NavLink>
                    <span onClick={()=>{
                        this.props.history.push("/search")
                    }}><i className={"iconfont icon-fangdajing"}></i></span>
                </nav>
                <section>
                    <Switch>
                        <Route path={"/profile"} component={Profile}></Route>
                        <Route path={"/trend"} component={Trend}></Route>
                        <Route path={"/"} exact component={Find}></Route>
                    </Switch>
                </section>
                <footer className={"footer"}>
                    <AudioPlayer></AudioPlayer>
                </footer>
            {/*</Router>*/}
            </>
        );
    }
}
export default App;
