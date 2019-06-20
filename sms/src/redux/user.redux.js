import axios from 'axios';

const GET_LIST = 'GET_LIST', CHANGE_INFO = 'CHANGE_INFO';
const CHANGE_PASSWD = 'CHNAGE_PASSWD', INSERT_USERS = 'INSERT_USERS';
const DELETE_USERS = 'DELETE_USERS', LOGIN = 'LOGIN', LOGOUT = 'LOGOUT';
const UPDATE_USERS = 'UPDATE_USERS';
const IMPORT_USERS = 'IMPORT_USERS', EXPORT_USERS = 'EXPORT_USERS';
const ERROR = 'ERROR', GET_EMPLOYEE = 'GET_EMPLOYEE';
const proxy = '/user';

const initState = {
    userInfo: {},
    employee: {},
    userList: [],
    isAuth: false,
    msg: '',
    pageInfo: {}
}

export function users(state = initState, action) {
    switch (action.type) {
        case GET_LIST:
            return {
                ...state,
                userList: action.userList,
                msg: ''
            };
        case INSERT_USERS:
            return {
                ...state,
                userList: state.userList.concat(action.userList),
                msg: ''
            };
        case DELETE_USERS:
            return {
                ...state,
                userList: state.userList.filter(user => user._id !== action._id),
                msg: ''
            };
        case CHANGE_INFO:
            return {
                ...state,
                userInfo: Object.assign(state.userInfo, action.userInfo),
                msg: ''
            };
        case CHANGE_PASSWD:
            return {
                ...state,
                msg: ''
            };
        case LOGIN:
            return {
                ...state,
                msg: '',
                isAuth: true,
                userInfo: action.userInfo
            };
        case LOGOUT:
            return initState;
        case IMPORT_USERS:
            return {
                ...state,
                userList: action.userList,
                msg: ''
            };
        case EXPORT_USERS:
            return {
                ...state,
                msg: ''
            };
        case UPDATE_USERS:
            return {
                ...state,
                userList: state.userList.map(v => {
                    if (v._id === action._id)
                        return action.userInfo;
                    else
                        return v;
                })
            }
        case GET_EMPLOYEE:
            return {
                ...state,
                employee: state.userList.filter(user => {
                    return user._id === action._id;
                })[0]
            }
        case ERROR:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return state;
    }
}

export function getListSync(userList = []) {
    return { type: GET_LIST, userList };
}

export function insertUsersSync(userList = []) {
    return { type: INSERT_USERS, userList };
}

export function deleteUserSync(_id = '') {
    return { type: DELETE_USERS, _id };
}

export function changeInfoSync(userInfo = {}) {
    return { type: CHANGE_INFO, userInfo };
}

export function changePasswdSync() {
    return { type: CHANGE_PASSWD };
}

export function loginSync(userInfo = {}) {
    return { type: LOGIN, userInfo };
}

export function updateUserSync(_id, userInfo) {
    return { type: UPDATE_USERS, userInfo };
}

export function errMsg(msg = '') {
    return { type: ERROR, msg };
}

// 异步获取用户列表
export function getList(departName = '') {
    // console.log(departName)
    return dispatch => {
        axios.get(proxy + '/list', {
            params: {
                departName
            }
        }).then(res => {
            console.log('getList:', res);
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else {
                    dispatch(getListSync(res.data.list));
                    sessionStorage.setItem('list', JSON.stringify(res.data.list));
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 通过_id获取用户信息
export function getEmployee(_id) {
    return { type: GET_EMPLOYEE, _id };
}
// 异步插入用户
export function insertUsers(userList) {
    return dispatch => {
        axios.post(proxy + '/insert', {
            users: userList
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(insertUsersSync(userList));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 异步删除用户（只能删除一个）
export function deleteUser(_id) {
    return dispatch => {
        axios.post(proxy + '/delete', {
            _id
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(deleteUserSync(_id));
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 异步获取用户信息
export function changeInfo(user) {
    return dispatch => {
        axios.post(proxy + '/changeInfo', {
            user
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(changeInfoSync(user));
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 异步更新_id用户
export function updateUser(_id, userInfo) {
    return dispatch => {
        axios.post(proxy + '/update', {
            _id,
            userInfo
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(updateUserSync(_id, userInfo));
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 异步修改用户密码
export function changePasswd({ userId, pwd, newPwd }) {
    if (!userId || !pwd || !newPwd) {
        return errMsg('均为必填项');
    }

    return dispatch => {
        axios.post(proxy + '/changePwd', {
            userId,
            pwd,
            newPwd
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(changePasswdSync());
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 异步登录
export function login({ type, userId, pwd, valCode, inputValCode }) {
    // console.log(type, userId, pwd)
    if (!type || !userId || !pwd || !inputValCode)
        return errMsg("以上均为必填项");
    else if (valCode !== inputValCode)
        return errMsg("验证码不符");

    return dispatch => {
        axios.post(proxy + '/login', {
            type,
            userId,
            pwd
        }).then(res => {
            // console.log(res)
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else {
                    dispatch(loginSync(res.data.list));

                    // getList(res.data.list.departName);
                    const departName = res.data.list.departName || ''

                    // 为了将用户登录和获取部门主管或经理的用户列表这两个功能进行同步
                    axios.get(proxy + '/list', {
                        params: {
                            departName
                        }
                    }).then(result => {
                        // console.log('getList:', result);
                        if (result.status === 200) {
                            if (result.data.code !== 0)
                                dispatch(errMsg(result.data.msg));
                            else {
                                dispatch(getListSync(result.data.list));
                                sessionStorage.setItem('list', JSON.stringify(result.data.list));
                                sessionStorage.setItem('user', JSON.stringify(res.data.list))
                            }
                        }
                    }).catch(err => {
                        console.log(err);
                    })

                    
                    axios.post('/department/list', {
                        departName
                    }).then(result => {
                        // console.log('getList:', result);
                        if (result.status === 200) {
                            if (result.data.code !== 0)
                                dispatch(errMsg(result.data.msg));
                            else {
                                sessionStorage.setItem('department', JSON.stringify(result.data.list))
                            }
                        }
                    }).catch(err => {
                        console.log(err);
                    })
                }
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 同步注销
export function logout(msg = '') {
    return { type: LOGOUT, msg };
}
// 导出用户列表
export function exportUsers(departName = '') {
    const condition = {};
    if (departName !== '')
        condition.departName = departName;

    return dispatch => {
        axios.post(proxy + '/export/1', condition).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
// 导入用户列表
export function importUsers(departName = '') {
    const condition = {};
    if (departName !== '')
        condition.departName = departName;

    return dispatch => {
        axios.post(proxy + '/import/1', condition).then(res => {
            console.log(res);
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(insertUsersSync(res.data.list));
            } else {
                console.log(res.statusText);
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
