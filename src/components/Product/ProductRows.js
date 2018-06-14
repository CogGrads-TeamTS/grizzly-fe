import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const ProductRows = (props) => { //console.log(props.category);
    const  product  = props.products;

    const handleClick = () => {
        props.history.push(`/product/${product.id}`);
    }

    return (
            <tr onClick={() => handleClick()}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.brand}</td>
                <td>{product.category}</td>
                <td>{product.rating}</td>
                <td><Button color="info" onClick={() => props.edit(product)}>Edit</Button></td>
                <td><Button color="secondary">Block </Button></td>
                <td><Button color="danger" onClick={() => props.delete(product)}>Delete</Button></td>
            </tr>
        )
};

export default withRouter(ProductRows);