import React from 'react';
import { Table,Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import ProductRows from './ProductRows';
import ConfirmDeleteModal from './Modals/ProductConfirmDeleteModal';

class ProductTable extends React.Component {
    
      
    render() {
        const divStyle = {
            marginLeft: '50%',
          };
        const loader = 
        <div className="loader" key="loader" style={divStyle}>
            <div className="flip-preloader example-3">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>;
        
        // This method is used to determine what rows to load in table based on categories length using a ternary operator
        const tableIsEmpty = _.isEmpty(this.props.products) ?
            (  
                <tr>
                    <td colSpan={6}>There are no products to display.</td>
                </tr>
            ) : (
                _.map(this.props.products, prod => {
                    return (
                        <ProductRows key={prod.id} products={prod} delete={this.deleteClicked} edit={this.editClicked} />
                    )
                })
            );

        return (
            <Container>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.props.fetchNextPage}
                    hasMore={!this.props.last} 
                    loader={loader}>
                    <Row>
                        <Col md="12" sm="12">
                            <div className={"table-responsive"}>
                            <Table className={"table table-hover"}>
                                <thead>
                                <tr>
                                    <th scope={"col"}>ID</th>
                                    <th scope={"col"}>Product</th>
                                    <th scope={"col"}>Brand</th>
                                    <th scope={"col"}>Categories</th>
                                    <th scope={"col"}>Rating</th>
                                    <th colSpan={3}></th>
                                </tr>
                                </thead>
                                <tbody> 
                                    {tableIsEmpty}
                                </tbody>

                            </Table>
                            </div>
                        </Col>
                    </Row>
                </InfiniteScroll>
                {/* TODO: ADD MODALS HERE */}
                <ConfirmDeleteModal ref="deleteModal" confirm={this.deleteConfirmed} />
                {/* <EditModal ref="editModal" confirm={this.editConfirmed}/> */}
            </Container>
                

        )
    }

    deleteConfirmed = (prod) => {
        console.log("delete confirmed: " + prod.id);
        this.props.delete(prod);
    }

    editConfirmed = (prod) => {
        console.log("Edit confirmed: " + prod.id);
        // this.props.edit(cat);
    }

    deleteClicked = (prod) => {
        this.refs.deleteModal.openModal(prod);
    };

    editClicked = (prod) => {
        // this.refs.editModal.openModal(prod);
    }
}

export default ProductTable;