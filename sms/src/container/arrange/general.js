import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';

class ArrangeGeneral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        整体班次安排
                    </div>
                    <div>
                        <div>
                            <input type="text" placeholder="请输入关键字" />
                            <select name="keyword" id="select-keyword">
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
                                <input type="button" className='button2' id="2" value="添加工作安排" />
                            </form>
                            <div className="month">
                                <a href="" id="last"><i></i></a>
                                <span >2019年4月</span>
                                <a href="" id="next"><i></i></a>
                            </div>
                            <div className=" right" style={{ fontSize: '15px' }}>
                                请选择月份：
                <form style={{ display: 'inline-block' }} action="" id="working-type">
                                    <select >
                                        <option value='三班倒' className="key">三班倒</option>
                                        <option value='小时工' className="key">小时工</option>
                                        <option value='八小时' className="key">八小时工作制</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <thead>
                                <tr>
                                    <th>班次编号</th><th>部门</th><th>日期</th><th> 上班时间</th><th>下班时间</th><th>班次性质</th><th>员工安排</th><th>操作</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td><td className="red">Text 1B</td><td>Text 1C</td>
                                    <td className="operation1">
                                        <a href="">安排员工</a><a href="">编辑</a><a href="">删除</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td><td className="blue">Text 1B</td><td>Text 1C</td>
                                    <td className="operation1">
                                        <a href="">安排员工</a><a href="">编辑</a><a href="">删除</a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td><td className="green">Text 1B</td><td>Text 1C</td>
                                    <td className="operation1">
                                        <a href="">安排员工</a><a href="">编辑</a><a href="">删除</a>
                                    </td>
                                </tr>
                            </tbody>

                        </table>
                        <div className="num">总共有<span id="num" style={{ color: 'orangered' }}>200</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    <div >
                        <form action="" className="adjust" style={{ bottom: '30%' }}>
                            <input type="button" value="临时调整" className="button2" />
                            <input type="button" value="永久调整" className="button3" style={{ backgroundColor: '#b5cfd2' }} />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ArrangeGeneral;
