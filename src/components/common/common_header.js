import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Button,
    DropdownItem } from 'reactstrap';
import GlobalSearch from './global_search';
import grizzlogo from '../../Asset/griz-logo.png';

class Header extends React.Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
          <Navbar  light expand="md">
          
            <NavbarBrand href="/"><img className="griz-logo" src={grizzlogo}  /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <GlobalSearch classname="global-search" rounded="search-rounded" placeholder="Search" />
                <NavItem>
                  <NavLink href="/components/"><i class="far fa-bell p-t-5 white"></i><span className="user-msg">Messages</span></NavLink>
                </NavItem>
                <span className="nav-link welcome-admin p-t-10 white">Welcome, Admin John</span>
                <NavItem className="p-0">
                  <NavLink href="https://github.com/reactstrap/reactstrap"> 
                    <Button color="secondary" className="logout-button p-t-10" id="btn-rounded">Logout</Button>
                    <span className="logout-text">Logout</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

export default Header;
