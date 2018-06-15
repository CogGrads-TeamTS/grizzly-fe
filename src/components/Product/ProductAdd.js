import React, {Component} from 'react'
import { productFetchDataByID, deleteCategory, editCategoryAction, addCategoryAction, addProductAction } from '../../actions/ProductActions';
import ProductAddForm from './ProductAddForm';
import { connect } from 'react-redux';
import { categoriesFetchData } from '../../actions/categoryActions';


class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.page = 0;
        this.size = 20; 
        this.sort = "id,desc";
        this.search = "";

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        this.props.fetchData(); // Initial fetch
    }
    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
        console.log('fetch data with filter page: ' + this.search);
    }

    handleSubmit = (e) => {
        console.log('TESTESTTESTESTSET');
        console.log(e);
        this.props.add({
            name:e.name,
            description: e.description,
            category: e.category,
            price: e.price,
            img: e.img
        });
    }

    render() {
        return (
            <div>
                <ProductAddForm onSubmit={this.handleSubmit} categories={this.props.categories}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        categories: state.category.content,
        last: state.category.last
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort)=> dispatch(categoriesFetchData(search, page, size, sort)),
        add: (name, description, category, price, img) => dispatch(addProductAction(name, description, category, price, img))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);