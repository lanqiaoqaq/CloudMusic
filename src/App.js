import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import Home from './views/Home'
import Search from './views/Search'
import SearchDetails from './views/SearchDetails';
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
