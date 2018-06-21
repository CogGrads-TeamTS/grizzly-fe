import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchUserByID } from '../../actions/userActions';
import User from '../User/User';

class Sidebar extends Component {

    componentDidMount(){
        this.props.fetchUserData(1);
    }
    

    render() {
        const userData = this.props.userIsLoading  ? null : <User userData={this.props.user}/>;
        console.log(this.props.user);
        return ( 
            
            <div> {this.props.user !== undefined && <User userData={this.props.user}/>}</div>
            // {this.props.userIsLoading ? <User userData={this.props.user}/> : null}
           
        );
    }
}

const mapStateToProps = (state) => { console.log(state.user.user)
    return{
        user: state.user.user,
        userIsLoading: state.userIsLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUserData: (id) => dispatch(fetchUserByID(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
