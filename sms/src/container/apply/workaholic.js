import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getApplyList, updateApply, checkApplyDetail } from '../../redux/apply.redux';
import { getList } from '../../redux/user.redux';
import { Link } from 'react-router-dom';
import { decoder, colorRender, formatTime } from '../../utils/utils';

class ApplyWorkaholic extends React.Component {
    constructor(props) {
        super(props);
        // 数据是写死的
        this.state = {
            users: [],
            departName: '产品部',
            month: '',
            type: ''
        };
    }

    componentDidMount() {
        const user = JSON.parse(sessionStorage.getItem('user')) || {};
        const users = JSON.parse(sessionStorage.getItem('list')) || [];
        // if (user) {
        //     const userInfo = user;
        //     console.log(userInfo)
        //     if (userInfo.type === 'director')
        //         this.props.getList(userInfo.departName);
        //     else
        //         this.props.getList('');
        // }

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
        this.props.getApplyList(departName, '', '加班');
        // this.props.insertApply(departName, '', '病假');
    }

    render() {
        var applyInfo;
        // console.log(this.state.users)
        // if (this.state.users) {
            applyInfo = this.props.apply.applyInfo.map(v => {
                const x = this.state.users.filter(u => u.userId === v.userId)
                return {
                    ...v,
                    name: x.length >= 1 ? x[0].name : ''
                }
            });
        // }

    // componentDidMount() {
    //     // const { departName } = this.props.user.userInfo.departName;
    //     const { departName } = JSON.parse(sessionStorage.getItem('user'));
    //     this.setState({
    //         departName
    //     })
    //     this.props.getApplyList(departName, '', '加班');
    // }

    // render() {
    //     const applyInfo = this.props.apply.applyInfo;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        加班申请列表
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
                                    applyInfo.map(v => {
                                        return {
                                            ...v,
                                            startTime: formatTime(v.startTime),
                                            endTime: formatTime(v.endTime),
                                            sentTime: formatTime(v.sentTime)
                                        }
                                    }).map((apply, index) => {
                                        return (
                                            <tr key={index}>
                                                {/* <td>
                                                    <input type="checkbox" />
                                                </td> */}
                                                <td >{index + 1}</td>
                                                <td>{apply.name}</td>
                                                <td>{apply.departName}</td>
                                                <td>{apply.userId}</td>
                                                <td>{apply.type}</td>
                                                <td>{apply.sentTime}</td>
                                                <td>{apply.startTime}</td>
                                                <td>{apply.endTime}</td>
                                                <td className={colorRender(apply.state)}>{decoder(apply.state)}</td>
                                                <td className="operation1">
                                                    <Link onClick={(e) => this.props.checkApplyDetail(apply)} to='/apply/detail'>详情</Link>
                                                    {
                                                        apply.state === 'wait'
                                                            ? (
                                                                <span>
                                                                    <a onClick={(e) => this.props.updateApply(apply._id, 'pass')}>通过</a>
                                                                    <a onClick={(e) => this.props.updateApply(apply._id, 'fail')}>回绝</a>
                                                                </span>
                                                            ) : (
                                                                <span>
                                                                    <a onClick={(e) => this.props.updateApply(apply._id, 'wait')}>撤销</a>
                                                                </span>
                                                            )
                                                    }

                                                </td>
                                            </tr>
                                        );
                                    })

                                }
                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{applyInfo.length}</span>条申请信息</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                </div>
            </div>
        );
    }
}

ApplyWorkaholic = connect(
    state => state,
    {
        getApplyList,
        updateApply,
        getList,
        checkApplyDetail
    }
)(ApplyWorkaholic);

export default ApplyWorkaholic;
