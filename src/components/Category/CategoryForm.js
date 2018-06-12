import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';

let CategoryForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <ModalBody>
                    <label>Category Name:</label>
                    <Field name="name" component="input" placeholder="Add Name" style={{width: "60%", float: "right"}}/><br/>
                    <label>Category Description:</label>
                    <Field name="description" component="input" placeholder="Add Description"style={{width: "60%", float: "right"}}/><br/>
    </ModalBody>
    <ModalFooter>
                    <Button color="primary" type="submit" onClick={this.submitAndClose}>Submit</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
    </ModalFooter>
    </form>
  )
}

CategoryForm = reduxForm({
  // a unique name for the form
  form: 'addCategory'
})(CategoryForm)

export default CategoryForm