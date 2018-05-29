import React, { Component } from 'react'

import axios from 'axios'

class CategoryForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "",
            description: ""
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
            description: this.state.description
        })
    }
    
    handleDescriptionChange(event) {
        this.setState({
            name: this.state.name,
            description: event.target.value
        })
    }

    handleSubmit(event) {
        console.log("this is being called")
        axios.post("http://ts.ausgrads.academy:8080/categories/add", this.state).finally()
        event.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Category Name:</label>
                <input name="name" placeholder="Add Name" onChange={this.handleNameChange}/><br/>
                <label>Category Description:</label>
                <input name="description" placeholder="Add Description" onChange={this.handleDescriptionChange}/><br/>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default CategoryForm