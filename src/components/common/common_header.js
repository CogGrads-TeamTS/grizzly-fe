import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
class Header extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col md={{ size: 6, offset: 3 }} sm="12">
                        <h1>Hello I am the header</h1>
                        </Col>
                    </Row>
                </Container>
            </div> );
    }
}

export default Header;