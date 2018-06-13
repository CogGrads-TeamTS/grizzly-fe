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
    const classes = `col-12 btn-left-curve ${this.props.rounded}`;
    return (
      <Form>
        <FormGroup>
        <InputGroup className={this.props.classname}>
          <Input 
          className={classes}
          type="search" 
          name="search" 
          id="exampleSearch" 
          placeholder={this.props.placeholder} 
          />
            {/* <InputGroupAddon addonType="prepend">
              <Button 
              className="btn-search btn-right-curve">
                <i className="fa fa-search"></i>
              </Button>
            </InputGroupAddon> */}
            </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default GlobalSearch;
