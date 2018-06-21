import _ from 'lodash';
import React from 'react';
import { Table,Container, Row, Col, Form, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUploader from 'react-images-upload';


let ProductAddForm = (props) => {
    console.log(props);
    const {handleSubmit, returnToHome, onDrop} = props;

    if(props.categories == undefined){
        return <div>loading...</div>
    }

    return (
        <Container fluid={true}>
            <Row style={{marginTop: '50px'}}>
            <Col md="6" sm="6">
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose images'
                    onChange={onDrop}
                    imgExtension={['.jpg', '.gif', '.png', '.gif']}
                    maxFileSize={5242880}
                    withPreview={true}
                />
            </Col>
            <form onSubmit={handleSubmit}>
            <Row>
                <Col><Button className="btn-width-100 float-left" color="secondary" type="button" onClick={returnToHome}>Cancel</Button></Col>
                <Col><Button className="btn-width-100 float-right" color="primary" type="submit" >Add</Button></Col>
            </Row>
                <Col md="6" sm="6" height="100%">
                    <Field name="name" component="input" placeholder="Product Name" className="materialInput"/><br/>
                    <Field name="description" component="input" placeholder="Add Description" className="materialInput" style={{marginTop: "5%"}}/><br/>
                    <Field name="brand" component="input" placeholder="Add Brand" className="materialInput" style={{marginTop: "5%", marginBottom: "5%"}}/><br/>
                    <div>
                        <div className="btn-dropdown" id="toggler" style={{ marginBottom: '1rem' }} >Category</div>
                        <UncontrolledCollapse toggler="#toggler" className="btn-dropdown">
                        <Card>
                            <CardBody className="cat-collapse">
                            <div>
                                <div>
                                {_.map(props.categories, cat => {
                                    // if(cat.name == null) return; // Skip null categories
                                    return (
                                        <div key={cat.id}>
                                            <label>
                                                <Field name="category" component="input" type="radio" value={String(cat.id)}/> {` ${cat.name}`}
                                            </label>
                                        </div>
                                    )})
                                }
                                </div>
                            </div>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                    </div>
                    <Row>
                    <Col md="6" sm="6" height="100%">
                    <Field name="price" component="input" placeholder="Price" className="materialInput" style={{marginTop: "5%"}}/><br/>
                    <Field name="discount" component="input" placeholder="Discount" className="materialInput" style={{marginTop: "5%"}}/><br/>
                    </Col>
                    </Row>
                </Col>
                </form>
            </Row>
            
        </Container>
        
    )
}

ProductAddForm = reduxForm({
    // a unique name for the form
    form: 'addProduct'
  })(ProductAddForm)

  export default ProductAddForm;