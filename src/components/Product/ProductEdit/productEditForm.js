import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import { Container, Row, Col, Form,Input,Label, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ProductViewCarousel from '../ProductView/ProductViewCarousel';

const returnToHome = () => {
    this.props.history.push("/");
}

class ProductEditForm extends Component{

    constructor(props) {
        super(props);
    }
    render(){

    const {handleSubmit,categories,product} = this.props;
        
        console.log(this.props.product);


    return (
        <Container fluid={true}>

            <Row>

                <Col md="6" sm="6">
                    {/*<img name="img" className="prod-image-img" src="https://via.placeholder.com/450x370" width="100%"/>*/}
                    {/*<div className="prod-image-caption">Product Image Carousel</div>*/}
                    <div className="prod-body-images">
                        <ProductViewCarousel images={this.props.product.images}/>
                    </div>

                </Col>
                <Col md="6" sm="6" height="100%">
                    <form onSubmit={handleSubmit}>
                        <fieldset className="form-group">
                            <label>Name: </label>
                            <Field  className="form-control" component="input" type="text" name="name" /><br/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Brand: </label>
                            <Field  className="form-control"  component="input" type="text" name="brand" /><br/>
                        </fieldset>
                        <fieldset className="form-group">
                            <label>Description: </label>
                            <Field  className="form-control"  component="textarea" name="description" type="textarea" />
                        </fieldset>
                        <div>
                            <fieldset className="form-group">
                                <label>Category Selected: </label>
                                <Field  className="form-control"  component="input" name="catName" value={this.props.initialValues.catName} type="text" disabled />
                            </fieldset>
                    </div>

                        <div className="text-left">
                            <label>Change Category : </label>
                            <Button outline color="primary" id="toggler" style={{ marginBottom: '1rem' }} >    Category</Button>
                            <UncontrolledCollapse toggler="#toggler">
                                <Card>
                                    <CardBody className="cat-collapse">
                                        <div>
                                            <div>

                                                {_.map(this.props.categories, cat => {

                                                    return (
                                                        <div>
                                                            <label>
                                                                <Field name="catName" component="input" type="radio" value={cat.name}
                                                                       onChange={
                                                                           () => {this.props.product.catName = cat.name;
                                                                           this.props.product.catId = cat.id;
                                                                           this.props.product.category.id=cat.id;
                                                                               this.props.product.category.name=cat.name;}}/>{' '}

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
                                <fieldset className="form-group">
                                    <Field  className="form-control"  component="input"  name="price" type="text"  style={{marginTop: "5%"}}/><br/>
                                </fieldset>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" sm="6" height="100%">
                                <fieldset className="form-group">
                                    <Field  className="form-control"  component="input" name="discount" type="text"  style={{marginTop: "5%"}}/><br/>
                                </fieldset>
                            </Col>
                        </Row>

                        <div className="prod-footer">
                            <div className="prod-body-price">
                                <Button outline color="primary"  onClick={handleSubmit} type="submit">Edit</Button>
                            </div>

                            <div className="prod-body-discount">
                                <Button outline color="secondary" onClick={this.returnToHome}>Cancel</Button>
                            </div>
                        </div>

                    </form>


                </Col>

            </Row>
        </Container>

    )

}



}

ProductEditForm = reduxForm({
    // a unique name for the form
    form: 'editProduct'
})(ProductEditForm)

// now set initialValues using data from your store state
ProductEditForm = connect(state => ({initialValues: state.products.selected})
   
)(ProductEditForm)

export default ProductEditForm;