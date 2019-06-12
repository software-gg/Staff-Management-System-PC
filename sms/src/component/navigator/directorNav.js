import React from 'react';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { Link } from 'react-router-dom';

class DirectorNav extends React.Component {
    render() {
        return (
            <div className="nav">
                <dl>
                    <dt>
                        <Link to='/'>
                            <i></i>
                            <div className="title2">首页</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <i></i>
                        <div className="title2">考勤管理</div>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/apply/workaholic'>
                            <i></i>
                            <div className="title2">加班审批</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/apply/goldbrick'>
                            <i></i>
                            <div className="title2">请假审批</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <i></i>
                        <div className="title2">工作管理</div>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/arrange/general'>
                            <i></i>
                            <div className="title2">整体安排</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/arrange/detail'>
                            <i></i>
                            <div className="title2">细致安排</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/attend'>
                            <i></i>
                            <div className="title2">工作情况</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/'>
                            <i></i>
                            <div className="title2">薪酬统计</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/employee/list'>
                            <i></i>
                            <div className="title2">员工管理</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/employee/check'>
                            <i></i>
                            <div className="title2">用户管理</div>
                        </Link>
                    </dt>
                </dl>
                <dl>
                    <dt>
                        <Link to='/login'>
                            <i></i>
                            <div className="title2">安全退出</div>
                        </Link>
                    </dt>
                </dl>
            </div >
        );
    }
}

export default DirectorNav;
