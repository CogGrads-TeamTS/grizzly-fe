import React from 'react';
import CategoryRows from './CategoryRows';
import { Table,Container, Row, Col } from 'reactstrap';
import ConfirmDeleteModal from './Modals/CategoryConfirmDeleteModal';
import EditModal from './Modals/CategoryEditModal';

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
                                    <CategoryRows key={cat.id} category={cat} delete={this.deleteClicked} edit={this.editClicked} />
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                <Row>
                
                </Row>
                <ConfirmDeleteModal ref="deleteModal" confirm={this.deleteConfirmed} />
                <EditModal ref="editModal" />
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

    editClicked = (cat) => {
        this.refs.editModal.openModal(cat);
    }
}

export default CategoryTable;