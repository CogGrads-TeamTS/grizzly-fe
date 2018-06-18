import React, {Component} from 'react'
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import { Container, Row, Col, Form,Input,Label, FormGroup, UncontrolledCollapse, Button, CardBody, Card } from 'reactstrap';

class ProductEditForm extends Component{

    constructor(props)
    {
        super(props);
       console.log(props.product.category.id);
        this.state = {
            id:props.product.id,
            name: props.product.name,
            brand: props.product.brand,
            description: props.product.description,
            price:props.product.price,
            category:props.product.category.id,
            discount:props.product.discount
        };

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleProductNameChange = this.handleProductNameChange.bind(this);
        this.handleProductBrandChange = this.handleProductBrandChange.bind(this);
        this.handleProductDescChange = this.handleProductDescChange.bind(this);
        this.handleProductPriceChange = this.handleProductPriceChange.bind(this);
        this.handleProductDiscountChange = this.handleProductDiscountChange.bind(this);


        //const {handleSubmit} = props;
        //const { categories } = props;
    }



    handleProductNameChange(event) {
        console.log(event.target.value);
        this.setState = {
            name: event.target.value
        }
    }
    handleProductBrandChange(event){
        this.setState = {
            brand: event.target.value
        }
    }
    handleProductDescChange(event){
        this.setState = {
            description: event.target.value
        }
    }
    handleProductPriceChange(event){
        this.setState = {
            price: event.target.value
        }
    }
    handleProductDiscountChange(event){
        this.setState = {
            discount: event.target.value
        }
    }
    handleSubmit(event) {
        console.log('test');
        this.props.confirm({
            id: this.state.id,
            name: this.state.name,
            brand: this.state.brand,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
            discount: this.state.discount
        });
    }

    returnToHome = () => {
        this.props.history.push("/");
    };

render(){ console.log(this.props.product);
    return (
        <Container fluid={true}>

            <Row>

                <Col md="6" sm="6">
                    <img name="img" className="prod-image-img" src="https://via.placeholder.com/450x370" width="100%"/>
                    <div className="prod-image-caption">Product Image Carousel</div>
                </Col>
                <Col md="6" sm="6" height="100%">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Input type="text" name="name" defaultValue={this.state.name} onChange= {this.handleProductNameChange} /><br/>
                        </FormGroup>
                        <FormGroup>
                            <Input type="text" name="brand" defaultValue={this.state.brand} onChange= {this.handleProductBrandChange} /><br/>
                        </FormGroup>
                        <FormGroup>
                            <Input name="description" type="textarea" onChange= {this.handleProductDescChange} defaultValue={this.state.description}/>
                        </FormGroup>

                        <div className="text-left">
                            <Button outline color="primary" id="toggler" style={{ marginBottom: '1rem' }} >Category</Button>
                            <UncontrolledCollapse toggler="#toggler">
                                <Card>
                                    <CardBody className="cat-collapse">
                                        <div>
                                            <div>

                                                {_.map(this.props.categories, cat => {

                                                    return (
                                                        <div>
                                                            <label>
                                                                <Input name="category" component="input" type="radio" defaultValue={cat.name}
                                                                      /> {' '}
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
                                <FormGroup>
                                    <Input name="price" type="text" onChange= {this.handleProductPriceChange} defaultValue={this.state.price} style={{marginTop: "5%"}}/><br/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6" sm="6" height="100%">
                                <FormGroup>
                                    <Input name="discount" type="text" defaultValue={this.state.discount} onChange= {this.handleProductDiscountChange} style={{marginTop: "5%"}}/><br/>
                                </FormGroup>
                            </Col>
                        </Row>

                        <div className="prod-footer">
                            <div className="prod-body-price">
                                <Button outline color="primary" type="submit">Edit</Button>
                            </div>

                            <div className="prod-body-discount">
                                <Button outline color="secondary" onClick={this.returnToHome}>Cancel</Button>
                            </div>
                        </div>

                    </Form>


                </Col>

            </Row>
        </Container>

    )
}

}


export default withRouter(ProductEditForm);