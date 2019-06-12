import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/create-employee.css';
import '../../css/style.css';
import '../../css/employment.css';

class EmployeeEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div id="creat_frame">

                        <div className="title-create">
                            <h2>创建员工信息</h2>
                        </div>
                        <form method="post" action="js/create-employee.js">
                            <div className="title1-create">
                                <h2>员工基本信息</h2>
                            </div>
                            <hr align="bottom" size="2" noshade="noshade" />
                            <p><li><label className="label"> 部门   ：</label>
                                <select name="select" id="1">
                                    <option className='select'>总经办</option>
                                    <option className='select'>业务部</option>
                                    <option className='select'>资源部</option>
                                    <option className='select'>研发部</option>
                                    <option className='select'>制作部</option>
                                    <option className='select'>人事部</option>
                                </select>
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">初始密码：</label>
                                <input type="password" className="input" name="密码" placeholder="请输入密码" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">员工姓名：</label>
                                <input type="password" className="input" name="姓名" placeholder="请输入姓名" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">员工工号：</label>
                                <input type="password" className="input" name="工号" placeholder="请输入工号" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">岗位名称：</label>
                                <input type="password" className="input" name="岗位" placeholder="请输入岗位" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><label className="label">岗位职责：</label>
                                <textarea className="text-input" cols="50" rows="5" placeholder="简单描述岗位职责信息内容" ></textarea>
                            </p>
                            <p><label className="label">性别：</label>
                                <input type="radio" value="男" name="sex" />
                                <label className="label">男</label>
                                <input type="radio" vaule="女" name="sex" />
                                <label className="label">女</label>
                                <font size="3" color="red">*</font>
                            </p>
                            <p><li><label className="label">工作电话：</label>
                                <input type="password" className="input" name="工作电话" placeholder="请输入工作电话" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">手机号码：</label>
                                <input type="password" className="input" name="手机号码" placeholder="请输入手机号" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">邮箱：</label>
                                <input type="password" className="input" name="邮箱" placeholder="请输入邮箱" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">工作QQ：</label>
                                <input type="password" className="input" name="工作QQ" placeholder="请输入QQ" />
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label">工作微信：</label>
                                <input type="password" className="input" name="工作微信" placeholder="请输入微信" />
                            </li></p>

                            <p><li><label className="label"> 职位级别 ：</label>
                                <select name="select" id="2">
                                    <option className='select'>总经理</option>
                                    <option className='select'>副总经理</option>
                                    <option className='select'>总监</option>
                                    <option className='select'>副总监</option>
                                    <option className='select'>经理</option>
                                    <option className='select'>副经理</option>
                                    <option className='select'>主管</option>
                                    <option className='select'>副主管</option>
                                    <option className='select'>助理</option>
                                    <option className='select'>组长</option>
                                    <option className='select'>副组长</option>
                                    <option className='select'>职员</option>
                                    <option className='select'>其他</option>
                                </select>
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label"> 职务类别 ：</label>
                                <select name="select" id="3">
                                    <option className='select'>总经理</option>
                                    <option className='select'>副总经理</option>
                                    <option className='select'>大区经理</option>
                                    <option className='select'>省经理</option>
                                    <option className='select'>销售经理</option>
                                    <option className='select'>销售助理</option>
                                    <option className='select'>销售代表</option>
                                    <option className='select'>人事经理</option>
                                    <option className='select'>人事主管</option>
                                    <option className='select'>人事助理</option>
                                    <option className='select'>资源经理</option>
                                    <option className='select'>资源主管</option>
                                    <option className='select'>资源代表</option>
                                    <option className='select'>技术总监</option>
                                </select>
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><li><label className="label"> 员工状态 ：</label>
                                <select name="select" id="4">
                                    <option className='select'>正常</option>
                                    <option className='select'>异常</option>
                                </select>
                                <font size="3" color="red">*</font>
                            </li></p>
                            <p><label className="label">是否离职：</label>
                                <input type="radio" value="是" name="sex" />
                                <label className="label">是</label>
                                <input type="radio" vaule="否" name="sex" />
                                <label className="label">否</label>
                                <font size="3" color="red">*</font>
                            </p>
                            <p><label className="label">备注：</label>
                                <textarea className="text-input" cols="50" rows="5" placeholder="指派销售任务给此员工" ></textarea>
                            </p>
                            <div className="page_show"></div>
                            {/* setPage() */}
                            <li>
                                <div id="create_control">
                                    <input type="button" id="crt_save" value="保存" />
                                    <input type="button" id="crt_canc" value="返回" />
                                </div>
                            </li>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default EmployeeEdit;
