import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { categoriesFetchData, deleteCategory, editCategoryAction } from '../../actions/categoryActions';
import { Row, Col } from 'reactstrap';
import CategorySortByButton from './CategorySortByButton';
import CategoryModal from '../Category/Modals/categoryModal';

class Category extends React.Component{
    constructor() {
        super()
        this.deleteCategory = this.deleteCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData('http://ts.ausgrads.academy:8080/categories');
    }

    render(){
        return(
            <div>
                <Row>
                    <Col md="4" sm="4" xs="12">
                        <CategorySortByButton />
                    </Col>
                    <Col md="4" sm="4" xs="12">
                        <CategoryModal buttonLabel="Add Categories" title="Add Category" actionLabel="Done"/>
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
} 

const mapStateToProps = (state) => { 
    return{
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (url)=> dispatch(categoriesFetchData(url)),
        delete: (id) => dispatch(deleteCategory(id)),
        edit: (id, name, description) => dispatch(editCategoryAction(id, name, description))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);