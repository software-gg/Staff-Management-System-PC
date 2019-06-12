import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/normalize.css';
import '../../css/style.css';
import '../../css//money.css';

class Message extends React.Component {
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
                    <div id="message_frame">

                        <div className="title-message">
                            <h2>系统消息详情</h2>
                        </div>
                        <form method="post" action="js/message.js">
                            <div className="title1-message">
                                <div className="line1">
                                    <span ><b>系统消息内容</b></span><span style={{color:'red'}}>2016-09-12</span>
                                </div>
                            </div>
                            <div style={{fontSize: '15px', textDecoration: 'none'}}>
                                <a href="http://www.w3school.com.cn" style={{textDecoration: 'none'}}>【申请待审核】张燕递交了一份请假申请</a>
                            </div>
                            <div className="line2">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那这不动产权证书和过去的“房本”相比，有什么不同呢？
                                    首先，不动产权证的内容更详细了。
                                    据媒体报告，房本的内页内容仅包括房屋所有权人，
                                    共有情况，房屋坐落，登记时
                <br />间，房屋性质，规划用途，房屋状况和土地状况；不动产权证的
                                        封面为红色，证书的全称为《中华人民共和国不动产权证书》，里面
                                        除了权利人，共有情况，坐落位置等原来房产证
                    <br />外，还增加了辐射区，不动产单元号，使用期限的内容。
                </span>
                            </div>

                            <div className="title1-message">
                                <div className="line1">
                                    <span ><b>系统消息内容</b></span><span style={{color:'red'}}>2016-09-11</span>
                                </div>
                            </div>
                            <div style={{fontSize: '15px', textDecoration: 'none'}}>
                                <a href="http://www.w3school.com.cn" style={{textDecoration: 'none'}} >【申请待审核】李博递交了一份请假申请</a>
                            </div>
                            <div className="line2">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那这不动产权证书和过去的“房本”相比，有什么不同呢？
                                    首先，不动产权证的内容更详细了。
                                    据媒体报告，房本的内页内容仅包括房屋所有权人，
                                    共有情况，房屋坐落，登记时
                <br />间，房屋性质，规划用途，房屋状况和土地状况；不动产权证的
                                        封面为红色，证书的全称为《中华人民共和国不动产权证书》，里面
                                        除了权利人，共有情况，坐落位置等原来房产证
                    <br />外，还增加了辐射区，不动产单元号，使用期限的内容。
                </span>
                            </div>
                            <div className="title1-message">
                                <div className="line1">
                                    <span ><b>系统消息内容</b></span><span style={{color:'red'}}>2016-09-10</span>
                                </div>
                            </div>
                            <div style={{fontSize: '15px', textDecoration: 'none'}}>
                                <a href="http://www.w3school.com.cn" style={{textDecoration: 'none'}} >【请假后调整】调整吴小涵的工作要求</a>
                            </div>
                            <div className="line2">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那这不动产权证书和过去的“房本”相比，有什么不同呢？
                                    首先，不动产权证的内容更详细了。
                                    据媒体报告，房本的内页内容仅包括房屋所有权人，
                                    共有情况，房屋坐落，登记时
                <br />间，房屋性质，规划用途，房屋状况和土地状况；不动产权证的
                                        封面为红色，证书的全称为《中华人民共和国不动产权证书》，里面
                                        除了权利人，共有情况，坐落位置等原来房产证
                    <br />外，还增加了辐射区，不动产单元号，使用期限的内容。
                </span>
                            </div>
                            <div className="title1-message">
                                <div className="line1">
                                    <span ><b>系统消息内容</b></span><span style={{color:'red'}}>2016-09-19</span>
                                </div>
                            </div>
                            <div style={{fontSize: '15px', textDecoration: 'none'}}>
                                <a href="http://www.w3school.com.cn" style={{textDecoration: 'none'}} >【版本更新】考勤管理后台1.3</a>
                            </div>
                            <div className="line2">
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;那这不动产权证书和过去的“房本”相比，有什么不同呢？
                                    首先，不动产权证的内容更详细了。
                                    据媒体报告，房本的内页内容仅包括房屋所有权人，
                                    共有情况，房屋坐落，登记时
                <br />间，房屋性质，规划用途，房屋状况和土地状况；不动产权证的
                                        封面为红色，证书的全称为《中华人民共和国不动产权证书》，里面
                                        除了权利人，共有情况，坐落位置等原来房产证
                    <br />外，还增加了辐射区，不动产单元号，使用期限的内容。
                </span>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;
