import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import PropTypes from 'prop-types'

class ConfirmDeleteModal extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      modal: false
    };
    console.log(props);
    this.toggle = this.toggle.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  openModal(prod) {
    this.setState({
        modal:true,
        id: prod.id,
        name: prod.name,
        brand: prod.brand,
        price: prod.price,
        category: prod.category,
        discount: prod.discount,
        rating: prod.rating
    });
  }

  confirmDelete() {
    const prod = {
        id:this.state.id,
        name: this.state.name,
        brand: this.state.brand,
        price: this.state.price,
        category: this.state.category,
        discount: this.state.discount,
        rating: this.state.rating
    };
    this.props.confirm(prod);
    this.toggle();
  }

  toggle() { console.log(this.state.modal);
    this.setState({
      modal: false
    });
      console.log(this.state.modal);
  }

  render() {
    return (
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Delete Confirmation</ModalHeader>
          <ModalBody>
            <p>Are you sure you want to delete the product <b>{this.state.name}</b>?</p>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="danger" onClick={this.confirmDelete}>Confirm</Button>{' '}
          </ModalFooter>
        </Modal>
    );
  }
}

ConfirmDeleteModal.propTypes = {
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
    formName: PropTypes.string
  }

export default ConfirmDeleteModal;