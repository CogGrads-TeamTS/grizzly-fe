import React from 'react';
import VendorRows from './VendorRows';
import { Table,Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';
import VendorEditModal from './Modals/VendorEditModal';
import EditModal from './../Category/Modals/CategoryEditModal';

class VendorTable extends React.Component{
    render() {
        const divStyle = {
            marginLeft: '50%',
        };
      // const loader = <div className="loader" key="loader" style={divStyle}><img src="http://alt.ausgrads.academy/static/media/loading.ba28264b.svg" width="25%"/></div>;
        return (
            <Container>

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

                                    {   _.map(this.props.vendors, ven => {
                                          
                                            return (<VendorRows key={ven.id} vendor={ven} edit={this.editClicked}/>)}
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
                    <VendorEditModal ref="editModal" confirm={this.editConfirmed}/>
            </Container>
        )
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