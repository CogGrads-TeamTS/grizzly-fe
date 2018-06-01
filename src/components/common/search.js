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
 import { categoriesFetchData } from '../../actions/categoryActions';

class Search extends React.Component {
  constructor(props) {
    super(props);

    placeholder : props.placeholder;
    this.searchValue = this.searchValue.bind(this);
  }

  searchValue = event => {
    console.log(event.currentTarget.value + "hi");
    this.props.update(event.currentTarget.value);
  }
 
  // Need to create a handleSearchbarChange as like in CategoryAddModal, looking for changes and setting state.
  
  render() {
    return (
      <Form>
        <FormGroup>
        <InputGroup>
          <Input 
          className="col-12 btn-left-curve" 
          type="search" 
          name="search" 
          id="exampleSearch" 
          placeholder={this.placeholder} 
          />
            <InputGroupAddon addonType="prepend">
              <Button 
              onClick={this.searchValue} 
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
      categories: state.category,
      filter: state.categoryFilter
  };
};

const mapDispatchToProps = (dispatch) => { 
  return {
      fetchData: (search, page, size, sort) => dispatch(categoriesFetchData(search, page, size, sort)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps) (Search);
