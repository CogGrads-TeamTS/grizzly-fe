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
import grizzlogo from '../../Assets/griz-logo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from '../../Auth/Login';
import isAuthenticated from "../../Auth/isAuthenticated";

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
          <ToastContainer />
          <Navbar  light expand="md">
            <NavbarBrand href="/"><img className="griz-logo" src={grizzlogo}  /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <GlobalSearch classname="global-search" rounded="search-rounded" placeholder="Search" />
                <NavItem>
                  <NavLink href="/components/"><i className="far fa-bell p-t-5 white"></i><span className="user-msg">Messages</span></NavLink>
                </NavItem>
                <span className="nav-link welcome-admin p-t-10 white">Welcome, Admin John</span>
                <NavItem className="p-0">
                    { (isAuthenticated) ? (
                          <NavLink href="/logout">
                            <Button color="secondary" className="logout-button p-t-10" id="btn-rounded">Logout <i className="fas fa-sign-out-alt white"></i></Button>
                            <span className="logout-text">Logout</span>
                          </NavLink>
                        ) : (
                        <NavLink>
                            <Button color="secondary" className="logout-button p-t-10" id="btn-rounded" onClick={() => Login}>Login</Button>
                            <span className="logout-text">Login</span>
                        </NavLink> )}
                        </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

export default Header;
