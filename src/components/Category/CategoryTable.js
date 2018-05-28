import React from 'react';
import CategoryRows from './CategoryRows';
import { Table,Container, Row, Col } from 'reactstrap';

const CategoryTable = ({categories}) => {
        return (
            <Container>
                <Row>
                    <Col md={{ size: 9, offset: 3 }} sm="12">
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

                                {categories.map(guess =>

                                <CategoryRows key={guess.id} category={guess} />,

                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        )
};

export default CategoryTable;