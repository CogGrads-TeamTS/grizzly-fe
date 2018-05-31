import React, { Component } from 'react';
import { Button, Dropdown, DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import axios from 'axios';
import { connect } from 'react-redux';

import { categoriesFetchData, sortCategory } from '../../actions/categoryActions';


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

        // console.log('sort value: ' + event.currentTarget.value );

        // this.props.sortChanged(event.currentTarget.value);

        // console.log('category filter sort param: ' + this.props.filter.sort);

        // Enter new action here
        // console.log('fetching params...');
        // setTimeout (() => {
        //     this.props.fetchData()
        // } , 2000);
        
        this.props.update(event.currentTarget.value);
    }

    render() {
        return ( 
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu id="categoryDropdown">
                    <DropdownItem onClick={this.changeValue} value="name,asc">Name A-Z</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="name,desc">Name Z-A</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="id,asc">Id - Low to High</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="id,desc">Id - High to Low</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
          </div>
        );
    }
}

const mapStateToProps = (state) => { 
    return{
        categories: state.category,
        filter: state.categoryFilter
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (page, size, sort) => dispatch(categoriesFetchData(page, size, sort)),
        sortChanged: (sortParam) => dispatch(sortCategory(sortParam))
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (CategorySortByButton);