import React from 'react';
import '../../css/normalize.css';
import '../../css/login.css';
import { shuffle } from '../../utils/utils';
import { connect } from 'react-redux';
import { login, logout, getList } from '../../redux/user.redux';
import { Redirect } from 'react-router-dom';

// @connect(state => state.user, { login })
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            pwd: '',
            type: 'director',
            valCode: '',
            inputValCode: '',
            msg: ''
        }
        this.create_code = this.create_code.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.logout();
        this.create_code();
    }

    create_code() {
        shuffle();
        var ar1 = '';
        var code = shuffle();

        for (var i = 0; i < 6; i++) {
            ar1 += code[i];
        }
        // console.log(ar1);
        this.setState({
            valCode: ar1
        })
    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleLogin() {
        this.props.login(this.state)
    }

    render() {
        // console.log(this.props)
        return (
            <div className="container">
                {
                    sessionStorage.getItem('user') || this.props.user.isAuth
                        ? <Redirect to='/apply/goldbrick'></Redirect>
                        : null
                }
                <div>
                    <h2 className='title-login'>员工考勤后台管理系统</h2>
                </div>
                <div className="form">
                    <p id='mark'>{this.props.user.msg}</p>
                    <ul>
                        <p>
                            <li>
                                <label className="label">工号：</label>
                                <input onChange={(e) => this.handleChange('userId', e.target.value)} type="text" id="userId" className="input" value={this.state.userId} placeholder="请输入工号" />
                            </li>
                        </p>
                        <p>
                            <li>
                                <label className="label">密码：</label>
                                <input onChange={(e) => this.handleChange('pwd', e.target.value)} type="password" id="pwd" className="input" placeholder="请输入密码" />
                            </li>
                        </p>
                        <p>职位：
                            <select defaultValue={this.state.type} onChange={(e) => this.handleChange('type', e.target.value)}>
                                <option className='select' value='boss'>经理</option>
                                <option className='select' value='director'>主管</option>
                            </select>
                        </p>
                        <p>
                            <li>
                                <label className="label">验证码：</label>
                                <input onChange={(e) => this.handleChange('inputValCode', e.target.value)} id="validate" type="text" className="input" placeholder="请输入验证码" />
                            </li>
                        </p>
                        <input type="button" className=" access" value="生成验证码" onClick={this.create_code} />
                        <span className="add phoKey">{this.state.valCode}</span>
                    </ul>
                    <input onClick={(e) => this.handleLogin()} type="button" id="btn_login" value="登录" />
                    <a href="" >忘记密码</a>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => state;
const mapDispatchToProps = {
    login,
    logout,
    getList
}

Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default Login;
