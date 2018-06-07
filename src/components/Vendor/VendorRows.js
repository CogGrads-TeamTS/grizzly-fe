import React from 'react';
import { Button } from 'reactstrap';

const VendorRows= (props) => {
    console.log(props.vendor);
   // const  vendor  = props.vendor;
    return (
        <tr>
            <td>{props.vendor.id}</td>
            <td>{props.vendor.name}</td>
            <td>{props.vendor.email}</td>
            <td>{props.vendor.contact}</td>
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