import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Components/zPages/LoginPage';
import RegisterPage from './Components/zPages/RegisterPage';
import HomePage from './Components/zPages/Home';
import VideoPage from './Components/zPages/VideoPage';
import CreateVideo from './Components/zPages/CreateVideo';
import SearchPage from './Components/zPages/SearchPage';

const Routes = () => {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/Register" component={RegisterPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/Video/:id" component={VideoPage} />
          <Route exact path="/Upload" component={CreateVideo} />
          <Route exact path="/Search/:search" component={SearchPage} />
        </Switch>
      </BrowserRouter>
    )
}
  
export default Routes;

