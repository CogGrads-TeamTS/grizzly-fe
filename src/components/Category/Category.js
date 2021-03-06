import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { Row, Col } from 'reactstrap';
import CategorySortByButton from './CategorySortByButton';
import { categoriesFetchData, deleteCategory, editCategoryAction, addCategoryAction } from '../../actions/categoryActions';
import CategoryAddModal from './Modals/CategoryAddModal';
import Search from './CategorySearch';
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import _ from 'lodash';


class Category extends React.Component{
    constructor() {
        super();
        this.deleteCategory = this.deleteCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.addConfirm = this.addConfirm.bind(this);
        this.incrementPage = this.incrementPage.bind(this);

        // Change paginate values here
        this.page = 0;
        this.size = 20; 
        this.sort = "id,desc";
        this.search = "";
        this.hasMore = true;
        this.updateSort = this.updateSort.bind(this);
        this.updateSearch = this.updateSearch.bind(this);
        this.notify = this.notify.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData(); // Initial fetch
    }

    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
        console.log('fetch data with filter page: ' + this.search);
    }

    notify = () => {
        toast.success('Delete Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });
        
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
    }

    render(){
        // waits for the user to stop typing before issuing the search request to the server.
        const searchDebounce = _.debounce((search) => { this.updateSearch(search) }, 300);
        
        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">
                        <Search placeholder="Search by Category" updateSearch={searchDebounce} />
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <CategorySortByButton update={this.updateSort}/>
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <CategoryAddModal buttonLabel="Add Category" title="Add Category" actionLabel="Done" confirm={this.addConfirm} />
                    </Col>
                </Row>
                <Row>
                    <Col md="12" sm="12" xs="12">
                {<CategoryTable categories={this.props.categories}
                    delete={this.deleteCategory} 
                    edit={this.editCategory} 
                    fetchNextPage={this.incrementPage}
                    last={this.props.last} />}
                    </Col>
                </Row>
            </div>
    )}
    // dispatches an action to delete the category using its id
    // this function is passed down to the table and its rows
    deleteCategory(cat) {
        console.log("parent deleting category");
        console.log(cat);
        this.props.delete(cat.id);
        this.notify();
    }

    editCategory(cat) {
        console.log("parent editing category");
        console.log(cat);
        this.props.edit(cat.id, cat.name, cat.description);
    }

    addConfirm(cat){
        this.props.add(cat.name, cat.description);
    }

    fetchData(){
        this.props.fetchData()
    }
} 

const mapStateToProps = (state) => {
    return{
        categories: state.category.content,
        last: state.category.last
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort)=> dispatch(categoriesFetchData(search, page, size, sort)),
        delete: (id) => dispatch(deleteCategory(id)),
        edit: (id, name, description) => dispatch(editCategoryAction(id, name, description)),
        add: (name, description) => dispatch(addCategoryAction(name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);