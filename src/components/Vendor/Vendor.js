import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'reactstrap';
import VendorTable from './VendorTable';
import {vendorsFetchData,addVendorAction,deleteVendorAction,editVendorAction} from "../../actions/vendorActions";
import VendorAddModal from './Modals/VendorAddModal'

class Vendor extends React.Component{
    constructor()
    {
        super();

        this.editVendor = this.editVendor.bind(this);
        this.addConfirm = this.addConfirm.bind(this);
        this.deleteVendors = this.deleteVendors.bind(this);
    }
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        console.log("vendor component");
        console.log(this.props.vendors);
        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">

                    </Col>
                    <Col md="3" sm="3" xs="12">

                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <VendorAddModal buttonLabel="Add Vendor" title="Add Vendor" confirm={this.addConfirm} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        { <VendorTable vendors={this.props.vendors} edit={this.editVendor} delete={this.deleteVendors} />}
                    </Col>
                </Row>
            </div>
        )};

    fetchData(){
        this.props.fetchData();
    }

    addConfirm(vend){
        this.props.add(vend.name, vend.about,vend.email,vend.webpage,vend.contact,vend.address,vend.portfolioURL);
    }

    deleteVendors(vend)
    {
        console.log("parent deleting category");
        console.log(vend);
        this.props.delete(vend.id);
    }

    editVendor(ven) { console.log(ven);
        this.props.edit(ven);
    }

}



const mapStateToProps = (state) => { 
    return{
        vendors: state.vendor.content,
       // last: state.vendor.last
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        // fetchData: (search, page, size, sort)=> dispatch(vendorsFetchData(search, page, size, sort))
       fetchData: ()=>dispatch(vendorsFetchData()),
       add: (name, about, email, webpage, contact, address, portfolioURL) =>dispatch(addVendorAction(name, about, email, webpage, contact, address, portfolioURL)),
        delete: (id) => dispatch(deleteVendorAction(id)),
       edit: (payload) => dispatch(editVendorAction(payload))
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);