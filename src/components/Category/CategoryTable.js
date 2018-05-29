import React from 'react';
import CategoryRows from './CategoryRows';
import { Table,Container, Row, Col } from 'reactstrap';
import ConfirmDeleteModal from './Modals/CategoryConfirmDeleteModal';

class CategoryTable extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md="12" sm="12">
                        <Table>
                            <thead>
                            <tr>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Products</th>
                                <th></th>
                                <th></th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.props.categories.map(cat =>
                                    <CategoryRows key={cat.id} category={cat} delete={this.deleteClicked} />
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                
                </Row>
                <ConfirmDeleteModal ref="deleteModal" actionLabel="Done" confirm={this.deleteConfirmed} />
            </Container>
        )
    }

    deleteConfirmed = (cat) => {
        console.log("delete confirmed: " + cat.id);
        this.props.delete(cat);
    }

    deleteClicked = (cat) => {
        this.refs.deleteModal.openModal(cat);
    };
}

export default CategoryTable;