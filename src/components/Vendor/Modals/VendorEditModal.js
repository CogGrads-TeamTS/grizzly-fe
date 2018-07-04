import React, { Component } from 'react'
import { Button, Modal,Form,FormGroup,Label, Col,Input, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class VendorEditModal extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            id: "",
            name: "",
            about: "",
            email: "",
            webpage: "",
            contact: "",
            address: "",
            portfolioURL: ""
        };
        
        this.toggle = this.toggle.bind(this);
        this.openModal = this.openModal.bind(this);
        this.handleVendorNameChange = this.handleVendorNameChange.bind(this);
        this.handleAboutChange = this.handleAboutChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleWebPageChange = this.handleWebPageChange.bind(this);
        this.handleContactChange = this.handleContactChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleportfolioURLChange = this.handleportfolioURLChange.bind(this);
    }

    openModal(ven) {
        this.setState({ 
            modal: !this.state.modal, 
            id: ven.id,
            name: ven.name,
            about: ven.about,
            email: ven.email,
            webpage: ven.webpage,
            contact: ven.contact,
            address: ven.address,
            portfolioURL: ven.portfolioURL
        });
    }
    toggle() {
        this.setState({
          modal: !this.state.modal
        });
      }
    handleVendorNameChange(event) {
        console.log(event.target.value);
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
            id: this.state.id,
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
               
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Vendor</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup row>
                                <Label sm={4}>Vendor Name : </Label>
                                <Col sm={8}>
                                    <Input type="text" name="name" value={this.state.name} onChange={this.handleVendorNameChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                            <Label sm={4}>About : </Label>
                                <Col sm={8}>
                                    <Input type="textarea" name="about" value={this.state.about} onChange={this.handleAboutChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Email : </Label>
                                <Col sm={8}>
                                    <Input type="email" name="email" value={this.state.email} onChange={this.handleEmailChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Web Page : </Label>
                                <Col sm={8}>
                                    <Input type="url" name="webpage" value={this.state.webpage} onChange={this.handleWebPageChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Contact : </Label>
                                <Col sm={8}>
                                    <Input type="text" name="contact" value={this.state.contact} onChange={this.handleContactChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Address : </Label>
                                <Col sm={8}>
                                    <Input type="textarea" name="address" value={this.state.address} onChange={this.handleAddressChange} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label sm={4}>Portfolio URL : </Label>
                                <Col sm={8}>
                                    <Input type="url" name="portfolioURL" value={this.state.portfolioURL} onChange={this.handleportfolioURLChange} />
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.submitAndClose}>Confirm</Button>
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }

}
export default VendorEditModal;