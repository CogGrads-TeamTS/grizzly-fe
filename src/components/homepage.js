import React, { Component } from 'react'
import Tabs from '../components/common/common_tabs';

import CategoryModal from './Category/Modals/categoryModal'

class Homepage extends Component {

    render() {
        return ( 
            <div>
                <Tabs />             
            </div> 
        );
    }
}

export default Homepage;