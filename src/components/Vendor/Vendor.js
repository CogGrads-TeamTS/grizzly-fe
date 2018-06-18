import React from 'react';
import {connect} from 'react-redux';
import { Row, Col } from 'reactstrap';
import VendorTable from './VendorTable';
import {vendorsFetchData,addVendorAction,deleteVendorAction,editVendorAction} from "../../actions/vendorActions";
import VendorAddModal from './Modals/VendorAddModal'
import VendorSortByButton from './VendorSortByButton';
import VendorSearch from './VendorSearch';

import _ from 'lodash';

class Vendor extends React.Component{
    constructor()
    {
        super();

        this.deleteVendors = this.deleteVendors.bind(this);
        this.editVendor = this.editVendor.bind(this);
        this.addConfirm = this.addConfirm.bind(this);
        this.incrementPage = this.incrementPage.bind(this);

        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        this.search = "";
        this.hasMore = true;
        this.updateSort = this.updateSort.bind(this);
    }
    componentDidMount(){
        this.props.fetchData();
    }

    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
        console.log('fetch data with filter page: ' + this.search);
    }

    updateSort(sort) {
        this.sort = sort;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    updateSearch(search) {
        this.search = search;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    incrementPage() { // Note that the infinite scroller pre-loads the next page
        this.page += 1;
        this.fetchDataWithFilter();
    }

    render(){
        // waits for the user to stop typing before issuing the search request to the server.
        const searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);
        
        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">
                        <VendorSearch placeholder="Search by Vendor" updateSearch={searchDebounce} />
                    </Col>
                    <Col md="3" sm="3" xs="12">
                    <VendorSortByButton update={this.updateSort} />
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <VendorAddModal buttonLabel="Add Vendor" title="Add Vendor" confirm={this.addConfirm} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12">
                        { <VendorTable 
                        vendors={this.props.vendors} 
                        delete={this.deleteVendors}
                        edit={this.editVendor} 
                        fetchNextPage={this.incrementPage} 
                        last={this.props.last} />}
                    </Col>
                </Row>
            </div>
        )};

    
    deleteVendors(vend)
    {
        console.log("parent deleting category");
        console.log(vend);
        this.props.delete(vend.id);
    }

    editVendor(ven) { console.log(ven);
        this.props.edit(ven);
    }

    addConfirm(vend){
        this.props.add(vend.name, vend.about,vend.email,vend.webpage,vend.contact,vend.address,vend.portfolioURL);
    }

    fetchData(){
        this.props.fetchData();
    }

}



const mapStateToProps = (state) => {
    return{
        vendors: state.vendor.content,
        last: state.vendor.vendorLast
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (search, page, size, sort)=>dispatch(vendorsFetchData(search, page, size, sort)),
        add: (name, about, email, webpage, contact, address, portfolioURL) =>dispatch(addVendorAction(name, about, email, webpage, contact, address, portfolioURL)),
        delete: (id) => dispatch(deleteVendorAction(id)),
        edit: (payload) => dispatch(editVendorAction(payload))
    }
};

export default connect(mapStateToProps,mapDispatchToProps) (Vendor);