import React, {Component} from 'react'
import { Table,Container, Row, Col} from 'reactstrap';
import { connect } from 'react-redux';
import _ from 'lodash';
import { productFetchDataByID, deleteCategory, editCategoryAction, addCategoryAction } from '../actions/ProductActions';
import star from '../Asset/star-full.png';

class ProductViewLayout extends Component {

    renderStars(){
        console.log("RENDERING STARS")
        var i;
        const stars = [];
        for (i = 1; i < this.props.product.rating; i++){
            stars.push(<img src={star} style={{marginBottom:4}}/>)
        }
        return stars;
    }

    render(){

        console.log("is here")
        console.log(this.props.product)

        return (
            <Container fluid={true}>
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
                                {this.renderStars()} {this.props.product.rating} 
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col md="6" sm="6">
                            <img className="prod-image-img" src="https://via.placeholder.com/450x370" width="100%"/>
                            <div className="prod-image-caption">Product Image Carousel</div>
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
                                    {`${this.props.product.discount}% OFF`}
                                </div>
                            </div>
                        </Col>
                    </Row>
            </Container>

        )
    }

    upper = (string) => { // Convert string into uppercase
        return string.toLowerCase().replace(/\b[a-z]/g, function(letter) {
            return letter.toUpperCase();
        })
    }
}

export default ProductViewLayout;