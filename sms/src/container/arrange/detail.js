import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import EditableItem from '../../component/editableItem/editableItem';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { calLastMonth, calNextMonth } from '../../utils/utils'
import { connect } from 'react-redux';
import { search, getArrList, insertArr, deleteArr, editArr } from '../../redux/arrange.redux';
import { decoder, colorRender, formatTime } from '../../utils/utils';

// export function getArrList(departName = '', month = '')
// export function insertArr(arrange = [])
// export function deleteArr(_id)
// export function editArr(_id, arrange)

class ArrangeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectList: [],
            users: [],
            userList: [],
            searchName: 'userId',
            searchValue: '',
            departName: '',
            month: '',
            edit: {
                isEdit: false,
                _id: -1,
                arrange: {}
            }
        };
    }

    componentDidMount() {
        const { departName } = JSON.parse(sessionStorage.getItem('user'));
        const users = JSON.parse(sessionStorage.getItem('list')) || [];
        const current = new Date();
        console.log(current);
        const month = current.getFullYear() + '-' + current.getMonth() + '-1';
        const selectList = ['ordinary', 'extra'];
        this.setState({
            users,
            departName,
            month,
            selectList,
            userList: users.map(v => v.userId)
        })
        // console.log(departName, month)
        this.props.getArrList(departName, month);
    }

    handleAdjust = (checked, arrange) => {
        checked = checked ? 1 : 0;
        const newState = {
            ...arrange,
            isTemp: checked
        }
        this.setState(newState);
        this.props.editArr(newState._id, newState);
    }

    handleInsert() {
        const users = this.state.users;
        const { departName, month } = this.state;
        this.props.insertArr({
            departName: departName || '',
            userId: users[0].userId || '',
            type: 'ordinary',
            month,
        })
        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                arrange: {
                    departName: departName || '',
                    userId: users[0].userId || '',
                    type: 'ordinary',
                    month,
                    isTemp: 0
                }
            }
        })
    }

    handleEdit(_id, arrange) {
        this.setState({
            edit: {
                isEdit: true,
                _id: _id,
                arrange
            }
        })
    }

    handleComplete(_id) {
        const newArrange = this.state.edit.arrange;
        // console.log(this.state.edit.arrange);
        this.props.editArr(_id, newArrange);
        this.setState({
            edit: {
                isEdit: false,
                _id: -1,
                arrange: {}
            }
        })
    }

    handleLast = () => {
        const { departName } = this.state;
        const month = this.state.month;
        const lastMonth = calLastMonth(month);
        this.setState({
            month: lastMonth
        })
        this.props.getArrList(departName, lastMonth);
    }

    handleNext = () => {
        const { departName } = this.state;
        const month = this.state.month;
        const nextMonth = calNextMonth(month);
        this.setState({
            month: nextMonth
        })
        // console.log(nextMonth);
        this.props.getArrList(departName, nextMonth);
    }

    handleSearchChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    handleSearch = () => {
        // const { departName } = JSON.parse(sessionStorage.getItem('user'));
        const { month, departName, searchName, searchValue } = this.state;
        const condition = {
            departName,
            month
        }

        console.log(searchName)
        if (searchValue !== '')
            condition[searchName] = searchValue;
        this.props.search(condition)
    }

    handleChange = (key, val) => {

        const newState = {
            edit: {
                ...this.state.edit,
                arrange: {
                    ...this.state.edit.arrange,
                    [key]: val || ''
                }
            }
        };
        // console.log(newState)
        this.setState(newState);
    }

    render() {
        // const search = this.state.search;
        const month = this.state.month;
        const monthArr = month.split('-');
        const nowYear = monthArr[0], nowMonth = monthArr[1];
        const arrangeInfo = this.props.arrange.arrangeInfo.map(v => {
            return {
                ...v,
                onTime: formatTime(v.onTime),
                offTime: formatTime(v.offTime)
            }
        }).map(v => {
            const x = this.state.users.filter(u => u.userId === v.userId);
            return {
                ...v,
                name: x.length >= 1 ? x[0].name : ''
            }
        });
        const edit = this.state.edit;
        // console.log("arrangeInfo: ", arrangeInfo);
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        细致班次安排
                    </div>
                    <div>
                        <div style={{ float: 'right' }}>
                            <input onChange={(e) => this.handleSearchChange('searchValue', e.target.value)} value={this.state.searchValue} type="text" placeholder="请输入关键字" />
                            <select onChange={(e) => { console.log(e); this.handleSearchChange('searchName', e.target.value) }} value={this.state.searchName} name="keyword" id="">
                                <option value="userId" className="key">工号</option>
                                <option value="departName" className="key">部门</option>
                            </select>
                            <input onClick={this.handleSearch} type="button" value="查询" className="button" />
                        </div>
                    </div>
                    <div className="form">
                        <div className="title4">
                            <form action="" className="select2">
                                <input type="button" onClick={(e) => this.handleInsert()} className='button2' id="2" value="添加工作安排" />
                            </form>
                            <div className="month" style={{ margin: '0 auto' }}>
                                <a onClick={this.handleLast} id="last"><i></i></a>
                                <span>{nowYear}年{nowMonth}月</span>
                                <a onClick={this.handleNext} id="next"><i></i></a>
                            </div>
                            <input type="button" className="button2 right" id="3" value="导入安排" />
                            <input type="button" className="button2 right" id="4" value="导出安排" />
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>日期</th><th>上班时间</th><th>下班时间</th><th>状态</th><th>操作</th><th>调整</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arrangeInfo.map((arrange, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{arrange.name}</td>
                                                <td><EditableItem
                                                    name='departName'
                                                    val={arrange.departName || ''}
                                                    newVal={edit.arrange.departName || ''}
                                                    isEdit={edit._id === arrange._id}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    name='userId'
                                                    val={arrange.userId || ''}
                                                    newVal={edit.arrange.userId || ''}
                                                    isEdit={edit._id === arrange._id}
                                                    handleChange={this.handleChange}
                                                    selectList={this.state.userList}
                                                /></td>
                                                <td>{arrange.month}</td>
                                                <td><EditableItem
                                                    name='onTime'
                                                    val={arrange.onTime || ''}
                                                    newVal={edit.arrange.onTime || ''}
                                                    isEdit={edit._id === arrange._id}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    name='offTime'
                                                    val={arrange.offTime || ''}
                                                    newVal={edit.arrange.offTime || ''}
                                                    isEdit={edit._id === arrange._id}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    name='type'
                                                    val={decoder(arrange.type) || ''}
                                                    newVal={edit.arrange.type || ''}
                                                    isEdit={edit._id === arrange._id}
                                                    handleChange={this.handleChange}
                                                    selectList={this.state.selectList}
                                                /></td>
                                                <td className="operation1">
                                                    {
                                                        edit.isEdit
                                                            ? (<span>
                                                                <a onClick={(e) => this.handleComplete(arrange._id)}>完成</a>
                                                            </span>)
                                                            : (<span>
                                                                <a onClick={(e) => this.handleEdit(arrange._id, arrange)}>编辑</a>
                                                                <a onClick={(e) => this.props.deleteArr(arrange._id)}>删除</a>
                                                            </span>)
                                                    }
                                                </td>
                                                <td className="operation1">
                                                    <input onChange={(e) => this.handleAdjust(e.target.checked, arrange)} checked={arrange.isTemp} type='checkbox' name='isTemp' value='1' />部分调整
                                                </td>
                                            </tr>
                                        );
                                    })

                                }
                            </tbody>
                        </table>
                        <div className="num">
                            总共有
                            <span id="num" style={{ color: 'orangered' }}>
                                {arrangeInfo.length}
                            </span>
                            条记录
                        </div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    {/* <div >
                        <form action="" className="adjust">
                            <input onClick={this.tempAdjust} type="button" value="临时调整" className="button2" />
                            <input onClick={this.foreverAdjust} type="button" value="永久调整" className="button3" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div> */}
                </div>
            </div>
        );
    }
}

ArrangeDetail = connect(
    state => state,
    {
        getArrList,
        insertArr,
        deleteArr,
        editArr,
        search
    }
)(ArrangeDetail);

export default ArrangeDetail;
