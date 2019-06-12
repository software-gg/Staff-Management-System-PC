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

// export function getArrList(departName = '', month = '')

class Attend extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            departName: '业务部',
            month: '2019-06-01T00:00:00Z'
        };
    }

    componentDidMount() {
        const { departName, month } = this.state;
        this.props.getArrList(departName, month);
    }

    render() {
        const arrangeInfo = this.props.arrange.arrangeInfo;
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        员工考勤情况
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
                            <form action="" className="select2">
                                <input type="button" className='button2' id="2" value="添加工作安排" />
                            </form>
                            <div className="month">
                                <a href="" id="last"><i></i></a>
                                <span >2019年6月</span>
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
                                    <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th><th>日期</th><th>上班时间</th><th>下班时间</th><th>考勤情况</th><th>不在岗时间</th>
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
                                                <td>{arrange.userId}</td>
                                                <td>{''}</td>
                                                <td>{arrange.realOnTime}</td>
                                                <td>{arrange.realOffTime}</td>
                                                <td className="red">{arrange.state}</td>
                                                <td>{''}</td>
                                            </tr>
                                        );
                                    })
                                }

                            </tbody>
                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>{arrangeInfo.length}</span>条记录</div>
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

Attend = connect(
    state => state,
    {
        getArrList
    }
)(Attend)

export default Attend;
