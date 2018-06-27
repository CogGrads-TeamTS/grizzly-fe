import React, {Component} from 'react'
import { connect } from 'react-redux';
import { productFetchDataByID, productFetchImagesByID } from '../../../actions/productActions';
import ProductViewLayout from './ProductViewLayout';

class ProductView extends Component {

    componentDidMount(){
        this.props.fetchData(this.props.match.params.id);
        this.props.fetchImages(this.props.match.params.id);
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.id !== prevProps.match.params.id){
            this.props.fetchData(this.props.match.params.id);
            this.props.fetchImages(this.props.match.params.id);
        }
    }

    render() { 
        const isLoading = (this.props.product === undefined) ?
            (  
                <p>The product is loading...</p>
            ) : (
                <ProductViewLayout product={this.props.product} images={this.props.images}/>
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
        images: state.products.images,
    };
};

const mapDispatchToProps = (dispatch) => { console.log(dispatch);
    return {
        fetchData: (id)=> dispatch(productFetchDataByID(id)),
        fetchImages: (id) => dispatch(productFetchImagesByID(id)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(ProductView);