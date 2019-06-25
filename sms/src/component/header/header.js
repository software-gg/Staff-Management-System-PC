import React from 'react';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux';
// import { getEmployee } from '../../redux/user.redux';

class Header extends React.Component {

    constructor(props) {
        super(props);
    }

    // getEmployee = () => {
    //     const { _id } = JSON.parse(sessionStorage.getItem('user'));
    //     this.props.getEmployee(_id);
    // }

    render() {
        return (
            <div className='title'>
                <div className='left'><a>员工考勤</a>管理后台</div>
                <div className="right">
                    {
                        this.props.msgCount === 0
                            ? <span>
                                <br /> <br />
                                </span>
                            : <div className="mess-num"><a>{this.props.msgCount}</a></div>
                    }
                    <Link to='/message'>
                        <i></i>
                        <div className="message">系统消息</div>
                    </Link>
                    <Link to='/employee/check?self=1'>
                        <i></i>
                        <div className="message">用户</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Header;
