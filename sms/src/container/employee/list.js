import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/money.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getList, getEmployee, deleteUser } from '../../redux/user.redux';
import { Link } from 'react-router-dom';
import { decoder } from '../../utils/utils';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departName: '',
            importPath: '',
            exportPath: '',
            edit: {
                isEdit: false,
                id: -1,
                userInfo: {}
            }
        };
    }

    componentDidMount() {
        var departName = '';
        const userInfo = JSON.parse(sessionStorage.getItem('user')) || {};
        // console.log('userInfo: ', userInfo)
        if (userInfo.type === 'director')
            departName = userInfo.departName;
        this.setState({
            departName,
            importPath: sessionStorage.getItem('proxy') + `/user/import/1`,
            exportPath: sessionStorage.getItem('proxy') + `/user/export/1?departName=${departName}`
        })
        this.props.getList(departName);
    }

    // handleImport = () => {
    //     const departName = this.state.departName;
    //     window.location.href = `${proxy}/import/1?departName=${departName}`
    // }

    handleExport = () => {
        const departName = this.state.departName;
        window.location.href = this.state.exportPath;
    }

    render() {
        // console.log(this.props.user.userList)
        const userList = this.props.user.userList;
        // console.log(this.props.user)
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        员工信息列表
                    </div>
                    <div className="form">
                        {
                            this.state.departName === ''
                                ? <div className="title4">
                                    <form className="select2">
                                        <Link to='/employee/create'>
                                            <input type="button" className='button2' id="2" value="添加员工" />
                                        </Link>
                                    </form>
                                    <input onClick={this.handleExport} type="button" className="button2 right" id="4" value="导出员工" />
                                    <form method="post" action={this.state.importPath} enctype="multipart/form-data">
                                        <input type="submit" className="button2 right" id="3" value="导入员工" />
                                        <input name='userList' className="right" type="file" id="3" accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                                        <input type='text' name='departName' value={this.state.departName} hidden />
                                    </form>
                                </div>
                                : null
                        }
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>初始密码</th><th>手机号码</th><th>身份</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    userList.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{user.name}</td>
                                                <td>{user.departName}</td>
                                                <td>{user.userId}</td>
                                                <td>{user.initPwd}</td>
                                                <td>{user.phone}</td>
                                                {/* <td>{'正常'}</td> */}
                                                <td>{decoder(user.type)}</td>
                                                <td className="operation1">
                                                    <Link onClick={(e) => this.props.getEmployee(user._id)} to='/employee/check'>查看</Link>
                                                    {
                                                        this.state.departName === ''
                                                            ? <span>
                                                                <Link onClick={(e) => this.props.getEmployee(user._id)} to='/employee/edit'>编辑</Link>
                                                                <a onClick={(e) => this.props.deleteUser(user._id, user.userId)}>删除</a>
                                                            </span>
                                                            : null
                                                    }

                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{userList.length}</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    {/* <div style={{ bottom: '50px' }}>
                        <form action="" className="adjust" >
                            <input type="button" value="保存" className="button2" />
                            <input type="button" value="取消" className="button2" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div> */}
                </div>

            </div>
        );
    }
}

EmployeeList = connect(
    state => state,
    {
        getList,
        getEmployee,
        deleteUser
    }
)(EmployeeList);

export default EmployeeList;
