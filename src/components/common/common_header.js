import React from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';
import GlobalSearch from './global_search';
import grizzlogo from '../../Assets/griz-logo.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import isAuthenticated from "../../Auth/isAuthenticated";
import {connect} from "react-redux";
import { fetchUserByID} from "../../actions/userActions";

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
    render() { //console.log(this.props.user);
      return (
        <div>
          <ToastContainer />
          <Navbar  light expand="md">
            <NavbarBrand href="/admin"><img className="griz-logo" alt="img" src={grizzlogo}  /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
              <GlobalSearch classname="global-search" rounded="search-rounded" placeholder="Search" />
                <NavItem>
                  <NavLink href="/"><i className="far fa-bell p-t-5 white"></i><span className="user-msg">Messages</span></NavLink>
                </NavItem>
                <span className="nav-link welcome-admin p-t-10 white">Welcome,{this.props.user !== undefined && this.props.user.name}</span>
                <NavItem className="p-0">
                    { (isAuthenticated) ? (
                          <NavLink href="/admin/logout">
                            <Button color="secondary" className="logout-button p-t-10" id="btn-rounded">Logout <i className="fas fa-sign-out-alt white"></i></Button>
                            <span className="logout-text">Logout</span>
                          </NavLink>
                        ) : (
                        <NavLink>
                        </NavLink> )}
                        </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }

const mapStateToProps = (state) => {
    return{
        user: state.user.user,
        userIsLoading: state.userIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserData: () => dispatch(fetchUserByID())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);