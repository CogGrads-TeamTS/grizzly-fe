import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types'

class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
          modal: false,
          name: "",
          description: ""
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    toggle() {
        this.setState({
            modal: !this.state.modal
        })  
    }

    handleNameChange(event) {
        this.setState({
            name: event.target.value,
            description: this.state.description
        })
    }
    
    handleDescriptionChange(event) {
        this.setState({
            name: this.state.name,
            description: event.target.value
        })
    }

    handleSubmit(event) {
        this.props.confirm({name: this.state.name, description: this.state.description});
    }

    submitAndClose = () => {
        this.handleSubmit()
        this.toggle()
    }
    
    render() {
        return (
            <div>
            <Button color="success" onClick={this.toggle}>{this.props.buttonLabel}</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                <form onSubmit={this.handleSubmit}>
                    <label>Category Name:</label>
                    <input name="name" placeholder="Add Name" onChange={this.handleNameChange}/><br/>
                    <label>Category Description:</label>
                    <input name="description" placeholder="Add Description" onChange={this.handleDescriptionChange}/><br/>
                </form>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={this.submitAndClose}>{this.props.actionLabel}</Button>{' '}
                <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
            </div>
        );
    }
}

AddModal.propTypes = {
    // boolean to control the state of the popover
    isOpen:  PropTypes.bool,
    autoFocus: PropTypes.bool,
    // if modal should be centered vertically in viewport
    centered: PropTypes.bool,
    // corresponds to bootstrap's modal sizes, ie. 'lg' or 'sm'
    size: PropTypes.string,
    // callback for toggling isOpen in the controlling component
    toggle:  PropTypes.func,
    role: PropTypes.string, // defaults to "dialog"
    // used to reference the ID of the title element in the modal
    labelledBy: PropTypes.string,
    keyboard: PropTypes.bool,
    // control backdrop, see http://v4-alpha.getbootstrap.com/components/modal/#options
    backdrop: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.oneOf(['static'])
    ]),
    // allows for a node/componet to exist next to the modal (outside of it). Useful for external close buttons
    // external: PropTypes.node,
    // called on componentDidMount
    onEnter: PropTypes.func,
    // called on componentWillUnmount
    onExit: PropTypes.func,
    // called when done transitioning in
    onOpened: PropTypes.func,
    // called when done transitioning out
    onClosed: PropTypes.func,
    className: PropTypes.string,
    wrapClassName: PropTypes.string,
    modalClassName: PropTypes.string,
    backdropClassName: PropTypes.string,
    contentClassName: PropTypes.string,
    // boolean to control whether the fade transition occurs (default: true)
    fade: PropTypes.bool,
    cssModule: PropTypes.object,
    // zIndex defaults to 1000.
    zIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),
    // backdropTransition - controls backdrop transition
    // timeout is 150ms by default to match bootstrap
    // see Fade for more details
    backdropTransition: PropTypes.shape(Fade.propTypes),
    // modalTransition - controls modal transition 
    // timeout is 300ms by default to match bootstrap
    // see Fade for more details
    modalTransition: PropTypes.shape(Fade.propTypes),
    title: PropTypes.string,
    children: PropTypes.node,
    action: PropTypes.func,
    actionLabel: PropTypes.string,
    formName: PropTypes.string,
  }

export default AddModal;
