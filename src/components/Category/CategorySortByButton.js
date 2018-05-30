import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';

class CategorySortByButton extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            dropdownValue: 'Sort By',
            actions: []
        };
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
                    <DropdownItem onClick={this.changeValue} id="name">Name A-Z</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="name">Name Z-A</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="productCount">Product Count - High to Low</DropdownItem>
                    <DropdownItem onClick={this.changeValue} id="productCount">Product Count - Low to High</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
          </div>
        );
    }
}

export default CategorySortByButton;