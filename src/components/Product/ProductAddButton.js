import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Fade } from 'reactstrap';
import { withRouter } from 'react-router';

const ProductAdd = (props) => {
    
    const handleClick = () => {
        props.history.push(`/product/add`);
    }
    return (
        <Button color="success" onClick={() => handleClick()}>{props.buttonLabel}</Button>
    );
}

export default withRouter(ProductAdd);