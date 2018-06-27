import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import { Container, Row, Col, Form,Input,Label, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ProductViewCarousel from '../ProductView/ProductViewCarousel';

class ProductEditForm extends Component{

    constructor(props) {
        super(props);
    }

    returnToHome = () => {
        this.props.history.push(`/product/${this.props.match.params.id}`);
    }

    render(){

    const {handleSubmit,categories,product} = this.props;


    return (
        <Container fluid={true}>
            <Row style={{marginTop: '30px'}}>
                <Col md="5" sm="12">
                    {/*<img name="img" className="prod-image-img" src="https://via.placeholder.com/450x370" width="100%"/>*/}
                    {/*<div className="prod-image-caption">Product Image Carousel</div>*/}
                    <div className="prod-body-images">
                        <ProductViewCarousel images={this.props.product.images}/>
                    </div>
                </Col>
                <Col md="7" sm="6">
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col>
                                <label> Name </label>
                                <Field name="name" component="input" placeholder="Product Name" className="form-fields"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <label> Description </label>
                                <Field name="description" component="textarea" placeholder="Add Description" className="form-fields"/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <label> Brand</label>
                            <Field name="brand" component="input" placeholder="Add Brand" className="form-fields" />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <label>Category</label>
                                <div className="product-category">
                                    {_.map(this.props.categories, cat => {
                                        return (
                                            <div>
                                                <label>
                                                    <Field name="catName" component="input" type="radio" value={cat.name}
                                                        onChange={
                                                            () => {this.props.product.catName = cat.name;
                                                            this.props.product.catId = cat.id;
                                                            }}/>{' '}

                                                    {cat.name}
                                                </label>
                                            </div>
                                        )
                                    })}
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
                        <Col><Button className="btn-width-100 float-left" color="secondary" type="button" onClick={this.returnToHome}>Cancel</Button></Col>
                        <Col><Button className="btn-width-100 float-right" color="primary" type="submit" >Add</Button></Col>
                    </Row>
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
ProductEditForm = withRouter(connect(state => ({initialValues: state.products.selected}))(ProductEditForm))
export default ProductEditForm;