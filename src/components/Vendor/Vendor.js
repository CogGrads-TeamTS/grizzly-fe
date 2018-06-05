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
        this.props.fetchData(null);
    }

    render(){
        return(
            <div>
            {<VendorTable vendors = {this.props.vendors}/>}
            </div>
        )};
    fetchData(){
        this.props.fetchData();
    }
}


const mapStateToProps = (state) => {
    return{
        vendors: state.vendor.content,
        last: state.vendor.last
    };
};

const mapDispatchToProps = (dispatch) => { console.log(dispatch);
    return {
        fetchData: (search, page, size, sort)=> dispatch(vendorsFetchData(search, page, size, sort)),
    };
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);