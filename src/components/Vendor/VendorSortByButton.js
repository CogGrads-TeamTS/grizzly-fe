import React, { Component } from 'react';
import { DropdownToggle, DropdownItem, DropdownMenu, ButtonDropdown } from 'reactstrap';
import { connect } from 'react-redux';

import { vendorsFetchData } from '../../actions/vendorActions';

class VendorSortByButton extends Component {
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
            dropdownValue: event.currentTarget.textContent
        });

        this.props.update(event.currentTarget.value);
    }

    render() {
        return (
            <div>
                <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} >
                <DropdownToggle caret>
                    {this.state.dropdownValue}
                </DropdownToggle>
                <DropdownMenu id="vendorDropdown">
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
    return {
        vendors: state.vendor,
        filter: state.vendorFilter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (page, size, sort) => dispatch(vendorsFetchData(page, size, sort)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VendorSortByButton);