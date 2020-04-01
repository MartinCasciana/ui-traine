import React from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import List from './list';
import Edit from './edit';

export default ({match: {path}}) => (
    <Switch>
        <Route path={`${path}/edit/new`} exact component={Edit} />
        <Route path={`${path}/edit/:code`} exact component={Edit} />
        <Route path={path} component={List}/>
    </Switch>
);
