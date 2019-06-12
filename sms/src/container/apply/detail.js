import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
// import BossNav from '../../component/bossNav';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class ApplyDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuth: false
        };
    }

    render() {
        return (
            <div>
                {/* {this.state.isAuth ? null : <Redirect to='/login' />} */}
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div className='title3'>
                        申请详情信息
                    </div>
                    <div className='content'>
                        <div >
                            <fieldset >
                                <legend style={{fontSize: '20px'}}>请假详情</legend>
                                <br />
                                <div className='font-sz'>
                                    部门：<span>业务部</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    员工姓名：<span >王</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    员工工号：<span>235</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    开始时间：<span></span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    结束时间：<span></span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    申请理由:<span></span>
                                </div>
                                <br />
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ApplyDetail = connect(
    state => state.user,
    {}
)(ApplyDetail);

export default ApplyDetail;
