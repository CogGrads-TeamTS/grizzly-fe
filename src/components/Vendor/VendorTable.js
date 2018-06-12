import React from 'react';
import VendorRows from './VendorRows';
import { Table,Container, Row, Col } from 'reactstrap';
import ConfirmVendorDeleteModal from './Modals/VendorConfirmDeleteModal';
import _ from 'lodash';
import VendorEditModal from './Modals/VendorEditModal';

class VendorTable extends React.Component{

    constructor() {
        super();
        this.deleteVendorClicked = this.deleteVendorClicked.bind(this);
    }
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

                                    {   _.map(this.props.vendors, vend => {

                                            return (<VendorRows key = {vend.id} vendor={vend} delete={this.deleteVendorClicked} edit={this.editClicked}/>)}
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>
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