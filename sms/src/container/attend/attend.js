// 对应于 employment.html
import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { getArrList } from '../../redux/arrange.redux';
import { calLastMonth, calNextMonth, decoder, colorRender, formatTime } from '../../utils/utils';

// export function getArrList(departName = '', month = '')

class Attend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            departName: '',
            month: ''
        };
    }

    componentDidMount() {
        const { departName } = JSON.parse(sessionStorage.getItem('user'));
        const users = JSON.parse(sessionStorage.getItem('list'));
        const current = new Date();
        const month = current.getFullYear() + '-' + current.getMonth() + '-1';
        this.setState({
            users,
            departName,
            month
        })
        this.props.getArrList(departName, month);
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
        this.props.getArrList(departName, nextMonth);
    }

    render() {
        const [year, month, day] = this.state.month.split('-');
        const arrangeInfo = this.props.arrange.arrangeInfo.map(v => {
            const x = this.state.users.filter(u => u.userId === v.userId) || [];
            return {
                ...v,
                name: x.length >= 1 ? x[0].name : ''
            }
        });
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        员工考勤情况
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
                            <div className="month" style={{ margin: '0 auto' }}>
                                <a onClick={this.handleLast} id="last"><i></i></a>
                                <span >{year}年{month}月</span>
                                <a onClick={this.handleNext} id="next"><i></i></a>
                            </div>
                            {/* <input type="button" className="button2 right" id="3" value="导入安排" />
                            <input type="button" className="button2 right" id="4" value="导出安排" /> */}
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>日期</th><th>上班时间</th><th>下班时间</th><th>实际上班时间</th><th>实际下班时间</th><th>考勤情况</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arrangeInfo.map(v => {
                                        return {
                                            ...v,
                                            onTime: formatTime(v.onTime),
                                            offTime: formatTime(v.offTime),
                                            realOnTime: formatTime(v.realOnTime),
                                            realOffTime: formatTime(v.realOffTime),
                                        }
                                    }).map((arrange, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{arrange.name}</td>
                                                <td>{arrange.departName}</td>
                                                <td>{arrange.userId}</td>
                                                <td>{arrange.month}</td>
                                                <td>{arrange.onTime}</td>
                                                <td>{arrange.offTime}</td>
                                                <td>{arrange.realOnTime}</td>
                                                <td>{arrange.realOffTime}</td>
                                                <td className={colorRender(arrange.state)}>{decoder(arrange.state)}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{arrangeInfo.length}</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    {/* <div >
                        <form action="" className="adjust">
                            <input type="button" value="临时调整" className="button2" />
                            <input type="button" value="永久调整" className="button3" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div> */}
                </div>
            </div>
        );
    }
}

Attend = connect(
    state => state,
    {
        getArrList
    }
)(Attend)

export default Attend;
