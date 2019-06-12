import React from 'react';
import Header from '../../component/header/header';
import DirectorNav from '../../component/navigator/directorNav';
import '../../css/daily.css';
import '../../css/passwd.css';
import '../../css/style.css';
import '../../css/employment.css';
import { connect } from 'react-redux';
import { changePasswd } from '../../redux/user.redux';

class EmployeePasswd extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            oldPwd: '',
            newPwd: ''
        };
        this.save = this.save.bind(this);
        this.clear = this.clear.bind(this);
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    save() {
        const { userId, oldPwd, newPwd } = this.state;
        this.props.changePasswd({ userId, pwd: oldPwd, newPwd });
    }

    clear() {
        this.setState({
            userId: '',
            oldPwd: '',
            newPwd: ''
        })
    }

    render() {
        return (
            <div>
                <Header />
                <DirectorNav />
                <div className='main'>
                    <div id="passwd_frame">
                        <p>{this.props.user.msg}</p>
                        {/* <p id="image_logo"><img src="images/login/fly.png"></p> */}
                        <div className="title-passwd">
                            <h2>修改用户密码信息</h2>
                        </div>
                        <form method="post" action="js/passwd.js">

                            <p>
                                <label className="label_input">用户名</label>
                                <input
                                    onChange={(e) => this.handleChange('userId', e.target.value)}
                                    value={this.state.userId}
                                    type="text"
                                    id="username"
                                    className="text_field"
                                />
                            </p>
                            <p>
                                <label className="label_input">旧密码</label>
                                <input
                                    onChange={(e) => this.handleChange('oldPwd', e.target.value)}
                                    value={this.state.oldPwd}
                                    type="password"
                                    id="password"
                                    className="text_field"
                                />
                            </p>
                            <p>
                                <label className="label_input">新密码</label>
                                <input
                                    onChange={(e) => this.handleChange('newPwd', e.target.value)}
                                    value={this.state.newPwd}
                                    type="password"
                                    id="newpasswd"
                                    className="text_field"
                                />
                            </p>

                            <div id="edit_control">
                                <input type="button" id="btn_save" value="保存" onClick={this.save} />
                                <input type="button" id="btn_cancel" value="清空" onClick={this.clear} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

EmployeePasswd = connect(
    state => state,
    {
        changePasswd
    }
)(EmployeePasswd);

export default EmployeePasswd;
