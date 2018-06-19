import React, {Component} from 'react'
import { productFetchDataByID,editProductAction } from '../../../actions/productActions';
import ProductEditForm from "./productEditForm";
import { categoriesFetchData } from '../../../actions/categoryActions';
import {connect} from "react-redux";

class ProductEdit extends Component{

    constructor(props) {
        super(props);

        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        this.search = "";
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (data) => {
        console.log('TESTESTTESTESTSET');
        console.log(data);
        this.props.edit(data,this.props.match.params.id);

    };
    componentDidMount(){

        this.props.fetchData(this.props.match.params.id);
        this.props.categoryFetchData();
    }


   render(){

       const isLoading = (this.props.product === undefined) ?
           (
               <p>The product is loading...</p>
           ) : (
               <ProductEditForm  product={this.props.product} categories={this.props.categories}
                                 onSubmit={this.handleSubmit.bind(this)} />
           );

       return (
           <div>
               {isLoading}
           </div>

       )
   }
}



const mapStateToProps = (state) => {
    return{
        categories: state.category.content,
        last: state.category.last,
        product: state.products.selected
    };
};

const mapDispatchToProps = (dispatch) => { console.log();
    return {
        fetchData: (id)=> dispatch(productFetchDataByID(id)),
        categoryFetchData: (search, page, size, sort)=> dispatch(categoriesFetchData(search, page, size, sort)),
        edit: (payload,id) => dispatch(editProductAction(payload,id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
