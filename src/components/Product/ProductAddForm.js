import _ from 'lodash';
import React from 'react';
import { Table, Container, Row, Col, Form, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUploader from 'react-images-upload';
import { renderField, required, maxLength40, minValue1, noSpecialChars, isValidPrice, numOnly } from '../common/redux_validation';

let ProductAddForm = (props) => {
    const { handleSubmit, returnToHome, onDrop } = props;

    if (props.categories == undefined) {
        return <div>loading...</div>
    }

    return (
        <Container fluid={true}>
            <Row style={{ marginTop: '30px' }}>
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
                <Col md="7" sm="6">
                    <form onSubmit={handleSubmit} autoComplete="off">
                        <Row>
                            <Col>
                                <Field name="name" label="Name" type="text" component={renderField}
                                    placeholder="Product Name" className="form-fields" validate={[required, maxLength40, minValue1, noSpecialChars]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field name="description" label="Description" type="textarea" component={renderField}
                                    placeholder="Add Description" className="form-fields" validate={[required]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field name="brand" label="Brand" type="input" component={renderField}
                                    placeholder="Add Brand" className="form-fields" validate={[required, maxLength40]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="6">
                                <label>Category</label>
                                <div className="product-category">
                                    {_.map(props.categories, (cat, i) => {
                                        // Select the first category
                                        let selected = "";
                                        if (i == 0) selected = "checked";
                                        return (
                                            <div key={cat.id}>
                                                <label>
                                                    <Field name="category" component="input" checked={selected} type="radio" value={String(cat.id)} /> {` ${cat.name}`}
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </Col>
                            <Col sm="6">
                                <Row>
                                    <Field name="price" label="Price" prefix="$ " type="input" component={renderField}
                                        placeholder="$ 10.00" className="form-fields" validate={[required, isValidPrice]} normalize={numOnly} />
                                </Row>
                                <Row>
                                    <Field name="discount" label="Discount" prefix="% " type="input" component={renderField}
                                        placeholder="% 0" className="form-fields" normalize={numOnly}/>
                                </Row>
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
    form: 'addProduct',
})(ProductAddForm)

export default ProductAddForm;