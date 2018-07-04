import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import {
  renderField, renderTextArea, required, maxLength40,
  minValue0, noSpecialChars, isValidPrice, numOnly,
  percentMax, isValidPercentage
} from '../common/redux_validation';

let VendorForm = props => {
  console.log(props)
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <ModalBody>
        <Field name="name" label="Name" type="text" component={renderField}
          placeholder="Add Name" className="form-fields" validate={[required, maxLength40, noSpecialChars]} />
        <Field name="about" label="About" type="textarea" component={renderTextArea}
          placeholder="Add About" className="form-fields" validate={[required]} />
        <Field name="email" label="Email" type="text" component={renderField}
          placeholder="Add Email" className="form-fields" validate={[required]} />
        <Field name="contact" label="Number" type="text" component={renderField}
          placeholder="Add Contact" className="form-fields" validate={[required]} />
        <Field name="webpage" label="Web Page" type="text" component={renderField}
          placeholder="Add Webpage" className="form-fields" />
        <Field name="address" label="Address" type="textarea" component={renderTextArea}
          placeholder="Add Address" className="form-fields" />
        <Field name="portfolioURL" label="Portfolio URL" type="text" component={renderField}
          placeholder="Add Contact" className="form-fields" />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" type="submit" onClick={this.submitAndClose}>Submit</Button>{' '}
      </ModalFooter>
    </form>
  )
}

VendorForm = reduxForm({
  // a unique name for the form
  form: 'addVendor'
})(VendorForm)

export default VendorForm