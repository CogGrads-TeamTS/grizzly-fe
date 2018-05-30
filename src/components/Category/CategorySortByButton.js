import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import axios from 'axios';

class CategorySortByButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Sort By',
            actions: [],
            sortBy: []
        };
        
        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        this.setState({ 
            dropdownOpen: !this.state.dropdownOpen 
        });
    }

    changeValue = event => {
        this.setState({
          dropdownValue: event.currentTarget.textContent,
        });
    }

    render() {
        return ( 
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu id="categoryDropdown">
                    <DropdownItem onClick={this.changeValue} value="nameAZ">Name A-Z</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="nameZA">Name Z-A</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="IdAsc">Id - Low to High</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="IdDesc">Id - High to Low</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
          </div>
        );
    }
}

export default CategorySortByButton;