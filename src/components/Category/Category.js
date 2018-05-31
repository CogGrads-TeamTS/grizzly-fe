import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { Row, Col } from 'reactstrap';
import CategorySortByButton from './CategorySortByButton';
import { categoriesFetchData, deleteCategory, editCategoryAction, addCategoryAction } from '../../actions/categoryActions';
import CategoryAddModal from './Modals/CategoryAddModal';
import { Search } from '../common/search';


class Category extends React.Component{
    constructor() {
        super()
        this.deleteCategory = this.deleteCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
        this.addConfirm = this.addConfirm.bind(this);

        // Change paginate values here
        this.page = 0;
        this.size = 20; 
        this.sort = "";

        this.updateSort = this.updateSort.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData(null);
    }

    fetchDataWithFilter() {
        this.props.fetchData(this.page, this.size, this.sort)
    }

    updateSort(sort) {
        this.sort = sort;
        this.fetchDataWithFilter();
    }

    incrementPage() {
        this.page += 1;
    }

    render(){
        return(
            <div>
                <Row>
                    <Col md="6" sm="6" xs="12">
                        <Search placeholder="Search by Category" />
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <CategorySortByButton update={this.updateSort}/>
                    </Col>
                    <Col md="3" sm="3" xs="12">
                        <CategoryAddModal buttonLabel="Add Category" title="Add Category" actionLabel="Done" confirm={this.addConfirm} />
                    </Col>
                </Row>
                {<CategoryTable categories={this.props.categories} delete={this.deleteCategory} edit={this.editCategory}/>}   
            </div>
    )}
    // dispatches an action to delete the category using its id
    // this function is passed down to the table and its rows
    deleteCategory(cat) {
        console.log("parent deleting category");
        console.log(cat);
        this.props.delete(cat.id);
    }

    editCategory(cat) {
        console.log("parent editing category");
        console.log(cat);
        this.props.edit(cat.id, cat.name, cat.description);
    }

    addConfirm(cat){
        this.props.add(cat.name, cat.description);
    }
} 

const mapStateToProps = (state) => { 
    return{
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (page, size, sort)=> dispatch(categoriesFetchData(page, size, sort)),
        delete: (id) => dispatch(deleteCategory(id)),
        edit: (id, name, description) => dispatch(editCategoryAction(id, name, description)),
        add: (name, description) => dispatch(addCategoryAction(name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);