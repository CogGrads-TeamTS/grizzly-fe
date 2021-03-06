import React from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';
import _ from 'lodash';
import ProductTable from './ProductTable';
import { productFetchData, deleteProductAction } from '../../actions/productActions';
import ProductFilterByCategory from './ProductFilterByCategory';
import ProductAddButton from './ProductAddButton';
import Search from './ProductSearch';
import ProductSortByButton from './ProductSortByButton';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Product extends React.Component{
    constructor() {
        super();

        // this.editProduct = this.editProduct.bind(this);
        // this.addConfirm = this.addConfirm.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.incrementPage = this.incrementPage.bind(this);
        this.updateCategoryFilter = this.updateCategoryFilter.bind(this);
        this.updateSort = this.updateSort.bind(this);

        // Change paginate values here
        this.page = 0;
        this.size = 20; 
        this.sort = "id,desc";
        this.search = "";
        this.hasMore = true;
        this.catId = "";
        // this.updateSort = this.updateSort.bind(this);
         this.updateSearch = this.updateSearch.bind(this);
         this.notify = this.notify.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData(); // Initial fetch
        //console.log("MOUNT FETCH")
    }
    notify = (e) => {
        switch (e) {
            case "success":
                toast.success('Delete Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                break;

            case "error":
                toast.error('Product Failed to Delete', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
                    break;

            default:
                break;
        }

    }

    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort, this.catId)
        //console.log(this.catId);
        //console.log('fetch data with filter page: ' + this.search);
                
    }

    updateCategoryFilter(catId) {
        this.catId = catId;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    updateSort(sort) {
        this.sort = sort;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    updateSearch(search) {
       // console.log("search");
        this.search = search;
        this.page = 0;
        this.fetchDataWithFilter();
    }

    incrementPage() { // Note that the infinite scroller pre-loads the next page
        this.page += 1;
        this.fetchDataWithFilter();
        //console.log("isLastOnProductIncrement: " + this.props.last);
    }
    addConfirm = (e) => {
        console.log("HELLO");
    }

    render(){
        // waits for the user to stop typing before issuing the search request to the server.
        const searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);

        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">
                        <Search placeholder="Search by Product" updateSearch={searchDebounce} />
                    </Col>
                    <Col md="2" sm="2" xs="12">
                        <ProductFilterByCategory update={this.updateCategoryFilter} />
                    </Col>
                    <Col md="2" sm="2" xs="12">
                        <ProductSortByButton update={this.updateSort} />
                    </Col>
                    <Col md="2" sm="2" xs="12">
                        <ProductAddButton buttonLabel="Add Product" title="Add Product" actionLabel="Done" confirm={this.addConfirm} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12" xs="12">
                    {/*console.log(this.props.products) */}
                    {/* TODO: ADD TABLE HERE */}
                {<ProductTable products={this.props.products}
                    delete={this.deleteProduct} 
                    // edit={this.editCategory} 
                    fetchNextPage={this.incrementPage}
                    last={this.props.last} />}
                    </Col>
                </Row>
            </div>
    )}

    deleteProduct(prod) {
         //console.log("parent deleting product");
         console.log(prod);
         this.props.delete({
             id: prod.id,
             callback: this.notify
         });
        //  this.notify();
    }

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
    return{
        products: state.products.content,
        last: state.products.last
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort, catId)=> dispatch(productFetchData(search, page, size, sort, catId)),
        delete: (id,callback) => dispatch(deleteProductAction(id,callback))
        // edit: (id, name, description) => dispatch(editCategoryAction(id, name, description)),
        // add: (name, description) => dispatch(addCategoryAction(name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);