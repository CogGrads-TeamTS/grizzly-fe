import React, { Component } from 'react'
import { Container, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
class Sidebar extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Card className="profile-card">
                        <CardTitle>
                            <div className="profile-header">
                                <p>PROFILE</p>
                            </div>
                        </CardTitle>
                            <div className="profile-image">
                                <img src="http://i.imgur.com/Esvthp8.gif" width="100%" height="100%"/>
                            </div>
                            <div className="profile-head name">Temp Name</div>
                            <div className="profile-head head">ID</div>
                            <div className="profile-head id">Temporary ID</div>
                            <div className="profile-head head">Designation</div>
                            <div className="profile-head designation">Temporary Designation</div>
                            <div className="profile-head head">Office</div>
                            <div className="profile-head office">Temporary Office</div>
                        <CardText>
                        
                        </CardText>
                    </Card>
                </Col>
            </Row>
        );
    }
}

export default Sidebar;
