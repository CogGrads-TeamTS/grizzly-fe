import React from 'react';
import CategoryRows from './CategoryRows';
import { Table,Container, Row, Col } from 'reactstrap';
import ConfirmDeleteModal from './Modals/CategoryConfirmDeleteModal';
import EditModal from './Modals/CategoryEditModal';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

class CategoryTable extends React.Component {
    
      
    render() {
        const divStyle = {
            marginLeft: '50%',
          };
        const loader = <div className="loader" key="loader" style={divStyle}><img src="http://alt.ausgrads.academy/static/media/loading.ba28264b.svg" width="25%"/></div>;
        return (
            <Container>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.fetchNextPage}
                    hasMore={true} //fix this later
                    loader={loader}>

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
                                    {  
                                        _.map(this.props.categories, cat => {
                                        return (<CategoryRows key={cat.id} category={cat} delete={this.deleteClicked} edit={this.editClicked} />)}
                                    )}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </InfiniteScroll>
                <ConfirmDeleteModal ref="deleteModal" confirm={this.deleteConfirmed} />
                <EditModal ref="editModal" confirm={this.editConfirmed}/>
                
            </Container>
        )
    }

    deleteConfirmed = (cat) => {
        console.log("delete confirmed: " + cat.id);
        this.props.delete(cat);
    }

    editConfirmed = (cat) => {
        console.log("Edit confirmed: " + cat.id);
        this.props.edit(cat);
    }

    deleteClicked = (cat) => {
        this.refs.deleteModal.openModal(cat);
    };

    editClicked = (cat) => {
        this.refs.editModal.openModal(cat);
    }
}

export default CategoryTable;