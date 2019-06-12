import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/create-employee.css';
import '../../css/style.css';
import '../../css/employment.css';

class EmployeeCheck extends React.Component {
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
                            <hr style={{ textAlign: 'bottom' }} size="2" noshade="noshade" />
                            <p><li><label className="label"> 部门   ：</label>
                                <label className="input">业务部</label>
                            </li></p>
                            <p><li><label className="label">初始密码：</label>
                                <label className="input">123456</label>
                            </li></p>
                            <p><li><label className="label">员工姓名：</label>
                                <label className="input">陈曦</label>
                            </li></p>
                            <p><li><label className="label">员工工号：</label>
                                <label>446</label>
                            </li></p>
                            <p><li><label className="label">岗位名称：</label>
                                <label>销售代表</label>
                            </li></p>
                            <p><li><label className="label">岗位职责：</label>
                                <label>负责指定的区域的高校图书馆及公共图书馆市场开发，客户维护等销售工作，分析市场信息，根据客户需求及竞争对手，提供合理化的建议和方案</label>
                            </li></p>
                            <p><li><label className="label">性别：</label>
                                <label>男</label>
                            </li></p>
                            <p><li><label className="label">工作电话：</label>
                                <label>18971335211</label>
                            </li></p>
                            <p><li><label className="label">手机号码：</label>
                                <label>15972060520</label>
                            </li></p>
                            <p><li><label className="label">邮箱：</label>
                                <label>93204248@qq.com</label>
                            </li></p>
                            <p><li><label className="label">工作QQ：</label>
                                <label>3493920</label>
                            </li></p>
                            <p><li><label className="label">工作微信：</label>
                                <label></label>
                            </li></p>

                            <p><li><label className="label"> 职位级别 ：</label>
                                <label>助理</label>
                            </li></p>
                            <p><li><label className="label"> 职务类别 ：</label>
                                <label>销售助理</label>
                            </li></p>
                            <p><li><label className="label"> 员工状态 ：</label>
                                <label>正常</label>
                            </li></p>
                            <p><li><label className="label">是否离职：</label>
                                <label>在职</label>
                            </li></p>
                            <p><li><label className="label">备注：</label>
                                <label>指派销售任务给此员工</label>
                            </li></p>
                            <div className="page_show"></div>
                            {/* setPage() */}
                            <div id="create_control">
                                <input type="button" id="crt_canc" value="返回" />
                            </div>
                        </form>
                    </div >
                </div >
            </div >
        );
    }
}

export default EmployeeCheck;
