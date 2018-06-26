import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';

let CategoryForm = props => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
    <ModalBody> 
      <div style={{height: "200px"}}>
                    <label>Category Name:</label>
                    <Field name="name" component="input" className="form-fields" placeholder="Add Name" style={{width: "60%", float: "right"}}/><br/>
                    <label className="form-label">Category Description:</label>
                    <Field name="description" component="textarea"  className="form-fields" placeholder="Add Description" style={{width: "60%", float: "right", height: "125px", resize: "none"}} /><br/>
                    </div>
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