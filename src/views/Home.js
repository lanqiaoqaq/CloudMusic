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
                <nav className={"top_nav"}>
                    <Drawer {...this.props}></Drawer>
                    <NavLink to={"/profile"}>我的</NavLink>
                    <NavLink to={"/"} exact>发现</NavLink>
                    <NavLink to={"/trend"}>动态</NavLink>
                    <span onClick={()=>{
                        this.props.history.push("/search")
                    }}><i className={"iconfont iconfangdajing"}></i></span>
                </nav>

      <section>
                    <Switch>
                        <Route path={"/profile"} component={Profile}></Route>
                        <Route path={"/trend"} component={Trend}></Route>
                        <Route path={"/"} exact component={Find}></Route>
                    </Switch>
                </section>
                <footer className={"footer"} style={{display:"none"}}>
                    <AudioPlayer {...this.props}></AudioPlayer>
                </footer>
            </>
        );
    }
}
export default App;
