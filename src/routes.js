import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ProductView from './components/productview';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            {/* TODO: Change the component name */}
            <Route path="/product" component={ProductView} /> 
        </Switch>
    </div>
)

export default Routes;