import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Auth/Login';
import Logout from './Auth/Logout'
import Homepage from './components/homepage';
import ProductView from './components/Product/ProductView/productview';
import ProductEdit from "./components/Product/ProductEdit/productEdit";
import ProductAdd from './components/Product/ProductAdd';

import Tabs from './components/common/common_tabs';


const Routes = () => (
    <div>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route  path="/dashboard" render={(props)=><Homepage><Tabs {...props}/></Homepage>} />
            {/* TODO: Change the component name */}
            {/* <Route path="/product/add" component={Homepage} show={ProductAdd}/>   */}
            <Route path="/product/add" render={(props)=><Homepage><ProductAdd {...props}/></Homepage>}/>  
            <Route path="/product/:id/edit" render={(props)=><Homepage><ProductEdit {...props}/></Homepage>} />
            <Route path="/product/:id" render={(props)=><Homepage><ProductView {...props}/></Homepage>} />

            {/* Order of routes matter */}
            
        </Switch>
    </div>
)

export default Routes;