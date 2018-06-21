import React, {Component} from 'react';
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import {  Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {upper} from '../../lib/helper';

class User extends Component{
    constructor(){
        super();
        
        this.state = {
            disabled: true,
            isActive: '' 
        }
        this.enableInput = this.enableInput.bind(this);
        this.cancelInput = this.cancelInput.bind(this);
    }
    enableInput(){
        this.setState({disabled: false, isActive: 'active'});
    }

    cancelInput(){
        this.setState({disabled: true, isActive: ''});
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
                                <img src="http://i.imgur.com/Esvthp8.gif" width="100%" height="100%"/>
                            </div>
                            <FormGroup>
                                <Input type="text" name="username" id="UserProfile" value={upper(this.props.userData.name)} 
                                      className={isActive} disabled={isDisbaled}/>

                                <Label className="profile-head head">ID</Label>
                                    <Input type="text" name="id" id="UserProfile" value={this.props.userData.id} 
                                        className={isActive} disabled={isDisbaled}/>
                                      
                                <Label className="profile-head head">Designation</Label>
                                    <Input type="text" name="id" id="UserProfile" value={upper(this.props.userData.designation)}
                                        className={isActive} disabled={isDisbaled}/>
                                      
                                <Label className="profile-head head">Office</Label>
                                    <Input type="text" name="id" id="UserProfile" value={upper(this.props.userData.office)} 
                                        className={isActive} disabled={isDisbaled}/>
                            </FormGroup>

                        <CardText>
                            <Button className={`btn-profile m-l-5 ${isActive}`} onClick={this.cancelInput}>Cancel</Button>
                            <Button  color="primary" className={`btn-profile m-r-5 float-right ${isActive}`}>Save Profile</Button>
                        </CardText>
                    </Card>
                </Col>
            </Row>

        )
    }
}

export default User;