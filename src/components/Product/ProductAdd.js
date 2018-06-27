import React, {Component} from 'react'
import { productFetchDataByID, deleteCategory, editCategoryAction, addProductImages, addProductAction } from '../../actions/productActions';
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
        // this.notify = this.notify.bind(this);

        this.state = { pictures: [] };
        this.onDrop = this.onDrop.bind(this);

        const Msg = ({ closeToast }) => (
            <div>
              Lorem ipsum dolor
              <button>Retry</button>
              <button onClick={closeToast}>Close</button>
            </div>
          )
    }

    /**
     * 
     * @param {*} picture File object
     * 
     * If the picture array (of Files) is larger than 5 notify the user 
     * to remove the last image on the picture array
     */
    onDrop(picture) {
        if(picture.length <= 5){
            this.setState({
                pictures: picture
            });
        }
        else {
            console.log(picture[picture.length-1])
            this.notify('error', picture[picture.length-1]);
        }
    }
    
    notify = (e, picture) => {
        switch(e) {
            case "success":
            toast.success('Add Success', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
            
            case "error":
            console.log(picture);
            toast.error(`Too Many Files, Please remove ${picture.name}`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true
            });
        }
           
    }
    
    componentDidMount(){
        this.props.fetchData(this.search, this.page, this.size, this.sort)
    }
    fetchDataWithFilter() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
    }

    returnToHome = () => {
        this.props.history.push("/");
        this.notify();
    }

    handleSubmit = (e) => {
        const pictures = this.state.pictures
        this.props.add({
            name:e.name,
            description: e.description,
            brand: e.brand,
            catId: e.category,
            price: e.price,
            discount: e.discount,
            rating: 0,
            pictures,
            callback: this.returnToHome
        });
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
    console.log(state)
    return {
        names: state.category.names,
        last: state.category.last
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: ()=> dispatch(categoriesFetchNames()),
        addImage: (id, file, sort) => dispatch(addProductImages(id, file, sort)),
        add: (name, description, brand, catId, price, discount, rating, pictures, callback) => dispatch(addProductAction(name, description, brand, catId, price, discount, rating, pictures, callback))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);