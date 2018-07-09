import React, { Component } from 'react'
import { addProductImages, addProductAction } from '../../actions/productActions';
import ProductAddForm from './ProductAddForm';
import { connect } from 'react-redux';
import { categoriesFetchNames } from '../../actions/categoryActions';
import { toast } from 'react-toastify';
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
    }

    /**
     * 
     * @param {*} picture File object
     * 
     * If the picture array (of Files) is larger than 5 notify the user 
     * to remove the last image on the picture array
     */
    onDrop(picture) {
        if (picture.length <= 5) {
            this.setState({
                pictures: picture
            });
        }
        else {
            console.log(picture[picture.length - 1])
            this.notify('errorpic', picture[picture.length - 1]);
        }
    }

    notify = (e, picture) => {
        switch (e) {
            case "success":
                toast.success('Add Success', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                break;

            case "errorpic":
                toast.error(`Too Many Files, Please remove ${picture.name}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                });
                break;

            case "error":
                toast.error('Product Failed to add', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true
                    });
                    break;

            default:
                break;
        }

    }

    componentDidMount() {
        this.props.fetchData(this.search, this.page, this.size, this.sort)
    }

    returnToHome = (type) => {
        console.log(type);
        this.props.history.push("/dashboard");
        this.notify("success");
    }

    callbackFailed = () => {
        this.notify("error");
    }

    handleSubmit = (e) => {
        const pictures = this.state.pictures
        this.props.add({
            name: e.name,
            description: e.description,
            brand: e.brand,
            catId: e.category,
            price: e.price,
            discount: e.discount,
            rating: 0,
            pictures,
            callbackSuccess: this.returnToHome,
            callbackFailed: this.callbackFailed
        });
    }

    render() {
        return (
            <div>
                <ProductAddForm onSubmit={this.handleSubmit} categories={this.props.names} returnToHome={this.returnToHome} onDrop={this.onDrop} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        names: state.category.names,
        last: state.category.last
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(categoriesFetchNames()),
        addImage: (id, file, sort) => dispatch(addProductImages(id, file, sort)),
        add: (name, description, brand, catId, price, discount, rating, pictures, callbackSuccess, callbackFailed) => dispatch(addProductAction(name, description, brand, catId, price, discount, rating, pictures, callbackSuccess, callbackFailed))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdd);