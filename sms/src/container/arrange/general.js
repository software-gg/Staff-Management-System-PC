import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { calLastMonth, calNextMonth, formatTime, decoder } from '../../utils/utils';
import { search, insertAllArr, getAllArr, editAllArr, deleteAllArr, editEmployee } from '../../redux/allArrange.redux';
import EditableItem from '../../component/editableItem/editableItem';
import { Link } from 'react-router-dom';

class ArrangeGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departName: '',
            month: '',
            searchName: 'userId',
            searchValue: '',
            userList: [],
            selectList: [],
            edit: {
                isEdit: false,
                _id: -1,
                allArrange: {}
            }
        };
    }

    componentDidMount() {
        const { departName } = JSON.parse(sessionStorage.getItem('user'));
        const users = JSON.parse(sessionStorage.getItem('list'));
        const current = new Date();
        const month = current.getFullYear() + '-' + current.getMonth() + '-1';
        this.setState({
            departName,
            month,
            userList: users.map(v => v.userId),
            selectList: ['ordinary', 'extra']
        })
        this.props.getAllArr(departName, month);
    }

    handleAdjust = (checked, arrange) => {
        checked = checked ? 1 : 0;
        const newState = {
            ...arrange,
            isTemp: checked
        }
        this.setState(newState);
        this.props.editAllArr(newState._id, newState);
    }

    handleLast = () => {
        const [year, month, day] = calLastMonth(this.state.month).split('-');
        const lastMonth = `${year}-${month}-1`;
        const { departName } = this.state;
        this.setState({
            month: lastMonth
        })
        this.props.getAllArr(departName, lastMonth);
    }

    handleNext = () => {
        const [year, month, day] = calNextMonth(this.state.month).split('-');
        const nextMonth = `${year}-${month}-1`;
        const { departName } = this.state;
        this.setState({
            month: nextMonth
        })
        this.props.getAllArr(departName, nextMonth);
    }

    handleEdit = (allArrange, _id) => {
        this.setState({
            edit: {
                isEdit: true,
                _id,
                allArrange
            }
        })
    }

    handleComplete = (_id) => {
        const { allArrange } = this.state.edit;
        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                allArrange: {}
            }
        })

        this.props.editAllArr(_id, allArrange)
    }

    handleChange = (key, val) => {
        this.setState({
            edit: {
                ...this.state.edit,
                allArrange: {
                    ...this.state.edit.allArrange,
                    [key]: val || ''
                }
            }
        })
    }

    handleSearchChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    handleArrange = (allArr, _id) => {
        this.props.editEmployee(allArr);
    }

    insertTempArranges = () => {
        const allArrangeInfo = this.props.allArrange.allArrangeInfo;
        const allArrange = {
            departName: this.state.departName || '',
            previousId: 0,
            isTemp: 0,
            month: this.state.month,
            type: 'temp',
            onTime: '',
            offTime: '',
            users: JSON.parse(sessionStorage.getItem('list'))
        }

        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                allArrange
            }
        })

        this.props.insertAllArr([allArrange]);
    }

    insertArranges = () => {
        const allArrangeInfo = this.props.allArrange.allArrangeInfo;
        const allArrange = {
            departName: this.state.departName || '',
            previousId: 0,
            isTemp: 0,
            month: this.state.month,
            type: 'ordinary',
            onTime: '',
            offTime: '',
            users: []
        }

        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                allArrange
            }
        })

        this.props.insertAllArr([allArrange]);
    }

    handleDelete = (_id) => {
        this.props.deleteAllArr(_id)
    }

    handleSearch = () => {
        const { departName, month, searchName, searchValue } = this.state;
        const condition = {
            departName,
            month
        }
        if (searchValue !== '')
            condition[searchName] = searchValue;
        this.props.search(condition);
    }

    render() {
        const [year, month, day] = this.state.month.split('-');
        const { allArrangeInfo } = this.props.allArrange;
        const edit = this.state.edit;
        // console.log('allArrangeInfo: ', allArrangeInfo);
        // console.log(this.state)
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        整体班次安排
                    </div>
                    <div>
                        <div style={{ float: 'right' }}>
                            <input onChange={(e) => this.handleSearchChange('searchValue', e.target.value)} value={this.state.searchValue} type="text" placeholder="请输入关键字" />
                            <select onChange={(e) => this.handleSearchChange('searchName', e.target.value)} value={this.state.searchName}  name="keyword" id="select-keyword">
                                <option value="userId" className="key">工号</option>
                                <option value="departName" className="key">部门</option>
                            </select>
                            <input onClick={this.handleSearch} type="button" value="查询" className="button" />
                        </div>
                    </div>
                    <div className="form">
                        <div className="title4">
                            <form action="" className="select2">
                            {
                                this.state.departName === ''
                                    ? <input onClick={this.insertTempArranges} type="button" className='button2' id="2" value="添加临时性加班" />
                                    : <input onClick={this.insertArranges} type="button" className='button2' id="2" value="添加工作安排" />
                            }
                            </form>
                            <div className="month" style={{ margin: '0 auto'}}>
                                <a onClick={this.handleLast} id="last"><i></i></a>
                                <span >{year}年{month}月</span>
                                <a onClick={this.handleNext} id="next"><i></i></a>
                            </div>
                            {/* <div className=" right" style={{ fontSize: '15px' }}>
                                请选择月份：
                                <form style={{ display: 'inline-block' }} action="" id="working-type">
                                    <select>
                                        <option value='三班倒' className="key">三班倒</option>
                                        <option value='小时工' className="key">小时工</option>
                                        <option value='八小时' className="key">八小时工作制</option>
                                    </select>
                                </form>
                            </div> */}
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>班次编号</th><th>部门</th><th>日期</th><th> 上班时间</th><th>下班时间</th><th>班次性质</th><th>员工安排</th><th>操作</th><th>调整</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allArrangeInfo.map(v => {
                                        return {
                                            ...v,
                                            onTime: formatTime(v.onTime),
                                            offTime: formatTime(v.offTime)
                                        }
                                    }).map((allArr, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td><EditableItem
                                                    isEdit={edit._id === allArr._id}
                                                    name="departName"
                                                    val={allArr.departName || ''}
                                                    newVal={edit.allArrange.departName || ''}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td>{allArr.month || ''}</td>
                                                <td><EditableItem
                                                    isEdit={edit._id === allArr._id}
                                                    name="onTime"
                                                    val={allArr.onTime || ''}
                                                    newVal={edit.allArrange.onTime || ''}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    isEdit={edit._id === allArr._id}
                                                    name="offTime"
                                                    val={allArr.offTime || ''}
                                                    newVal={edit.allArrange.offTime || ''}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    isEdit={edit._id === allArr._id}
                                                    name="type"
                                                    val={decoder(allArr.type || '')}
                                                    newVal={edit.allArrange.type || ''}
                                                    handleChange={this.handleChange}
                                                    selectList={this.state.selectList}
                                                /></td>
                                                <td>{allArr.users.length || 0}个职员</td>
                                                <td className="operation1">
                                                    {
                                                        edit.isEdit
                                                            ? (
                                                                <span>
                                                                    <a onClick={(e) => this.handleComplete(allArr._id)}>完成</a>
                                                                </span>

                                                            ) : (
                                                                <span>
                                                                    <Link to='/employee/select' onClick={(e) => this.handleArrange(allArr, allArr._id)}>安排员工</Link>
                                                                    <a onClick={(e) => this.handleEdit(allArr, allArr._id)}>编辑</a>
                                                                    <a onClick={(e) => this.handleDelete(allArr._id)}>删除</a>
                                                                </span>
                                                            )
                                                    }

                                                </td>
                                                <td className="operation1">
                                                    <input onClick={(e) => this.handleAdjust(e.target.checked, allArr)} type='checkbox' checked={allArr.isTemp} />临时调整
                                                </td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>

                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{allArrangeInfo.length}</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    {/* <div >
                        <form action="" className="adjust" style={{ bottom: '30%' }}>
                            <input type="button" value="临时调整" className="button2" />
                            <input type="button" value="永久调整" className="button3" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div> */}
                </div>
            </div>
        );
    }
}

ArrangeGeneral = connect(
    state => state,
    {
        getAllArr,
        insertAllArr,
        editAllArr,
        deleteAllArr,
        editEmployee,
        search
    }
)(ArrangeGeneral);

export default ArrangeGeneral;
