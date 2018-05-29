import React from 'react';
import { connect } from 'react-redux';
import CategoryTable from './CategoryTable';
import { categoriesFetchData } from '../../actions/categoryActions';

class Category extends React.Component{
    
    componentDidMount(){
        this.props.fetchData('http://ts.ausgrads.academy:8080/categories');
    }

    render(){
        return(
            <div>
            {this.props.categories.length > 0 && <CategoryTable categories={this.props.categories} />}   
            
            </div>
        )}
} 

const mapStateToProps = (state) => { 
    return{
        categories: state.category
    };
};

const mapDispatchToProps = (dispatch) => { 
    return {
        fetchData: (url)=> dispatch(categoriesFetchData(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);