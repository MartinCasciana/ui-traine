import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Cars from '../pages/Cars'
import Country from '../pages/Country';
import Home from '../pages/Home'
import Instruments from '../pages/Instruments'
import Animals from '../pages/Animals'

export default function BasicExample() {
    return (
        <Router>
            <>
                <nav>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/">Home</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/country">Country</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/cars">Cars</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/instruments">Instruments</Link>
                    &nbsp;&nbsp;&nbsp;
                    <Link to="/animals">Animals</Link>
                </nav>

                <hr />

                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cars" component={Cars}/>
                    <Route path="/country" component={Country}/>
                    <Route path="/instruments" component={Instruments}/>
                    <Route path="/animals" component={Animals}/>
                </Switch>
            </>
        </Router>
    );
}
