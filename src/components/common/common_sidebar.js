import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUserByID, editUserById } from '../../actions/userActions';
import User from '../User/User';
import { Table,Container, Row, Col, Form, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class Sidebar extends Component {
    constructor(props){
        super(props)
            this.editUser = this.editUser.bind(this);
        
    }
    componentDidMount(){
        this.props.fetchUserData();
    }
    
    editUser(payload){
        this.props.editUserById(payload);
    }

    render() { 
        const userData = this.props.userIsLoading  ? null : <User userData={this.props.user}/>;
        
        return ( 
            <div>{this.props.user !== undefined && <User userData={this.props.user} edit={this.editUser} />}</div>
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
        fetchUserData: () => dispatch(fetchUserByID()),
        editUserById: (payload) => dispatch(editUserById(payload))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
