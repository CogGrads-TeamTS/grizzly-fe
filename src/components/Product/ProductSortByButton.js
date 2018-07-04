import React, { Component } from 'react';
import { DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import { connect } from 'react-redux';

import { categoriesFetchData } from '../../actions/categoryActions';


class ProductSortByButton extends Component {
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
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} style={{paddingLeft: "26%"}}>
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu id="categoryDropdown">
                    <DropdownItem onClick={this.changeValue} value="id,desc">Recently Added</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="name,asc">Name A-Z</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="name,desc">Name Z-A</DropdownItem>
                    <DropdownItem onClick={this.changeValue} value="id,asc">Id - Low to High</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.products
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (page, size, sort) => dispatch(categoriesFetchData(page, size, sort)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (ProductSortByButton);