import React from "react";
import PastList from "../components/pastLaunchList";
import UpcomingList from "../components/upcomingLaunchList";
import {BrowserRouter as Router, Switch, Link , Route} from "react-router-dom";

const Content = () => {
    return(
        <div  className = {"content"}>
        <Router>
            <ul>
                <li><Link to = {"/"}>Past Launches</Link></li>
                <li><Link to = {"/future"}>Upcoming Launches</Link></li>
            </ul>
            <Switch>
                <Route exact path = "/" component = {PastList}/>
                <Route exact path = "/future" component = {UpcomingList}/>
            </Switch>
        </Router>
        </div>
    )
}

export default Content