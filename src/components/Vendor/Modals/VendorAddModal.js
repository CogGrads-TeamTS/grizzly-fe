import React, { Component } from 'react'
import { Button, Modal,Form,FormGroup,Label, Col,Input, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types'

class VendorAddModal extends Component{
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
        this.toggle()
    };
    render() {
        return (
            <div>
                <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Add Vendor</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label sm={4}>Vendor Name : </Label>
                                <Col sm={8}>
                                    <Input type="text" name="name" placeholder="Add Vendor Name" onChange={this.handleVendorNameChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label sm={4}>About : </Label>
                                <Col sm={8}>
                                    <Input type="textarea" name="about" placeholder="About Vendor" onChange={this.handleAboutChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Email : </Label>
                                <Col sm={8}>
                                    <Input type="email" name="email" placeholder="Email" onChange={this.handleEmailChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Web Page : </Label>
                                <Col sm={8}>
                                    <Input type="url" name="webpage" placeholder="Web Page" onChange={this.handleWebPageChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Contact : </Label>
                                <Col sm={8}>
                                    <Input type="number" name="contact" placeholder="Contact" onChange={this.handleContactChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Address : </Label>
                                <Col sm={8}>
                                    <Input type="textarea" name="address" placeholder="Address" onChange={this.handleAddressChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Portfolio URL : </Label>
                                <Col sm={8}>
                                    <Input type="url" name="portfolioURL" placeholder="Portfolio URL" onChange={this.handleportfolioURLChange} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.submitAndClose}>Add</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}
export default VendorAddModal