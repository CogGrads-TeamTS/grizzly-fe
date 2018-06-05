import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';

class GlobalSearch extends React.Component {
 
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

export default GlobalSearch;
