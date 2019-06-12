import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getApplyList, updateApply } from '../../redux/apply.redux'

// getApplyList(departName = '', month = '', type = '')

// updateApply(_id = '', state = '')

class ApplyGoldbrick extends React.Component {
    constructor(props) {
        super(props);
        // 数据是写死的
        this.state = {
            departName: '产品部',
            month: '2019-06-01 00:00:00',
            type: '事假'
        };
    }

    componentDidMount() {
        // const { departName } = this.props.user.userInfo.departName;
        const { departName, month, type } = this.state;
        this.setState({
            departName
        })
        this.props.getApplyList(departName, month, type);
    }

    render() {
        const applyInfo = this.props.apply.applyInfo;
        console.log(applyInfo);
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        申请信息列表
                    </div>
                    <div>
                        <form action="" className="select clearfix">
                            <input type="text" placeholder="请输入关键字" />
                            <select name="keyword" id="">
                                <option className="key">姓名</option>
                                <option className="key">工号</option>
                                <option className="key">部门</option>
                            </select>
                            <input type="button" value="查询" className="button" />
                        </form>
                    </div>
                    <div className="form">
                        <div className="title4">
                            <form action="">
                                <input type="button" className="button2 right" id="3" value="批量通过" />
                                <input type="button" className="button2 right" id="4" value="批量回绝" />
                            </form>
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>
                                        <input type="checkbox" />
                                    </th>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>申请性质</th><th>开始时间</th><th>结束时间</th><th>状态</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    applyInfo.map((apply, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <input type="checkbox" />
                                                </td>
                                                <td>{index + 1}</td>
                                                <td>{''}</td>
                                                <td>{apply.departName}</td>
                                                <td>{apply.userId}</td>
                                                <td>{apply.type}</td>
                                                <td>{apply.startTime}</td>
                                                <td>{apply.endTime}</td>
                                                <td className="red">{apply.state}</td>
                                                <td className="operation1">
                                                    <a href="/apply/detail">详情</a>
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
    }
)(ApplyGoldbrick);

export default ApplyGoldbrick;
