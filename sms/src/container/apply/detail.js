import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
// import BossNav from '../../component/bossNav';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css/employment.css';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { decoder, colorRender, formatTime } from '../../utils/utils';

class ApplyDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    handleReturn = () => {
        this.props.history.goBack();
    }

    render() {
        var apply = this.props.apply.detail || {};
        apply = {
            ...apply,
            startTime: formatTime(apply.startTime),
            endTime: formatTime(apply.endTime),
            sentTime: formatTime(apply.sentTIme)
        }
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
                                    部门：<span>{apply.departName}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    员工姓名：<span >{apply.name}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    员工工号：<span>{apply.userId}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    申请时间：<span>{apply.startTime}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    开始时间：<span>{apply.startTime}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    结束时间：<span>{apply.endTime}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    申请理由：<span>{apply.reason}</span>
                                </div>
                                <br />
                                <div className='font-sz'>
                                    申请状态：<span className={colorRender(apply.state)}>{decoder(apply.state)}</span>
                                </div>
                                <br />
                            </fieldset>
                            <br />
                            <button onClick={this.handleReturn}>返回</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

ApplyDetail = connect(
    state => state,
    {}
)(ApplyDetail);

export default ApplyDetail;
