import React, {Component} from 'react'
import { productFetchDataByID, deleteCategory, editCategoryAction, addProductImages, addProductAction } from '../../actions/ProductActions';
import ProductAddForm from './ProductAddForm';
import { connect } from 'react-redux';
import { categoriesFetchNames } from '../../actions/categoryActions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.page = 0;
        this.size = 20; 
        this.sort = "id,desc";
        this.search = "";

        this.handleSubmit = this.handleSubmit.bind(this);
        this.notify = this.notify.bind(this);

        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);
    }

    onDrop(picture) {
        console.log(picture);
        
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });

        //postImageData(this.state.pictures.)
        // console.log(this.state.pictures[0]);
        this.props.addImage(2, picture, 1);
    }

    notify = () => {
        toast("Success!");
// toast.success('🦄 Wow so easy!', {
//             position: "top-right"
//             autoClose: 5000
//             hideProgressBar: false
//             closeOnClick: true
//             pauseOnHover: true
//             draggable: true
//             });
        
    }

    componentDidMount(){
        console.log("Did mount")
        this.props.fetchData(this.search, this.page, this.size, this.sort)
    }
    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
        console.log('fetch data with filter page: ' + this.search);
    }

    returnToHome = () => {
        this.props.history.push("/");
    }

    handleSubmit = (e) => {
        console.log('TESTESTTESTESTSET');
        console.log(e);
        this.props.add({
            name:e.name,
            description: e.description,
            brand: e.brand,
            catId: e.category,
            price: e.price,
            discount: e.discount,
            rating: e.rating
        });
        
        this.returnToHome();

    }

    render() {
        return (
            <div>
                
                <ProductAddForm onSubmit={this.handleSubmit} categories={this.props.names} returnToHome={this.returnToHome} onDrop={this.onDrop}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        names: state.category.names,
        last: state.category.last
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: ()=> dispatch(categoriesFetchNames()),
        addImage: (id, file, sort) => dispatch(addProductImages(id, file, sort)),
        add: (name, description, brand, catId, price, discount, rating) => dispatch(addProductAction(name, description, brand, catId, price, discount, rating))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);