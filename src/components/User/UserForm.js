import React from 'react';
import { Row, Col, Button } from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux'



let UserForm = (props) => {
    const {handleSubmit, reset, notActive} = props;
    console.log(props);
    return(
        <form onSubmit={handleSubmit}>
            <Row>
                <Col lg="12">
                    
                    <Field name="name" component="input" type="text" disabled={props.isDisabled} className="userform-fields"/>
                    <label className="userform-label">ID</label>
                    <Field name="id" component="input" type="text" disabled className="userform-fields"/>
                    <label className="userform-label">Designation</label>
                    <Field name="designation" component="input" type="text" disabled={props.isDisabled} className="userform-fields"/>
                    <label className="userform-label">Office</label>
                    <Field name="office" component="input" type="text" disabled={props.isDisabled} className="userform-fields"/>
                    <Button className={`btn-profile m-r-5 float-right ${props.isActive}`} color="primary" type="submit" >Save Profile</Button>
                    <Button className={`btn-profile m-l-5 ${props.isActive}`} onClick={function(){reset(); notActive()}}>Cancel</Button>
                </Col>
            </Row>
           
        </form>
    )
}

UserForm = reduxForm({
    form: 'userForm'
  })(UserForm)

  UserForm = connect(
    state => ({
        initialValues: state.user.user// pull initial values from account reducer
      })
  )(UserForm)
  

  export default UserForm;