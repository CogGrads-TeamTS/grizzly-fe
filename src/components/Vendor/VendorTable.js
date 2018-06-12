import React from 'react';
import VendorRows from './VendorRows';
import { Table,Container, Row, Col } from 'reactstrap';
import ConfirmVendorDeleteModal from './Modals/VendorConfirmDeleteModal';
import _ from 'lodash';
import VendorEditModal from './Modals/VendorEditModal';
import InfiniteScroll from 'react-infinite-scroller';

class VendorTable extends React.Component{

    constructor() {
        super();
        this.deleteVendorClicked = this.deleteVendorClicked.bind(this);
    }
    render() {
        const divStyle = {
            marginLeft: '50%',
        };

        console.log(this.props.last);

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
        const tableIsEmpty = _.isEmpty(this.props.vendors) ?
            (  
                <tr>
                    <td colSpan={6}>There are no vendors to display.</td>
                </tr>
            ) : (
                _.map(this.props.vendors, vend => {
                    return (
                        <VendorRows key={vend.id} vendor={vend} delete={this.deleteClicked} edit={this.editClicked} />   
                    )
                })
            );
      // const loader = <div className="loader" key="loader" style={divStyle}><img src="http://alt.ausgrads.academy/static/media/loading.ba28264b.svg" width="25%"/></div>;
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
                                        <th scope={"col"}>Id</th>
                                        <th scope={"col"}>Vendor Name</th>
                                        <th scope={"col"}>Email</th>
                                        <th scope={"col"}>Contact</th>
                                        <th scope={"col"}></th>
                                        <th scope={"col"}></th>
                                        <th scope={"col"}></th>
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
                    <ConfirmVendorDeleteModal ref = 'deleteVendorModal' confirm = {this.deleteVendorConfirmed}/>
                    <VendorEditModal ref="editModal" confirm={this.editConfirmed}/>
            </Container>
        )
    }
deleteVendorClicked = (vend) =>
{
    console.log("delete vendor clicked");
    console.log(vend);
    this.refs.deleteVendorModal.openModal(vend);
}

deleteVendorConfirmed = (vend) =>
{console.log(vend);
    this.props.delete(vend);
}

editConfirmed = (ven) => {
    console.log("Edit confirmed: ");
    this.props.edit(ven);
}
editClicked = (ven) => {
    this.refs.editModal.openModal(ven);
}

}
export default VendorTable;