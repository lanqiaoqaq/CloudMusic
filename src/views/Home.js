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
import Audio from "../components/MineCloud/Audio"
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import  profileCreators  from "../store/actionCreator/profile/index";

class App extends React.Component {

    render() {

        return (
            <>
            <nav className={"top_nav"}>
                <Drawer {...this.props}></Drawer>
                <NavLink to={"/profile"}>我的</NavLink>
                <NavLink to={"/"} exact>发现</NavLink>
                <NavLink to={"/trend"}>动态</NavLink>
                <span onClick={() => {
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
                <footer className={"footer"} style={{display:this.props.cySongDetail.songs?"block":"none"}}>
                    <AudioPlayer {...this.props}></AudioPlayer>
                    {/* <Audio></Audio> */}
                </footer>

            </>
        );
    }
}

function mapStateToProps(state, props) {
    return {
        cySongDetail:state.profile.cySongDetail
    }
}
function mapDispatchToProps(dispatch, props) {
    return bindActionCreators(profileCreators, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
