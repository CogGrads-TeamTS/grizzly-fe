import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';

const Routes = () => {
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
        </Switch>
    </div>
}

export default Routes;