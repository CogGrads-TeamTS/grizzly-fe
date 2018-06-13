import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

const ProductRows = (props) => { //console.log(props.category);
    const  products  = props.products;

    const handleClick = () => {
        props.history.push(`/product/${products.id}`);
    }

    return (
            <tr onClick={() => handleClick()}>
                <td>{products.id}</td>
                <td>{products.name}</td>
                <td>{products.brand}</td>
                <td>{products.categories}</td>
                <td>{products.rating}</td>
                <td><Button color="info" onClick={() => props.edit(products)}>Edit</Button></td>
                <td><Button color="secondary">Block </Button></td>
                <td><Button color="danger" onClick={() => props.delete(products)}>Delete</Button></td>
            </tr>
        )
};

export default withRouter(ProductRows);