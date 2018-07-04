import React from 'react';
import { Button } from 'reactstrap';
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