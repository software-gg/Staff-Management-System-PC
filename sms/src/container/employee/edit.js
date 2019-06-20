import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/style.css';
import '../../css/employment.css';
import '../../css/create-employee.css';
import '../../css/normalize.css';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/user.redux';
import { Link } from 'react-router-dom';
import { decoder } from '../../utils/utils';

class EmployeeCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            employee: {}
        };
    }

    componentDidMount() {
        const employee = this.props.user.employee;
        this.setState({
            employee
        })
    }

    handleChange(key, val) {
        console.log(this.state.employee)
        this.setState({
            employee: {
                ...this.state.employee,
                [key]: val
            }
        })
    }

    save = () => {
        const employee = this.state.employee;
        this.props.updateUser(employee._id, employee);
    }

    render() {
        const employee = this.state.employee;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div id="creat_frame">
                        <div className="title-create">
                            <h2 style={{ boxShadow: '0 0 0 #fff' }}>编辑员工信息</h2>
                        </div>
                        {/* <form method="post" action="js/create-employee.js"> */}
                        <div>
                            <div className="title1-create">
                                <h2 style={{ boxShadow: '0 0 0 #fff' }}>员工基本信息</h2>
                            </div>
                            <hr align="bottom" size="2" noshade="noshade" />
                            <ul>
                                <p><li><label className="label"> 部门：</label>
                                    <input onChange={(e) => this.handleChange('departName', e.target.value)} value={employee.departName || ''} type="text" placeholder="请输入部门名称" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">员工姓名：</label>
                                    <input onChange={(e) => this.handleChange('name', e.target.value)} value={employee.name || ''} type="text" placeholder="请输入姓名" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">初始密码：</label>
                                    <input onChange={(e) => this.handleChange('initPwd', e.target.value)} value={employee.initPwd || ''} type="text" placeholder="请输入姓名" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">员工工号：</label>
                                    <input onChange={(e) => this.handleChange('userId', e.target.value)} value={employee.userId || ''} type="text" placeholder="请输入工号" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">岗位名称：</label>
                                    <input disabled value={employee.type || ''} />
                                    {/* <input  /> */}
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><label className="label">性别：</label>
                                    <select onChange={(e) => this.handleChange('gender', e.target.value)} value={employee.gender || ''} type="text" placeholder="请输入工号">
                                        <option value='男'>男</option>
                                        <option value='女'>女</option>
                                    </select>
                                    <font size="3" color="red">*</font>
                                </p>
                                <p><li><label className="label">手机号码：</label>
                                    <input onChange={(e) => this.handleChange('phone', e.target.value)} value={employee.phone || ''} type="text" name="手机号码" placeholder="请输入手机号" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">邮箱：&nbsp;&nbsp;</label>
                                    <input onChange={(e) => this.handleChange('email', e.target.value)} value={employee.email || ''} type="text" name="邮箱" placeholder="请输入邮箱" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">工作QQ：</label>
                                    <input onChange={(e) => this.handleChange('qq', e.target.value)} value={employee.qq || ''} type="text" name="工作QQ" placeholder="请输入QQ" />
                                    <font size="3" color="red">*</font>
                                </li></p>
                                <p><li><label className="label">工作微信：</label>
                                    <input onChange={(e) => this.handleChange('wechat', e.target.value)} value={employee.wechat || ''} type="text" name="工作微信" placeholder="请输入微信" />
                                </li></p>

                                {/* <p><li><label className="label"> 职位级别：</label>
                                    <input onChange={(e) => this.handleChange('type', e.target.value)} value={employee.type || ''} type="text" name="工作微信" placeholder="请输入微信" />
                                </li></p> */}
                                {/* <p><li><label className="label"> 员工状态 ：</label>
                                    <select name="select" id="4">
                                        <option className='select'>正常</option>
                                        <option className='select'>异常</option>
                                    </select>
                                    <font size="3" color="red">*</font>
                                </li></p> */}
                                <div className="page_show"></div>
                                {/* setPage() */}
                                <li>
                                    <div id="create_control">
                                        <Link to='/employee/list'>
                                            <input onClick={this.save} type="button" id="crt_save" value="保存" />
                                        </Link>
                                        <Link to='/employee/list'>
                                            <input type="button" id="crt_canc" value="返回" />
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        {/* </form> */}
                    </div>
                </div >
            </div >
        );
    }
}

EmployeeCreate = connect(
    state => state,
    {
        updateUser
    }
)(EmployeeCreate);

export default EmployeeCreate;

