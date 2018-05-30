import React from 'react';
import { Button } from 'reactstrap';

const CategoryRows = (props) => {
    const  category  = props.category;
    return (
    <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.count}</td>
        <td><Button color="info" onClick={() => props.edit(category)}>Edit</Button></td>
        <td><Button color="secondary">Block </Button></td>
        <td><Button color="danger" onClick={() => props.delete(category)}>Delete</Button></td>
    </tr>
    )
};

//Uncomment later
// const EditEvent = () => {
//     console.log('Test');
// }

export default CategoryRows;