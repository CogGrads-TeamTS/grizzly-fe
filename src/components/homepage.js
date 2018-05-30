import React, { Component } from 'react'
import Tabs from '../components/common/common_tabs';

import CategoryModal from './Category/categoryModal'
import CategorySortByButton from './Category/CategorySortByButton';

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