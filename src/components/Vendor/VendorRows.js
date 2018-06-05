import React from 'react';
import { Button } from 'reactstrap';

const VendorRows= (props) => {
    const  vendor  = props.vendor;
    return (
        <tr>
            <td>{vendor.name}</td>
            <td>{vendor.Id}</td>
            <td>{vendor.location}</td>
            <td>{vendor.contact}</td>
            <td><Button color="info">Edit</Button></td>
            <td><Button color="secondary">Block </Button></td>
            <td><Button color="danger">Delete</Button></td>
        </tr>
    )
};

//Uncomment later
// const EditEvent = () => {
//     console.log('Test');
// }

export default VendorRows;