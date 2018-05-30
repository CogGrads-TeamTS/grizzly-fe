import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink,Container, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Category from '../Category/Category';
import CategoryModal from '../Category/Modals/categoryModal';
import CategorySortByButton from '../Category/CategorySortByButton';

class Tabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '3'
        };
    }
    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    render() {
        return (
                <Row>
                    <Col>
                        <div>
                            <Nav tabs>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '1' })}
                                        onClick={() => { this.toggle('1'); }}
                                    >
                                        PRODUCTS
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '2' })}
                                        onClick={() => { this.toggle('2'); }}
                                    >
                                        VENDORS
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: this.state.activeTab === '3' })}
                                        onClick={() => { this.toggle('3'); }}
                                    >
                                        CATEGORIES
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <TabContent activeTab={this.state.activeTab}>
                                <TabPane tabId="1">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Products</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="2">
                                    <Row>
                                        <Col sm="12">
                                            <h4>Vendors</h4>
                                        </Col>
                                    </Row>
                                </TabPane>
                                <TabPane tabId="3">
                                    <Row>
                                        <Col md="4" sm="4" xs="12">
                                            <CategorySortByButton />
                                        </Col>
                                        <Col md="4" sm="4" xs="12">
                                            <CategoryModal buttonLabel="Add Categories" title="Add Category" actionLabel="Done"/>
                                        </Col>
                                        <Col sm="12">
                                            <Category/>
                                        </Col>
                                    </Row>
                                </TabPane>
                            </TabContent>
                        </div>
                    </Col>
                </Row>
        );
    }
}
export default Tabs;