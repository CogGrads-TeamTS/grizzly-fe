import React from 'react';
import { Button,Container, Row } from 'reactstrap';

class BlockButton extends React.Component {
    render() {
        return (

            <Container>
                <div>
                    <Row>
                        <Button color="secondary">Block</Button>
                    </Row>
                </div>
            </Container>


        );
    }
}

export default BlockButton;