import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/money.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { editAllArr } from '../../redux/allArrange.redux';

class EmployeeSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            edition: {}
        };
    }

    componentDidMount() {

        const users = JSON.parse(sessionStorage.getItem('list'));
        const selectedUsers = this.props.allArrange.edition.users || [];
        console.log(selectedUsers)
        const idList = selectedUsers.map(v => v._id || v[0]._id);
        console.log(selectedUsers);
        console.log(idList);
        this.setState({
            users: users.map(v => {
                return {
                    ...v,
                    isSelect: idList.includes(v._id)
                }
            }),
            edition: this.props.allArrange.edition
        })
    }

    handleSelect = (key) => {
        const nextUsers = this.state.users;
        nextUsers[key].isSelect = !nextUsers[key].isSelect
        this.setState(nextUsers)
    }

    save = () => {
        const users = this.state.users
            .filter(v => v.isSelect)
            .map(v => {
                delete v.isSelect;
                return v;
            })
        const allArrange = this.props.allArrange.edition;
        allArrange.users = users;
        this.props.editAllArr(allArrange._id, allArrange);
    }

    render() {
        // console.log(edition)
        const users = this.state.users;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        员工选择
                    </div>
                    <div className='content'>
                        <table className="imagetable" style={{ marginTop: '-70px' }}>
                            <thead>
                                <tr>
                                    <th>选择</th><th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((v, index) => {
                                        return (
                                            <tr key={index}>
                                                <td><input
                                                    checked={users[index].isSelect}
                                                    onChange={(e) => this.handleSelect(index)}
                                                    type='checkbox'
                                                /></td>
                                                <td>{index + 1}</td>
                                                <td>{v.name}</td>
                                                <td>{v.departName}</td>
                                                <td>{v.userId}</td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{this.state.users.length}</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    <div style={{ bottom: '50px' }}>
                        <div className="adjust" >
                            <Link to='/arrange/general'>
                                <input onClick={this.save} type="button" value="保存" className="button2" />
                            </Link>
                            <Link to='/arrange/general'>
                                <input type="button" value="取消" className="button2" style={{ backgroundColor: '#b5cfd2' }} />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

EmployeeSelect = connect(
    state => state,
    {
        editAllArr
    }
)(EmployeeSelect)

export default EmployeeSelect;
