import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ProductView from './components/ProductView/productview';
import ProductEdit from "./components/ProductView/productEdit";

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            {/* TODO: Change the component name */}
            <Route path="/product/:id/edit" component={ProductEdit} />
            <Route path="/product/:id" component={ProductView} />

        </Switch>
    </div>
)

export default Routes;