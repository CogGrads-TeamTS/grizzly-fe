import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router'

import StarRatings from 'react-star-ratings';

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
                <td onClick={handleClick}>
                    <StarRatings 
                        rating={product.rating}
                        numberOfStars={5}
                        changeRating={false}
                        name='rating'
                        starDimension="20px"
                        starSpacing="2px"
                        starRatedColor='rgb(108, 116, 217)'
                    />
                </td>
                <td><Button color="secondary">Block </Button></td>
                <td><Button color="danger" onClick={() => props.delete(product)}>Delete</Button></td>
            </tr>
        )
};

export default withRouter(ProductRows);