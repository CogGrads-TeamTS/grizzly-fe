import React from 'react';
import {Link} from 'react-router-dom';

const CategoryRows = (props) => {
    const  category  = props.category;
    return (
    <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.id}</td>
    </tr>
    )
};

export default CategoryRows;