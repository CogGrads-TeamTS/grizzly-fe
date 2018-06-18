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
        this.editConfirm=this.editConfirm.bind(this);

    }
    componentDidMount(){

        this.props.fetchData(this.props.match.params.id);
        this.props.categoryFetchData();
    }
    fetchDataWithFilter() {
        this.props.categoryFetchData(this.search, this.page, this.size, this.sort)
    }

   render(){

       const isLoading = (this.props.product === undefined) ?
           (
               <p>The product is loading...</p>
           ) : (
               <ProductEditForm  product={this.props.product} categories={this.props.categories} confirm={this.editConfirm} />
           );

       return (
           <div>
               {isLoading}
           </div>

       )
   }
   editConfirm(prod) {
      console.log('test');
      this.props.edit(prod);
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
        edit: (payload) => dispatch(editProductAction(payload))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
