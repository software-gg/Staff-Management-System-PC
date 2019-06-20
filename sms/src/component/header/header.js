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
                <br /><br />
                <div className="right">
                    {/* <div className="mess-num"><a>5</a></div> */}
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

// 错误！！！为什么？
// Header = connect(
//     state=>state,
//     {
//         getEmployee
//     }
// )

export default Header;
