import React from 'react';
import { Button } from 'reactstrap';

const VendorRows= (props) => {
    const  vendor  = props.vendor;
    return (
        <tr>
            <td>{props.vendor.id}</td>
            <td>{props.vendor.name}</td>
            <td>{props.vendor.email}</td>
            <td>{props.vendor.contact}</td>
            <td><Button color="info" onClick={() => props.edit(vendor)}>Edit</Button></td>
            <td><Button color="secondary">Block </Button></td>
            <td><Button color="danger">Delete</Button></td>
        </tr>
    )
};

export default VendorRows;