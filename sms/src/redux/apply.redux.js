import { isContinueStatement } from "@babel/types";
import Axios from "axios";

const GET_APPLY = 'GET_APPLY', UPDATE_APPLY='UPDATE_APPLY', ERROR = 'ERROR';
const proxy = '/apply', INSERT_APPLY = 'INSERT_APPLY';
const CHECK_DETAIL='CHECK_DETAIL';

const initState = {
    applyInfo: [],
    detail: {},
    pageInfo: {},
    msg: ''
}

export function apply(state = initState, action) {
    switch (action.type) {
        case CHECK_DETAIL:
            console.log('action.apply:', action.apply)
            return {
                ...state,
                detail: action.apply
            }
        case GET_APPLY:
            return {
                applyInfo: action.applyInfo,
                msg: ''
            };
        case INSERT_APPLY:
            return {
                ...state,
                applyInfo: state.applyInfo.concat(action.applies),
                msg: ''
            }
        case UPDATE_APPLY:
            return {
                ...state,
                applyInfo: state.applyInfo.map(v => {
                    if (v._id === action._id)
                        return { ...v, state: action.state };
                    else
                        return v;
                }),
                msg: ''
            };
        case ERROR:
            return {
                ...state,
                applyInfo: [],
                msg: ''
            }
        default:
            return state;
    }
}

function getApplyListSync(applyInfo) {
    return { type: GET_APPLY, applyInfo };
}

function insertApplySync(applies) {
    return { type: INSERT_APPLY, applies };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

function updateApplySync(_id, state) {
    return { type: UPDATE_APPLY, _id, state };
}

export function checkApplyDetail(apply) {
    return { type: CHECK_DETAIL, apply };
}

export function getApplyList(departName = '', month = '', type = '') {
    const condition = { type };
    if (departName !== '')
        condition.departName = departName;
    if (month !== '')
        condition.month = month;

    return dispatch => {
        Axios.post(proxy + '/list', condition).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(getApplyListSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function updateApply(_id = '', state = '') {
    console.log(_id, state);
    return dispatch => {
        Axios.post(proxy + '/update', {
            _id,
            key: 'state',
            val: state
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(updateApplySync(_id, state));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function insertApply(departName = '', month = '', type = '') {
    console.log('month: ', month);
    return dispatch => {
        Axios.post(proxy + '/list', {
            departName,
            month,
            type
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(insertApplySync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
