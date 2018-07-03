import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import { Container, Row, Col, Form, Input, Label, FormGroup, UncontrolledCollapse, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import ProductViewCarousel from '../ProductView/ProductViewCarousel';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';
import classNames from 'classnames';
import ListWrapper from './ListWrapper';
import './list.css';

const returnToHome = () => {
    this.props.history.push("/dashboard");
};

class ProductEditForm extends Component {

    constructor(props) {
        super(props);
    }

    SortableList = SortableContainer(({ items }) => {
        return (
            <div className="list stylizedList grid">
                {_.map(items, (image, index) => {
                    return <this.SortableItem key={`item-${index}`} index={index} image={image} />
                })}
            </div>
        );
    });
    
    SortableItem = SortableElement(({ image }) => {
        const urladdition="http://ts.ausgrads.academy/images/"
        return <div className="gridItem stylizedItem">
            <div className="wrapper">
                <div className="carousel-item-img-contain">
                     <img src={urladdition + image.url} />
                </div>
                <div className="sort-disp-wrapper">
                    <div className="sort-disp-num">{image.sort + 1}</div>
                </div>
                <div className="cancel-btn-wrapper">
                    <Button className="carousel-item-img-cancel" size="1" color="danger" onClick={() => this.props.deleteImage(image)}>X</Button>
                </div>
            </div>
        </div>
    });

     // Sort the images
     sortImages = (items) => {
        // Re-sort images
        _.map(items, (image, i) => {
            image.sort = i;
        });
        items.sort((x, y) => x.sort - y.sort);
        return items;
      }

    getItems = () => {
        const images = [];
        _.map(this.props.product.images, image => {
            images.push(image)
        })
        return images;
    }

    returnToHome = () => {
        this.props.history.push(`/product/${this.props.match.params.id}`);
    }

    render() {

        const { handleSubmit } = this.props;

        return (
            <Container fluid={true}>
                <Row style={{ marginTop: '30px' }}>
                    <Col md="6" sm="12">
                        <Row>
                            <label>Reogranize images</label>
                        </Row>
                        <Row>
                            <div className="prod-body-images">
                                <div className="root">
                                    <ListWrapper
                                        component={this.SortableList}
                                        axis={'xy'}
                                        // Sort images before they are passed in
                                        items={this.getItems(10, 110)}
                                        helperClass="stylizedHelper"
                                        className={classNames("list", "stylizedList", "grid")}
                                        itemClass={classNames("stylizedItem", "gridItem")}
                                        callbackUpdate={this.props.callbackUpdate}
                                    />
                                </div>
                                {/* NOTE: THis can be used if we want to reintroduce image uploads on edit */}
                                {/* <SortableList items={this.state.items} onSortEnd={this.onSortEnd} /> */}
                                {/* <ProductViewCarousel images={this.props.product.images} /> */}
                            </div>
                        </Row>
                    </Col>
                    <Col md="6" sm="6">
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col>
                                    <label> Name </label>
                                    <Field name="name" component="input" placeholder="Product Name" className="form-fields" />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label> Description </label>
                                    <Field name="description" component="textarea" placeholder="Add Description" className="form-fields" />
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
                                                <div key={cat.id}>
                                                    <label>
                                                        <Field name="catName" component="input" type="radio" value={cat.name}
                                                            onChange={
                                                                () => {
                                                                    this.props.product.catName = cat.name;
                                                                    this.props.product.catId = cat.id;
                                                                }} />{' '}

                                                        {cat.name}
                                                    </label>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </Col>
                                <Col sm="6">
                                    <label> Price</label>
                                    <Field name="price" component="input" placeholder="Price" className="form-fields" />
                                    <label style={{ marginTop: '16px' }}> Discount</label>
                                    <Field name="discount" component="input" placeholder="Discount" className="form-fields" />
                                </Col>
                            </Row>

                            <Row>
                                <Col><Button className="btn-width-100 float-left" color="secondary" type="button" onClick={this.returnToHome}>Cancel</Button></Col>
                                <Col><Button className="btn-width-100 float-right" color="primary" type="submit" >Save</Button></Col>
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
ProductEditForm = withRouter(connect(state => ({ initialValues: state.products.selected }))(ProductEditForm))
export default ProductEditForm;