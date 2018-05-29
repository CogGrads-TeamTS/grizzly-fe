import React, { Component } from 'react'
import Tabs from '../components/common/common_tabs';

import CategoryModal from './categoryModal'

class Homepage extends Component {

    render() {
        return ( 
            <div>
                <Tabs>
                  <CategoryModal buttonLabel="Add Categories" title="Add Category" actionLabel="Done" />
                <Tabs/>
            </div> 
            
        );
    }
}



export default Homepage;