import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/homepage';
import ProductView from './components/productview';
import ProductAdd from './components/Product/ProductAdd';

const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Homepage} />
            {/* TODO: Change the component name */}
            {/* Order of routes matter */}
            <Route path="/product/add" component={ProductAdd} />  
            <Route path="/product/:id" component={ProductView} />
            
        </Switch>
    </div>
)

export default Routes;