import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, ModalBody, ModalFooter } from 'reactstrap';
import {
  renderField, renderTextArea, required, maxLength40, noSpecialChars, 
} from '../common/redux_validation';

let CategoryForm = props => {
  console.log(props)
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <ModalBody>
        <div style={{ maxHeight: "270px" }}>
          <Field name="name" label="Name" type="text" component={renderField}
            placeholder="Add Name" className="form-fields" validate={[required, maxLength40, noSpecialChars]} />
            <br/> 
          <Field name="description" label="Description" type="textarea" component={renderTextArea}
            placeholder="Add Description" className="form-fields" validate={[required]} />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={this.submitAndClose}>Submit</Button>{' '}
      </ModalFooter>
    </form>
  )
}

CategoryForm = reduxForm({
  // a unique name for the form
  form: 'addCategory'
})(CategoryForm)

export default CategoryForm