import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Logout from './Auth/Logout'
import Homepage from './components/homepage';
import ProductView from './components/Product/ProductView/productview';
import ProductEdit from "./components/Product/ProductEdit/productEdit";
import ProductAdd from './components/Product/ProductAdd';


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route  path="/dashboard" component={Homepage} />
            {/* TODO: Change the component name */}
            <Route path="/product/add" component={ProductAdd} />  
            <Route path="/product/:id/edit" component={ProductEdit} />
            <Route path="/product/:id" component={ProductView} />

            {/* Order of routes matter */}
            
        </Switch>
    </div>
)

export default Routes;