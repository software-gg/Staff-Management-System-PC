import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getList } from '../../redux/user.redux';
import { getApplyList, updateApply, insertApply, checkApplyDetail } from '../../redux/apply.redux'
import { calLastMonth, calNextMonth, formatTime } from '../../utils/utils';
import { Link } from 'react-router-dom';
import { decoder, colorRender } from '../../utils/utils';

// getApplyList(departName = '', month = '', type = '')

// updateApply(_id = '', state = '')

class ApplyGoldbrick extends React.Component {
    constructor(props) {
        super(props);
        // 数据是写死的
        this.state = {
            users: [],
            departName: '',
            month: ''
        };
    }

    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('user')) || {};

        // if (user) {
        //     const userInfo = user;
        //     console.log(userInfo)
        //     if (userInfo.type === 'director')
        //         this.props.getList(userInfo.departName);
        //     else
        //         this.props.getList('');
        // }
        const users = JSON.parse(sessionStorage.getItem('list')) || [];
        const { departName } = user;
        const current = new Date();
        // const month = current.getFullYear() + '-' + current.getMonth() + '-1';
        // const { departName, month } = this.state;
        this.setState({
            users,
            departName,
            // month
        })
        // console.log(departName, '')
        this.props.getApplyList(departName, '', '事假');
        this.props.insertApply(departName, '', '病假');
    }

    render() {
        var applyInfo;
        // console.log(this.state.users)
        // if (this.state.users) {
        applyInfo = this.props.apply.applyInfo.map(v => {
            return {
                ...v,
                startTime: formatTime(v.startTime),
                endTime: formatTime(v.endTime),
                sentTime: formatTime(v.sentTime)
            }
        }).map(v => {
            const x = this.state.users.filter(u => u.userId === v.userId)
            return {
                ...v,
                name: x.length >= 1 ? x[0].name : ''
            }
        });
        // }

        // console.log(this.state.users.filter(u => u.userId === '41621302')[0])
        // console.log(applyInfo);
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        请假申请列表
                    </div>
                    <div style={{ float: 'right' }}>
                        {/* <form action="" className="select clearfix"> */}
                        <input type="text" placeholder="请输入关键字" />
                        <select name="keyword" id="">
                            <option className="key">姓名</option>
                            <option className="key">工号</option>
                            <option className="key">部门</option>
                        </select>
                        <input type="button" value="查询" className="button" />
                        {/* </form> */}
                    </div>
                    <div className="form">
                        <div className="title4">
                            {/* <form action="">
                                <input type="button" className="button2 right" id="3" value="批量通过" />
                                <input type="button" className="button2 right" id="4" value="批量回绝" />
                            </form> */}
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    {/* <th>
                                        <input type="checkbox" />
                                    </th> */}
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>申请性质</th><th>申请时间</th><th>开始时间</th><th>结束时间</th><th>状态</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applyInfo.map((apply, index) => {
                                        return (
                                            <tr key={index}>
                                                {/* <td>
                                                    <input type="checkbox" />
                                                </td> */}
                                                <td>{index + 1}</td>
                                                <td>{apply.name}</td>
                                                <td>{apply.departName}</td>
                                                <td>{apply.userId}</td>
                                                <td>{apply.type}</td>
                                                <td>{apply.sentTime}</td>
                                                <td>{apply.startTime}</td>
                                                <td>{apply.endTime}</td>
                                                <td className={colorRender(apply.state)}>{decoder(apply.state)}</td>
                                                <td className="operation1">
                                                    <Link onClick={(e) => this.props.checkApplyDetail(apply)} to="/apply/detail">详情</Link>
                                                    {
                                                        apply.state === 'wait'
                                                            ? (<span>
                                                                <a onClick={(e) => this.props.updateApply(apply._id, 'pass')}>通过</a>
                                                                <a onClick={(e) => this.props.updateApply(apply._id, 'fail')}>回绝</a>
                                                            </span>)
                                                            : <a onClick={(e) => this.props.updateApply(apply._id, 'wait')}>撤销</a>
                                                    }
                                                </td>
                                            </tr>
                                        );
                                    })
                                }
                            </tbody>


                            {/* <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td className="blue">Text 2B</td>
                                <td className="operation1">
                                    <a href="">详情</a> <a href="">通过</a> <a href="">回绝</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td className="green">Text 2B</td>
                                <td className="operation1">
                                    <a href="">详情</a> <a href="">通过</a> <a href="">回绝</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td className="blue">Text 2B</td>
                                <td className="operation1">
                                    <a href="">详情</a> <a href="">通过</a> <a href="">回绝</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td className="green">Text 2B</td>
                                <td className="operation1">
                                    <a href="">详情</a> <a href="">通过</a> <a href="">回绝</a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input type="checkbox" />
                                </td>
                                <td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td>Text 2B</td><td>Text 2C</td><td>Text 2A</td><td className="blue">Text 2B</td>
                                <td className="operation1">
                                    <a href="">详情</a> <a href="">通过</a> <a href="">回绝</a>
                                </td>
                            </tr> */}
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{applyInfo.length}</span>条申请信息</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                </div>
            </div>
        );
    }
}

ApplyGoldbrick = connect(
    state => state,
    {
        getApplyList,
        updateApply,
        insertApply,
        getList,
        checkApplyDetail
    }
)(ApplyGoldbrick);

export default ApplyGoldbrick;
