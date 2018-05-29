import React, { Component } from 'react'

import CategoryModal from './categoryModal'

class Homepage extends Component {

    render() {
        return ( <div>
            <CategoryModal buttonLabel="Add Categories" title="Add Category" actionLabel="Done" />
        </div> );
    }
}



export default Homepage;