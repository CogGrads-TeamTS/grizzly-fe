import React from 'react';
import { Button,Container, Row} from 'reactstrap';

class EditButton extends React.Component {
    render() {
        return (

            <Container>
                <div>
                    <Row>

                            <Button color="info">Edit</Button>

                    </Row>
                </div>
            </Container>


        );
    }
}

export default EditButton;