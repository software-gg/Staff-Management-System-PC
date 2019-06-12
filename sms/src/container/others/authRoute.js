import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class AuthRoute extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {
                    this.props.user.isAuth
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
