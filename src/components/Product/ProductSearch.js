import React from 'react';
import {
    Form,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    Input,
    Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import {productFetchData} from "../../actions/productActions";

class Search extends React.Component {
    constructor(props) {
        super(props);

        placeholder : props.placeholder;

        this.searchValue = this.searchValue.bind(this);
    }

    searchValue = event => {
        this.props.updateSearch(event.target.value);
        console.log(event.currentTarget.value);
    }

    onFormSubmit = event => {
        event.preventDefault();
    }

    render() {
        return (
            <Form onSubmit={this.onFormSubmit}>
                <FormGroup>
                    <InputGroup>
                        <Input
                            className="col-12 btn-left-curve"
                            type="search"
                            name="search"
                            id="exampleSearch"
                            placeholder={this.placeholder}
                            onChange={this.searchValue}
                        />
                        <InputGroupAddon addonType="prepend">
                            <Button
                                className="btn-search btn-right-curve">
                                <i className={this.props.loading ? `fas fa-spinner fa-spin` : 'fa fa-search'}></i>
                            </Button>
                        </InputGroupAddon>
                    </InputGroup>
                </FormGroup>
            </Form>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        products: state.product,
        loading: state.productIsLoading
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (search, page, size, sort) => dispatch(productFetchData(search, page, size, sort)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);
