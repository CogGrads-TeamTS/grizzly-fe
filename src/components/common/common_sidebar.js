import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class Sidebar extends Component {
    render() {
        return (

        <Container>
            <div>
            <Row>
                <Col>
                    <h1>Hello I am the sidebar component</h1>
                </Col>
            </Row>
            </div>
        </Container>


        );
    }
}

export default Sidebar;