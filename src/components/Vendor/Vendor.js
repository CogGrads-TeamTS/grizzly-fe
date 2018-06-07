import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'reactstrap';
import VendorTable from './VendorTable';
import {vendorsFetchData,addVendorAction} from "../../actions/vendorActions";
import VendorAddModal from './Modals/VendorAddModal'

class Vendor extends React.Component{
    constructor()
    {
        super();
        this.addConfirm = this.addConfirm.bind(this);
    }
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        console.log("vendor component")
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
                        { <VendorTable vendors={this.props.vendors} />}
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
}



const mapStateToProps = (state) => {
    return{
        vendors: state.vendor.vendors,
       // last: state.vendor.last
    };
};

const mapDispatchToProps = (dispatch) => { //console.log(dispatch);
    return {
        // fetchData: (search, page, size, sort)=> dispatch(vendorsFetchData(search, page, size, sort))
       fetchData: ()=>dispatch(vendorsFetchData()),
       add: (name, about, email, webpage, contact, address, portfolioURL) =>dispatch(addVendorAction(name, about, email, webpage, contact, address, portfolioURL))

    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);