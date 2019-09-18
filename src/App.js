import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Home from './views/Home'
import Search from './views/Search'
import SearchDetails from './views/SearchDetails'
import MusicPlaying from "./views/MusicPlaying";
import HotWall from "./components/village/square/HotWall";
import MusicList from './components/MineCloud/MusicList';
import Login from './views/Login/Login';
import Phone from './views/Login/Phone';
import signUp from './views/Login/SignUp';
import NextCode from './views/Login/NextCode';
import NextName from './views/Login/NextName';
import TrendDetails from "./views/trend/TrendIn/TrendDetails";
import AllFollow from "./views/trend/AllFollow";
import UserInfo from "./views/trend/UserInfo";
import MvFeatured from "./views/trend/Mv/MvFeatured";
import MvDetails from "./views/trend/Mv/MvDeatils";
import MvRanking from "./views/trend/Mv/MvRanking";
class App extends React.Component{
  render(){
      return (
          <>
              <Router>
                    <Switch>
                        <Route path={"/NextCode"}  component={NextCode}></Route>
                        <Route path={"/nextname"}  component={NextName}></Route>
                         <Route path={"/signup"}  component={signUp}></Route>
                        <Route path={"/phone"}  component={Phone}></Route>
                        <Route path={"/login"}  component={Login}></Route>
                        <Route path={"/musiclist"} exact component={MusicList}></Route>
                        <Route path={"/musicplaying"} component={MusicPlaying}></Route>
                        <Route path={"/hotWall"} component={HotWall}></Route>

                        <Route path={"/mvRanking"} component={MvRanking}></Route>
                        <Route path={"/mvDetails"} component={MvDetails}></Route>
                        <Route path={"/mvFeatured"} component={MvFeatured}></Route>
                        <Route path={"/userInfo"} component={UserInfo}></Route>
                        <Route path={"/allFollow"} component={AllFollow}></Route>
                        <Route path={"/trendDetails"} component={TrendDetails}></Route>

                        <Route path={"/Search"} component={Search}></Route>
                        <Route path={"/SearchDetails"} component={SearchDetails}></Route>
                        <Route path={"/"} component={Home}></Route>
                    </Switch>
                </Router>

          </>
      );
  }
}

export default App;
