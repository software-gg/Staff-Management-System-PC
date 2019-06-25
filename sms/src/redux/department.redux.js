import axios from 'axios';

const GET_DEPART_LIST = 'GET_DEPART_LIST';
const EDIT_DEPART = 'EDIT_DEPART';
const DELETE_DEPART = 'DELETE_DEPART';
const INSERT_DEPART = 'INSERT_DEPART';
const ERROR = 'ERROR';
const proxy = '/department';

const initState = {
    departInfo: [],
    pageInfo: {},
    msg: ''
}

export function department(state = initState, action) {
    switch (action.type) {
        case GET_DEPART_LIST:
            // console.log("action.departInfo: ", action.departInfo)
            return {
                departInfo: action.departInfo,
                msg: ''
            };
        case EDIT_DEPART:
            return {
                ...state,
                departInfo: state.departInfo.map(v => {
                    if (action._id === v._id)
                        return action.depart;
                    else
                        return v;
                }),
                msg: ''
            };
        case DELETE_DEPART:
            return {
                ...state,
                departInfo: state.departInfo.filter(v => action._id !== v._id),
                msg: ''
            }
        case INSERT_DEPART:
            // console.log(action);
            return {
                ...state,
                departInfo: state.departInfo.concat(action.departs)
            };
        case ERROR:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return state;
    }
}

function getDepartListSync(departInfo) {
    return { type: GET_DEPART_LIST, departInfo };
}

function editDepartSync(_id, depart) {
    return { type: EDIT_DEPART, _id, depart };
}

function deleteDepartSync(_id) {
    return { type: DELETE_DEPART, _id };
}

function insertDepartSync(departs) {
    return { type: INSERT_DEPART, departs };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

export function getDepartList(departName = '') {
    const condition = {};
    if (departName)
        condition.departName = departName;
    return dispatch => {
        axios.post(proxy + '/list', condition).then(res => {
            // console.log(res.data.list);
            // console.log(res);
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(getDepartListSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function editDepart(_id, oldDepart, depart) {
    return dispatch => {
        axios.post(proxy + '/update', {
            _id,
            oldDepart,
            depart
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(editDepartSync(_id, depart));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function deleteDepart(_id, depart) {
    return dispatch => {
        axios.post(proxy + '/delete', {
            _id,
            depart
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(deleteDepartSync(_id, depart.departName));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function insertDepart(depart) {
    return dispatch => {
        axios.post(proxy + '/insert', {
            depart
        }).then(res => {
            if (res.status === 200) {
                // if (res.data.code !== 0)
                //     dispatch(errMsg(res.data.msg));
                // else
                    dispatch(insertDepartSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
