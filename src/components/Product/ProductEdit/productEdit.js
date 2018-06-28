import React, {Component} from 'react'
import { productFetchDataByID,editProductAction } from '../../../actions/productActions';
import ProductEditForm from "./productEditForm";
import { categoriesFetchData } from '../../../actions/categoryActions';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

class ProductEdit extends Component{

    constructor(props) {
        super(props);

        this.page = 0;
        this.size = 20;
        this.sort = "id,desc";
        this.search = "";
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    returnToHome = () => {
        this.props.history.push("/");
    };

    handleSubmit = (data) => {
        const images = this.state.images;
        console.log(images)
        this.props.edit(data, images);
        this.returnToHome();
    };
    componentDidMount(){

        this.props.fetchData(this.props.match.params.id);
        this.props.categoryFetchData();

        // this.updateItems(this.props.product.images)
    }

    updateItems = (images) => {
        this.setState({images})
    }


   render(){

       const isLoading = (this.props.product === undefined) ?
           (
               <p>The product is loading...</p>
           ) : (
               <ProductEditForm  product={this.props.product} categories={this.props.categories}
                                 onSubmit={this.handleSubmit} callbackUpdate={this.updateItems.bind(this)}/>
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
        categoryFetchData: ()=> dispatch(categoriesFetchData()),
        edit: (payload, images) => dispatch(editProductAction(payload, images))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductEdit);
