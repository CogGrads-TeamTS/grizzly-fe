import React from 'react';
import {connect} from 'react-redux';
import VendorTable from './VendorTable';
import {vendorsFetchData} from "../../actions/vendorActions";

class Vendor extends React.Component{
    constructor()
    {
        super();
    }
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        console.log("vendor component")
        console.log(this.props.vendors);
        return(
            <div>
                { <VendorTable vendors={this.props.vendors} />}
            </div>
        )};
    fetchData(){
        this.props.fetchData();
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
       fetchData: ()=>dispatch(vendorsFetchData())
        // fetchData: (search, page, size, sort)=> dispatch(vendorsFetchData(search, page, size, sort))
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);