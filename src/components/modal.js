import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './modal.css'

class Modal extends Component {

    render() {
        if(!this.props.show) {
            return null
        }
  
        return (
            <div className="backdropStyle">
                <div className="modalStyle">
                    {this.props.children}
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        )
    }
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node
}

export default Modal
