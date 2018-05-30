import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { categoriesFetchData, deleteCategory, editCategoryAction } from '../../actions/categoryActions';

class Category extends React.Component{
    constructor() {
        super()
        this.deleteCategory = this.deleteCategory.bind(this);
        this.editCategory = this.editCategory.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData();
    }

    render(){
        return(
            <div>
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