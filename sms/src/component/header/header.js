import React from 'react';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { logout } from '../../redux/user.redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='title'>
                <div className='left'><a>员工考勤</a>管理后台</div>
                <div className="right">
                    <div className="mess-num"><a>5</a></div>
                    <Link to='/message'>
                        <i></i>
                        <div className="message">系统消息</div>
                    </Link>
                    <Link onClick={this.props.logout} to='/user/check'>
                        <i></i>
                        <div className="message">用户</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
