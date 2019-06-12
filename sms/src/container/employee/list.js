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
import { getList } from '../../redux/user.redux';

class EmployeeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departName: '业务部',
            edit: {
                isEdit: false,
                id: -1,
                userInfo: {}
            }
        };
    }

    componentDidMount() {
        const departName = this.state.departName;
        this.props.getList(departName);
    }

    render() {
        console.log(this.props.user.userList)
        const userList = this.props.user.userList;
        
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        员工信息列表
                    </div>
                    <div className='content'>
                        <table className="imagetable" style={{ marginTop: '-70px' }}>
                            <thead>
                                <tr>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>初始密码</th><th>手机号码</th><th>创建日期</th><th>状态</th><th>身份</th><th>操作</th>
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
                                                <td>{''}</td>
                                                <td>{'正常'}</td>
                                                <td>{user.type}</td>
                                                <td className="operation1">
                                                    <a href='/employee/check'>查看</a>
                                                    <a href='/employee/create'>编辑</a>
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
                    <div style={{ bottom: '50px' }}>
                        <form action="" className="adjust" >
                            <input type="button" value="保存" className="button2" />
                            <input type="button" value="取消" className="button2" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

EmployeeList = connect(
    state => state,
    {
        getList
    }
)(EmployeeList);

export default EmployeeList;
