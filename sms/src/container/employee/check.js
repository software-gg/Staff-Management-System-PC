import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/create-employee.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getQueryString, decoder } from '../../utils/utils'

class EmployeeCheck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {}
        };
    }

    componentDidMount() {
        if (getQueryString('self') === '1') {
            this.setState({
                userInfo: JSON.parse(sessionStorage.getItem('user'))
            })
        } else {
            this.setState({
                userInfo: this.props.user.employee
            })
        }
    }


    render() {
        const userInfo = this.state.userInfo;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div id="creat_frame">
                        <div className="title-create">
                            <h2 style={{ boxShadow: '0 0 0 #fff' }}>查看员工信息</h2>
                        </div>
                        <form method="post" action="js/create-employee.js">
                            <div className="title1-create">
                                <h2 style={{ boxShadow: '0 0 0 #fff' }}>员工基本信息</h2>
                            </div>
                            <hr style={{ textAlign: 'bottom' }} size="2" noshade="noshade" />
                            <p><li><label className="label"> 部门：</label>
                                <label className="input">{userInfo.departName}</label>
                            </li></p>
                            
                            <p><li><label className="label">员工姓名：</label>
                                <label className="input">{userInfo.name}</label>
                            </li></p>
                            <p><li><label className="label">初始密码：</label>
                                <label className="input">{userInfo.initPwd}</label>
                            </li></p>
                            <p><li><label className="label">员工工号：</label>
                                <label>{userInfo.userId}</label>
                            </li></p>
                            <p><li><label className="label">岗位名称：</label>
                                <label>{decoder(userInfo.type)}</label>
                            </li></p>
                            {/* <p><li><label className="label">岗位职责：</label>
                                <label>负责指定的区域的高校图书馆及公共图书馆市场开发，客户维护等销售工作，分析市场信息，根据客户需求及竞争对手，提供合理化的建议和方案</label>
                            </li></p> */}
                            <p><li><label className="label">性别：</label>
                                <label>{userInfo.gender}</label>
                            </li></p>
                            <p><li><label className="label">手机号码：</label>
                                <label>{userInfo.phone}</label>
                            </li></p>
                            <p><li><label className="label">邮箱：</label>
                                <label>{userInfo.email}</label>
                            </li></p>
                            <p><li><label className="label">工作QQ：</label>
                                <label>{userInfo.qq}</label>
                            </li></p>
                            <p><li><label className="label">工作微信：</label>
                                <label>{userInfo.wechat}</label>
                            </li></p>

                            {/* <p><li><label className="label"> 职位级别 ：</label>
                                <label>{userInfo.type}</label>
                            </li></p> */}
                            {/* <p><li><label className="label">是否离职：</label>
                                <label>在职</label>
                            </li></p> */}
                            <div className="page_show"></div>
                            {/* setPage() */}
                            <div id="create_control">
                                <Link to="/employee/list">
                                    <input type="button" id="crt_canc" value="返回" />
                                </Link>
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        );
    }
}

EmployeeCheck = connect(
    state => state,
    {}
)(EmployeeCheck);

export default EmployeeCheck;
