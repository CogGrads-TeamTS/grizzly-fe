import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Glyphicon } from 'react-bootstrap'
import { Container, Row, Col, Button} from 'reactstrap';
import StarRatings from 'react-star-ratings';
import ProductViewCarousel from './ProductViewCarousel';

class ProductViewLayout extends Component {

    render(){
        return (
            <Container fluid={true} className="prod-view-container">
                <Row>
                    {/* HEAD OF THE PRODUCT VIEW */}
                    <Col md="6" sm="6" xs="6">
                        <div className="prod-view-head">
                            <Button outline className="prod-view-btn-return" color="info" onClick={this.returnToHome}>{"Back"}</Button>
                        </div>
                    </Col>
                    <Col md="6" sm="6" xs="6">
                        <div className="prod-view-head">
                            <Button outline color="info" className="float-right" onClick={this.handleEdit}>
                                <i className="fas fa-pencil-alt"></i> Edit
                            </Button>
                        </div>
                    </Col>
                </Row>
                    

                    {/* BODY OF THE PRODUCT VIEW */}
                    <div className="prod-view-body">
                        <Row>
                            <Col>
                                <div className="prod-title">
                                        <b>
                                            {this.upper(this.props.product.name) + " "}
                                        </b>
                                        {"by " + this.upper(this.props.product.brand)}
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <div className="prod-title-rating">
                                    <StarRatings 
                                        rating={this.props.product.rating}
                                        numberOfStars={5}
                                        changeRating={false}
                                        name='rating'
                                        starDimension="20px"
                                        starSpacing="2px"
                                        starRatedColor='rgb(108, 116, 217)'
                                    />
                                </div>
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6" sm="6">
                                <ProductViewCarousel />
                            </Col>

                            <Col md="6" sm="6" height="100%">
                                <div className="prod-body-title">
                                    Product Description
                                </div>

                                <div className="prod-body-content">
                                    {this.props.product.description}
                                </div>

                                <div className="prod-footer">
                                    <div className="prod-body-price">
                                        {`AUD $${this.props.product.price}`}
                                    </div>

                                    <div className="prod-body-discount">
                                        {`${this.props.product.discount}% Off`}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    
            </Container>

        )
    }

    handleEdit = () => {
        this.props.history.push(`/product/${this.props.product.id}/edit`);
    }

    returnToHome = () => {
        this.props.history.push("/");
    }



    upper = (string) => { // Convert string into uppercase
        if(string === null) {return "Not Specified"}
        return string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        })
    }
}

export default withRouter(ProductViewLayout);