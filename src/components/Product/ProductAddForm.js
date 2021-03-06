import _ from 'lodash';
import React from 'react';
import { Container, Row, Col,Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import ImageUploader from 'react-images-upload';
import { renderField, renderTextArea, required, maxLength40, 
    noSpecialChars, isValidPrice, numOnly, 
    percentMax, isValidPercentage} from '../common/redux_validation';

let ProductAddForm = (props) => {
    const { handleSubmit, returnToHome, onDrop } = props;

    if (props.categories === undefined) {
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
                                    placeholder="Product Name" className="form-fields" validate={[required, maxLength40, noSpecialChars]} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Field name="description" label="Description" type="textarea" component={renderTextArea}
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
                                    {_.map(props.categories, (cat) => {
                                        // Select the first category
                                        return (
                                            <div key={cat.id}>
                                                <label>
                                                    <Field name="category" component="input" type="radio" value={String(cat.id)} /> {` ${cat.name}`}
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </Col>
                            <Col sm="6">
                                    <Field name="price" label="Price" prefix="$ " type="input" component={renderField}
                                        placeholder="$ 10.00" className="form-fields" validate={[required, isValidPrice]} normalize={numOnly} />
                                    <br />
                                    <Field name="discount" label="Discount" prefix="% " type="input" component={renderField}
                                        placeholder="%" className="form-fields" validate={[isValidPercentage]} normalize={ percentMax}/>
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