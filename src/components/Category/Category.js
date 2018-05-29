import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { categoriesFetchData, deleteCategory } from '../../actions/categoryActions';

class Category extends React.Component{
    constructor() {
        super()
        this.deleteCategory = this.deleteCategory.bind(this);
    }
    
    componentDidMount(){
        this.props.fetchData('http://ts.ausgrads.academy:8080/categories');
    }

    render(){
        return(
            <div>
            {this.props.categories.length > 0 && <CategoryTable categories={this.props.categories} delete={this.deleteCategory} />}   
            
            </div>
    )}

    deleteCategory(cat) {
        console.log("parent deleting category");
        console.log(cat);
        this.props.delete(cat);
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
        delete: (id) => dispatch(deleteCategory(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);