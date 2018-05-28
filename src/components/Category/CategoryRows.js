import React from 'react';
import {Link} from 'react-router-dom';
import EditButton from '../Buttons/EditButton'
import RemoveButton from '../Buttons/RemoveButton'
import BlockButton from '../Buttons/BlockButton'
import { Table,Container, Row, Col } from 'reactstrap';

const CategoryRows = (props) => {
    const  category  = props.category;
    return (
    <tr>
        <td>{category.name}</td>
        <td>{category.description}</td>
        <td>{category.id}</td>
        <td><EditButton/></td>
        <td><BlockButton/></td>
        <td><RemoveButton/></td>
    </tr>
    )
};

export default CategoryRows;