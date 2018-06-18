import React, {Component} from 'react'
import { connect } from 'react-redux';
import { productFetchDataByID } from '../../../actions/productActions';
import ProductViewLayout from './ProductViewLayout';

class ProductView extends Component {

    componentDidMount(){
        this.props.fetchData(this.props.match.params.id);
    }

    

    render() { 
        const isLoading = (this.props.product === undefined) ?
            (  
                <p>The product is loading...</p>
            ) : (
                <ProductViewLayout product={this.props.product}/>
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
        product: state.products.selected,
    };
};

const mapDispatchToProps = (dispatch) => { console.log(dispatch);
    return {
        fetchData: (id)=> dispatch(productFetchDataByID(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductView);