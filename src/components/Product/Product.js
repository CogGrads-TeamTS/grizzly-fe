import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import ProductTable from './ProductTable';
// import CategorySortByButton from './CategorySortByButton';
import { productFetchData, deleteCategory, editCategoryAction, addCategoryAction } from '../../actions/ProductActions';
// import { categoriesFetchData, deleteCategory, editCategoryAction, addCategoryAction } from '../../actions/categoryActions';
// import CategoryAddModal from './Modals/CategoryAddModal';
// import Search from './CategorySearch';


class Product extends React.Component{
    constructor() {
        super();
        // this.deleteProduct = this.deleteProduct.bind(this);
        // this.editProduct = this.editProduct.bind(this);
        // this.addConfirm = this.addConfirm.bind(this);
        this.incrementPage = this.incrementPage.bind(this);

        // Change paginate values here
        this.page = 0;
        this.size = 20; 
        this.sort = "id,desc";
        this.search = "";
        this.hasMore = true;
        // this.updateSort = this.updateSort.bind(this);
        // this.updateSearch = this.updateSearch.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData(); // Initial fetch
        console.log("MOUNT FETCH")
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
        console.log("search");
        this.search = search;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    incrementPage() { // Note that the infinite scroller pre-loads the next page
        this.page += 1;
        this.fetchDataWithFilter();
        console.log("isLastOnProductIncrement: " + this.props.last);
    }

    render(){
        // waits for the user to stop typing before issuing the search request to the server.
        const searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);
        
        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">
                        {/* TODO: ADD SEARCH HERE */}
                        {/* <Search placeholder="Search by Product" updateSearch={searchDebounce} /> */}
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        {/* <CategorySortByButton update={this.updateSort}/> */}
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        {/* <CategoryAddModal buttonLabel="Add Category" title="Add Category" actionLabel="Done" confirm={this.addConfirm} /> */}
                    </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12" xs="12">
                    {console.log(this.props.products)}
                    {/* TODO: ADD TABLE HERE */}
                {<ProductTable products={this.props.products}
                    // delete={this.deleteCategory} 
                    // edit={this.editCategory} 
                    fetchNextPage={this.incrementPage}
                    last={this.props.last} />}
                    </Col>
                </Row>
            </div>
    )}
    // dispatches an action to delete the category using its id
    // this function is passed down to the table and its rows
    // deleteProduct(prod) {
    //     console.log("parent deleting product");
    //     console.log(prod);
    //     this.props.delete(cat.id);
    // }

    // editProduct(prod) {
    //     console.log("parent editing product");
    //     console.log(cat);
    //     this.props.edit(cat.id, cat.name, cat.description);
    // }

    // addConfirm(prod){
    //     this.props.add(cat.name, cat.description);
    // }

    fetchData(){
        this.props.fetchData()
    }
} 

const mapStateToProps = (state) => { 
    console.log(state.products.content)
    return{
        products: state.products.content,
        last: state.products.last
    };
};

const mapDispatchToProps = (dispatch) => { console.log(dispatch);
    return {
        fetchData: (search, page, size, sort)=> dispatch(productFetchData(search, page, size, sort)),
        // delete: (id) => dispatch(deleteCategory(id)),
        // edit: (id, name, description) => dispatch(editCategoryAction(id, name, description)),
        // add: (name, description) => dispatch(addCategoryAction(name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);