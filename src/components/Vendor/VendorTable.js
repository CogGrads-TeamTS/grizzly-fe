import React from 'react';
import VendorRows from './VendorRows';
import { Table,Container, Row, Col } from 'reactstrap';
import _ from 'lodash';
import InfiniteScroll from 'react-infinite-scroller';

class VendorTable extends React.Component{
    render() {
        const divStyle = {
            marginLeft: '50%',
        };
      // const loader = <div className="loader" key="loader" style={divStyle}><img src="http://alt.ausgrads.academy/static/media/loading.ba28264b.svg" width="25%"/></div>;
        return (
            <Container>

                    <Row>
                        <Col md="12" sm="12">
                            <div className={"table-responsive"}>
                                <Table className={"table table-hover"}>
                                    <thead>
                                    <tr>
                                        <th scope={"col"}>Id</th>
                                        <th scope={"col"}>Vendor Name</th>
                                        <th scope={"col"}>Email</th>
                                        <th scope={"col"}>Contact</th>
                                        <th scope={"col"}></th>
                                        <th scope={"col"}></th>
                                        <th scope={"col"}></th>
                                    </tr>
                                    </thead>
                                    <tbody>

                                    {   _.map(this.props.vendors, ven => {
                                           // console.log(ven);
                                            return (<VendorRows vendor={ven} />)}
                                        )
                                    }
                                    </tbody>
                                </Table>
                            </div>
                        </Col>
                    </Row>

            </Container>
        )
    }


}
export default VendorTable;