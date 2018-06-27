import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {upper} from '../../lib/helper';
import UserForm from './UserForm';
import defaultProfile from '../../Assets/default_profile.gif';

class User extends Component{
    constructor(props){
        super(props);
        
        this.state = {
            disabled: true,
            isActive: '',
        }
        this.enableInput = this.enableInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.notActive = this.notActive.bind(this);
    }
    notActive(){
        this.setState({
            isActive: '',
            disabled: true
        })
    }
    
    enableInput(){
        this.setState({disabled: false, isActive: 'active'});
    }


    handleSubmit = (payload) => { 
        this.props.edit(payload);
        this.notActive();
    }

    render() {
        const isDisbaled = this.state.disabled;
        const isActive = this.state.isActive;
        
        return(
            <Row>
                <Col>
                    <Card className="profile-card">
                        <CardTitle>
                            <div className="profile-header">
                                <p>PROFILE
                                <i className="far fa-edit" onClick={this.enableInput}></i></p>
                            </div>
                        </CardTitle>
                            <div className="profile-image">
                                <img src={defaultProfile} width="100%" height="100%"/>
                            </div>
                          
                            <UserForm userData={this.props.userData} isDisabled={isDisbaled} onSubmit={this.handleSubmit} isActive={isActive} notActive={this.notActive}/>
                       
                    </Card>
                </Col>
            </Row>
        )
    }
}

export default User;