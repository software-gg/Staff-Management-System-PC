import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
// import { getList } from '../../redux/user.redux';

class AuthRoute extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        // console.log(this.props.user.isAuth);
        return (
            <div>
                {
                    sessionStorage.getItem('user')
                        ? null
                        : <Redirect to='/login' />
                }
            </div>
        );
    }
}

AuthRoute = connect(
    state => state,
    {}
)(AuthRoute)

export default AuthRoute;
