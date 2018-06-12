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
          <Navbar color="light" light expand="md">
          <img src={grizzlogo} width="20%" />
            <NavbarBrand href="/"></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/"><i class="far fa-bell"></i></NavLink>
                </NavItem>
                <span className="nav-link">Welcome, Admin John</span>
                <NavItem className="p-0">
                  <NavLink href="https://github.com/reactstrap/reactstrap"> <Button color="secondary" id="btn-rounded">Logout</Button></NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

// class Header extends Component {
//     render() {
//         return (
//                 <Row>
//                     <Col md="5" sm="12">
//                         <img src={grizzlogo} width="60%" />
//                     </Col>
//                     <Col md="4" sm="12">
//                         <GlobalSearch placeholder="Search"/>
//                     </Col>
//                     <Col md="3" sm="12"></Col>
//                 </Row>
//             );
//     }
// }

export default Header;
