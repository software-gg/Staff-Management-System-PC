import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import PageTurning from '../../component/pageTurning/pageTurning';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/money.css';

class EmployeeSelect extends React.Component {
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
                        员工选择
                    </div>
                    <div className='content'>
                        <table className="imagetable" style={{marginTop: '-70px'}}>
                            <tr>
                                <th>编号</th><th>员工姓名</th><th>部门</th><th>员工工号</th>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                            <tr>
                                <td >Text 1A</td><td>Text 1B</td><td>Text 1C</td><td >Text 1A</td>
                            </tr>
                        </table>
                        <div className="num">总共有<span id="num" style={{color: 'orangered'}}>200</span>条记录</div>
                    </div>
                    <PageTurning pageInfo={this.props.pageInfo} />
                    <div style={{bottom: '50px'}}>
                        <form action="" className="adjust" >
                            <input type="button" value="保存" className="button2" />
                            <input type="button" value="取消" className="button2" style={{backgroundColor: '#b5cfd2'}} />
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default EmployeeSelect;
