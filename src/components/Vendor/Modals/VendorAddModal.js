import React, { Component } from 'react'
import { Button, Modal, ModalHeader } from 'reactstrap';
import { reduxForm } from 'redux-form';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VendorForm from '../VendorForm';

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
            name: event.name,
            about: event.about,
            email: event.email,
            webpage: event.webpage,
            contact: event.contact,
            address: event.address,
            portfolioURL: event.portfolioURL
        });
    }
    submitAndClose = (event) => {
        this.handleSubmit(event);
        this.toggle();
        this.notify();
    };

    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Vendor</ModalHeader>
                    <VendorForm onSubmit={this.submitAndClose} toggle={this.toggle} actionLabel={this.props.actionLabel} /> 
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