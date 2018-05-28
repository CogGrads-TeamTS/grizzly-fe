import React, { Component } from 'react'

import { Button } from 'reactstrap';
import Modal from './modal';

class Homepage extends Component {
    constructor(props) {
        super(props)

        this.state = { isOpen: false }
    }

    toggleModal = () => {
        console.log("blah")
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return ( <div>
            <h1>Hello I am the home page component</h1>
            <Button color="danger">Ejecto seato</Button>
            <Button onClick={this.toggleModal}>Add Category</Button>

            <Modal show={this.state.isOpen} onClose={this.toggleModal}>
            <h3>Add Category</h3>
            <form>
                <label>Category Name:</label>
                <input placeholder="Add Name"/>
                <label>Category Description:</label>
                <input placeholder="Add Description"/>
                {/* Add in a submit handler here! -K */}
                <button onClick={this.props.onClose}>Done</button> 
            </form>
            </Modal>
        </div> );
    }
}



export default Homepage;