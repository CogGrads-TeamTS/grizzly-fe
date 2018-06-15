import _ from 'lodash';
import React from 'react';
import { Table,Container, Row, Col, Form, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';

let ProductAddForm = (props) => {
    console.log(props);
    const {handleSubmit} = props;
    const { categories } = props;

    return (
        <Container fluid={true}>
        
            <Row>
            
                <Col md="6" sm="6">
                    <img name="img" className="prod-image-img" src="https://via.placeholder.com/450x370" width="100%"/>
                    <div className="prod-image-caption">Product Image Carousel</div>
                </Col>
                <Col md="6" sm="6" height="100%">
                <form onSubmit={handleSubmit}>
                    <Field name="name" component="input" placeholder="Product Name" className="materialInput"/><br/>
                    <Field name="description" component="textarea" placeholder="Add Description"style={{marginTop: "5%"}}/><br/>
                    <div>
                        <Button outline color="primary" id="toggler" style={{ marginBottom: '1rem' }} >Category</Button>
                        <UncontrolledCollapse toggler="#toggler">
                        <Card>
                            <CardBody className="cat-collapse">
                                <div>
                                    <div>
                                       
                                        {_.map(props.categories, cat => {
                                             
                                            return (
                                                <div>
                                                    <label>
                                                    <Field name="category" component="input" type="radio" value={cat.name}/>{' '}
                                                    {cat.name}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                        </div>
                                </div>
                            </CardBody>
                        </Card>
                        </UncontrolledCollapse>
                    </div>
                    <Row>
                    <Col md="6" sm="6" height="100%">
                    <Field name="price" component="input" placeholder="Price"style={{marginTop: "5%"}}/><br/>
</Col>
                    </Row>

                    <div className="prod-footer">
                        <div className="prod-body-price">
                        <Button color="primary" type="submit">Add</Button>
                        </div>
                        <div className="prod-body-discount">
                        <Button color="secondary" type="submit">Cancel</Button>
                        </div>
                    </div>
                    
                    </form>
                    {console.log(categories)}
                    

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