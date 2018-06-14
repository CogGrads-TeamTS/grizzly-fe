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
            <tr>
                <td onClick={handleClick}>{product.id}</td>
                <td onClick={handleClick}>{product.name}</td>
                <td onClick={handleClick}>{product.brand}</td>
                <td onClick={handleClick}>{product.catName}</td>
                <td onClick={handleClick}>{product.rating}</td>
                <td><Button color="info" onClick={() => props.edit(product)}>Edit</Button></td>
                <td><Button color="secondary">Block </Button></td>
                <td><Button color="danger" onClick={() => props.delete(product)}>Delete</Button></td>
            </tr>
        )
};

export default withRouter(ProductRows);