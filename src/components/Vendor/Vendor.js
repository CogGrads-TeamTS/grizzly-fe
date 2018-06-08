import React from 'react';
import {connect} from 'react-redux';
import VendorTable from './VendorTable';
import {vendorsFetchData, editVendorAction} from "../../actions/vendorActions";

class Vendor extends React.Component{
    constructor() {
        super();

        this.editVendor = this.editVendor.bind(this);
    }
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return(
            <div>
                { <VendorTable vendors={this.props.vendors} edit={this.editVendor}/>}
            </div>
        )};
    fetchData(){
        this.props.fetchData();
    }

    editVendor(ven) {
        this.props.edit(ven);
    }
}

const mapStateToProps = (state) => { 
    return{
        vendors: state.vendor.content,
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
       fetchData: ()=>dispatch(vendorsFetchData()),
       edit: (payload) => dispatch(editVendorAction(payload))
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);