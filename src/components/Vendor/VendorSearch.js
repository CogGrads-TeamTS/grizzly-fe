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
import { vendorsFetchData } from '../../actions/vendorActions';

const ENTER_KEY = 13;

class VendorSearch extends React.Component {
  constructor(props) {
    super(props);

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
          name="vendor-search" 
          id="ven-srch" 
          placeholder={this.placeholder} 
          onChange={this.searchValue} 
          />
            <InputGroupAddon addonType="prepend">
              <Button 
              className="btn-search btn-right-curve">
                <i className="fa fa-search"></i>
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
      vendors: state.vendors,
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
      fetchData: (search, page, size, sort) => dispatch(vendorsFetchData(search, page, size, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (VendorSearch);
