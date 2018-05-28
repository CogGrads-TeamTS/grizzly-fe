import React from 'react';
import { Button,Container, Row } from 'reactstrap';

class RemoveButton extends React.Component {
    render() {
        return (
            <Container>
                    <Row>
                        <Button color="danger">Remove</Button>
                    </Row>
            </Container>
        );
    }
}

export default RemoveButton;