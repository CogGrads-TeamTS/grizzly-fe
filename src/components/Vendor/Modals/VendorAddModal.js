import React, { Component } from 'react'
import { Button, Modal, Form, FormGroup, Label, Row, Col, Input, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import {
    renderField, renderTextArea, required, maxLength40,
    minValue0, noSpecialChars, isValidPrice, numOnly,
    percentMax, isValidPercentage
} from '../../common/redux_validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class VendorAddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            name: "",
            about: "",
            email: "",
            webpage: "",
            contact: "",
            address: "",
            portfolioURL: ""
        };

        this.toggle = this.toggle.bind(this);
        this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWebPageChange = this.handleWebPageChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleportfolioURLChange = this.handleportfolioURLChange.bind(this);
        this.notify = this.notify.bind(this);
    }

    notify = () => {
        // toast("Success!");

        // toast("Default Notification !");

        toast.success('Add Success', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleVendorNameChange(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleAboutChange(event) {
        this.setState({
            about: event.target.value
        })
    }
    handleEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }
    handleWebPageChange(event) {
        this.setState({
            webpage: event.target.value
        })
    }
    handleContactChange(event) {
        this.setState({
            contact: event.target.value
        })
    }
    handleAddressChange(event) {
        this.setState({
            address: event.target.value
        })
    }
    handleportfolioURLChange(event) {
        this.setState({
            portfolioURL: event.target.value
        })
    }
    handleSubmit(event) {
        this.props.confirm({
            name: this.state.name,
            about: this.state.about,
            email: this.state.email,
            webpage: this.state.webpage,
            contact: this.state.contact,
            address: this.state.address,
            portfolioURL: this.state.portfolioURL

        });
    }
    submitAndClose = () => {
        this.handleSubmit();
        this.toggle();
        this.notify();
    };
    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <form onSubmit={this.handleSubmit}>
                        <ModalHeader toggle={this.toggle}>Add Vendor</ModalHeader>
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
                            <Button color="primary" onClick={this.submitAndClose}>Add</Button>{' '}
                        </ModalFooter>
                    </form>
                </Modal>
            </div>
        );
    }

}

VendorAddModal = reduxForm({
    // a unique name for the form
    form: 'addVendor'
})(VendorAddModal)
export default VendorAddModal