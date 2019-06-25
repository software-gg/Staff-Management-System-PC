import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import EditableItem from '../../component/editableItem/editableItem';
import { getDepartList, editDepart, deleteDepart, insertDepart } from '../../redux/department.redux';

class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            departments: [{
                departName: '业务部',
                director: '41621328',
                workStatus: '996'
            }],
            edit: {
                isEdit: false,
                _id: -1,
                oldDepart: {},
                depart: {}
            }
        };
    }

    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('user')) || {};

        this.props.getDepartList(user.departName);
        this.setState({
            user
        })
        // console.log(this.props.department);
    }

    edit(_id, depart) {
        this.setState({
            edit: {
                isEdit: true,
                _id,
                oldDepart: depart,
                depart
            }
        })
    }

    handleChange = (key, val) => {
        this.setState({
            edit: {
                ...this.state.edit,
                depart: {
                    ...this.state.edit.depart,
                    [key]: val
                }
            }
        })
    }

    delete(_id, depart) {
        this.props.deleteDepart(_id, depart);
    }

    complete = () => {
        const { depart, oldDepart } = this.state.edit;
        // console.log(oldDepart, depart);
        this.props.editDepart(depart._id, oldDepart, depart);
        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                oldDepart: {},
                depart: {}
            }
        })
    }

    insert = () => {
        const depart = {
            departName: '',
            director: '',
            workStatus: ''
        }
        this.props.insertDepart([depart]);
    }

    render() {
        var departments = this.props.department.departInfo || [];
        const edit = this.state.edit || {};
        const users = JSON.parse(sessionStorage.getItem('list')) || [];
        // console.log(users, departments)
        departments = departments.map(depart => {
            const list = users.filter(u => u.userId === depart.director) || [];
            return {
                ...depart,
                name: list.length >= 1 ? list[0].name : ''
            }
        })
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        部门列表
                    </div>
                    <div className="form">
                        <div className="title4">
                            {
                                this.state.user.type === 'boss'
                                    ? <form action="" className="select2">
                                        <input onClick={this.insert} type="button" className='button2' id="2" value="添加部门" />
                                    </form>
                                    : null
                            }

                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>部门号</th><th>部门名</th><th>部门主管</th><th>部门主管工号</th><th> 部门上班性质</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    departments.map((depart, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><EditableItem
                                                    handleChange={this.handleChange}
                                                    isEdit={depart._id === edit._id}
                                                    name='departName'
                                                    val={depart.departName}
                                                    newVal={edit.depart.departName}
                                                /></td>
                                                <td>{depart.name}</td>
                                                <td><EditableItem
                                                    handleChange={this.handleChange}
                                                    isEdit={depart._id === edit._id}
                                                    name='director'
                                                    val={depart.director}
                                                    newVal={edit.depart.director}
                                                /></td>
                                                <td><EditableItem
                                                    handleChange={this.handleChange}
                                                    isEdit={depart._id === edit._id}
                                                    name='workStatus'
                                                    val={depart.workStatus}
                                                    newVal={edit.depart.workStatus}
                                                /></td>
                                                <td className="operation1">
                                                    {
                                                        this.state.user.type === 'boss' ?
                                                            edit.isEdit
                                                                ? <span>
                                                                    <a onClick={(e) => this.complete()}>完成</a>
                                                                </span>
                                                                : <span>
                                                                    <a onClick={(e) => this.edit(depart._id, depart)}>编辑</a>
                                                                    <a onClick={(e) => this.delete(depart._id, depart)}>删除</a>
                                                                </span>
                                                            : null
                                                    }

                                                    {/* <a onClick={(e) => this.select(depart._id)}>任职主管</a> */}
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{departments.length}</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    <div >
                    </div>
                </div>
            </div>
        );
    }
}

Department = connect(
    state => state,
    {
        getDepartList,
        editDepart,
        deleteDepart,
        insertDepart
    }
)(Department);

export default Department;
