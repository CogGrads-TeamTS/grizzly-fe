import React from 'react';
import {
  Form,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
 } from 'reactstrap';

export const Search = (props) => {
  let placeholder = props.placeholder;

  return (
    <Form>
      <FormGroup>
      <InputGroup>
        <Input className="col-6 btn-left-curve" type="search" name="search" id="exampleSearch" placeholder={placeholder} />
          <InputGroupAddon addonType="prepend"><Button className="btn-search btn-right-curve"><i className="fa fa-search"></i></Button></InputGroupAddon>
            </InputGroup>
      </FormGroup>
    </Form>
  )
}

export default Search;
