import React, { Component } from 'react'

import OurModal from './ourModal'
import CategoryForm from './categoryForm';

class Homepage extends Component {

    render() {
        return ( <div>
            <OurModal buttonLabel="Add Categories" title="Add Category" actionLabel="Done">
                <CategoryForm />
            </OurModal>
        </div> );
    }
}



export default Homepage;