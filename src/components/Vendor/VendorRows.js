import React from 'react';
import { Button } from 'reactstrap';

const VendorRows= (props) => {

    //console.log(props.vendor);
   const  vendor  = props.vendor;
   //console.log(props.delete(vendor));

    return (
        <tr>
            <td>{vendor.id}</td>
            <td>{vendor.name}</td>
            <td>{vendor.email}</td>
            <td>{vendor.contact}</td>
            <td><Button color="info">Edit</Button></td>
            <td><Button color="secondary">Block </Button></td>
            <td><Button color="danger"  onClick={() => props.delete(vendor)}>Delete</Button></td>
        </tr>
    )
};

export default VendorRows;