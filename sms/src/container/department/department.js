import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';

class Department extends React.Component {
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
                        部门列表
                    </div>
                    <div className="form">
                        <div className="title4">
                            <form action="" className="select2">
                                <input type="button" className='button2' id="2" value="添加部门" />
                            </form>
                        </div>
                    </div>
                    <div className='content'>
                        <table className="imagetable">
                            <tr>
                                <th>部门号</th><th>部门名</th><th>部门主管</th><th> 部门上班时间</th><th>操作</th>
                            </tr>
                            <tr>
                                <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td>
                                <td className="operation1">
                                    <a href="">编辑</a><a href="">删除</a><a href="">任职主管</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td>
                                <td className="operation1">
                                    <a href="">编辑</a><a href="">删除</a><a href="">任职主管</a>
                                </td>
                            </tr>
                            <tr>
                                <td>Text 1C</td><td >Text 1A</td><td>Text 1B</td><td>Text 1C</td>
                                <td className="operation1">
                                    <a href="">编辑</a><a href="">删除</a><a href="">任职主管</a>
                                </td>
                            </tr>
                        </table>
                        <div className="num">总共有<span id="num" style={{color: 'orangered'}}>200</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    <div >
                    </div>
                </div>
            </div>
        );
    }
}

export default Department;
