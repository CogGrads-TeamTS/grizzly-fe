import _ from 'lodash';
import React from 'react';
import { Table,Container, Row, Col, Form, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUploader from 'react-images-upload';


let ProductAddForm = (props) => {
    const {handleSubmit, returnToHome, onDrop} = props;

    if(props.categories == undefined){
        return <div>loading...</div>
    }

    return (
        <Container fluid={true}>
            <Row style={{marginTop: '30px'}}>
                <Col md="5" sm="12" >
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                        withPreview={true}
                        className="image-uploader"
                        fileSizeError='File size is too big'
                        fileTypeError="is not supported file extension"
                        label='Max file size: 5mb, accepted: jpg, png, gif'
                    />
                </Col>
                <Col md="6" sm="6">
                    <form onSubmit={handleSubmit}>
                        
                        <label> Name </label>
                            <Field name="name" component="input" placeholder="Product Name" className="form-fields"/>
                    
                        <label> Description </label>
                            <Field name="description" component="input" placeholder="Add Description" className="form-fields"/>
                    
                        <label> Brand</label>
                            <Field name="brand" component="input" placeholder="Add Brand" className="form-fields" />
                        <Row>
                            <Col sm="6">
                        <label>Category</label>
                        <div className="product-category">
                            {_.map(props.categories, cat => {
                                return (
                                    <div key={cat.id}>
                                        <label>
                                            <Field name="category" component="input" type="radio" value={String(cat.id)} /> {` ${cat.name}`}
                                        </label>
                                    </div>
                                )})
                            }
                            </div>
                            </Col>
                            <Col sm="6">
                                <label> Price</label>
                                <Field name="price" component="input" placeholder="Price" className="form-fields"/>
                                <label style={{marginTop: '16px'}}> Discount</label>
                                <Field name="discount" component="input" placeholder="Discount" className="form-fields" />
                            </Col>
                        </Row>

                            <Row>
                        <Col><Button className="btn-width-100 float-left" color="secondary" type="button" onClick={returnToHome}>Cancel</Button></Col>
                        <Col><Button className="btn-width-100 float-right" color="primary" type="submit" >Add</Button></Col>
                    </Row>
                    </form> 
                </Col>
            </Row>  
        </Container>
    )
}

ProductAddForm = reduxForm({
    // a unique name for the form
    form: 'addProduct'
  })(ProductAddForm)

  export default ProductAddForm;