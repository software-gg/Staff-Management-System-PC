import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import EditableItem from '../../component/editableItem/editableItem';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getArrList, insertArr, deleteArr, editArr } from '../../redux/arrange.redux';

// export function getArrList(departName = '', month = '')
// export function insertArr(arrange = [])
// export function deleteArr(_id)
// export function editArr(_id, arrange)

class ArrangeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departName: '业务部',
            month: '2019-06-01T00:00:00Z',
            edit: {
                isEdit: false,
                id: -1,
                arrange: {}
            }
        };
    }

    componentDidMount() {
        const { departName, month } = this.state;
        this.props.getArrList(departName, month);
    }

    handleInsert() {
        const { departName, month } = this.state;
        this.props.insertArr([{
            departName,
            month,

        }])
        this.setState({
            edit: {
                isEdit: true,
                id: this.props.arrange.arrangeInfo.length,
                arrange: {
                    departName,
                    month
                }
            }
        })
    }

    handleEdit(index, arrange) {
        this.setState({
            edit: {
                isEdit: true,
                id: index,
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
                id: -1,
                arrange: {}
            }
        })
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
        console.log(newState)
        this.setState(newState);
    }

    render() {
        const arrangeInfo = this.props.arrange.arrangeInfo;
        const edit = this.state.edit;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        细致班次安排
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder="请输入关键字" />
                            <select name="keyword" id="">
                                <option className="key">姓名</option>
                                <option className="key">工号</option>
                                <option className="key">部门</option>
                            </select>
                            <input type="button" value="查询" className="button" />
                        </div>
                    </div>
                    <div className="form">
                        <div className="title4">
                            <form action="" className="select2">
                                <input type="button" onClick={(e) => this.handleInsert()} className='button2' id="2" value="添加工作安排" />
                            </form>
                            <div className="month">
                                <a href="" id="last"><i></i></a>
                                <span >2019年4月</span>
                                <a href="" id="next"><i></i></a>
                            </div>
                            <input type="button" className="button2 right" id="3" value="导入安排" />
                            <input type="button" className="button2 right" id="4" value="导出安排" />
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>日期</th><th>上班时间</th><th>下班时间</th><th>状态</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arrangeInfo.map((arrange, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{''}</td>
                                                <td>{arrange.departName}</td>
                                                <td><EditableItem
                                                    name='userId'
                                                    val={arrange.userId || ''}
                                                    newVal={edit.arrange.userId || ''}
                                                    isEdit={edit.id === index}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td>{''}</td>
                                                <td><EditableItem
                                                    name='onTime'
                                                    val={arrange.onTime || ''}
                                                    newVal={edit.arrange.onTime || ''}
                                                    isEdit={edit.id === index}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    name='offTime'
                                                    val={arrange.offTime || ''}
                                                    newVal={edit.arrange.offTime || ''}
                                                    isEdit={edit.id === index}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td><EditableItem
                                                    name='type'
                                                    val={arrange.type || ''}
                                                    newVal={edit.arrange.type || ''}
                                                    isEdit={edit.id === index}
                                                    handleChange={this.handleChange}
                                                /></td>
                                                <td className="operation1">
                                                    {
                                                        edit.isEdit
                                                            ? (<span>
                                                                <a onClick={(e) => this.handleComplete(arrange._id)}>完成</a>
                                                            </span>)
                                                            : (<span>
                                                                <a onClick={(e) => this.handleEdit(index, arrange)}>编辑</a>
                                                                <a onClick={(e) => this.props.deleteArr(arrange._id)}>删除</a>
                                                            </span>)
                                                    }
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
                    <div >
                        <form action="" className="adjust">
                            <input type="button" value="临时调整" className="button2" />
                            <input type="button" value="永久调整" className="button3" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div>
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
    }
)(ArrangeDetail);

export default ArrangeDetail;
