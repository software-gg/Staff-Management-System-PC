import { isContinueStatement } from "@babel/types";
import Axios from "axios";

const GET_APPLY = 'GET_APPLY', UPDATE_APPLY='UPDATE_APPLY', ERROR = 'ERROR';
const proxy = '/apply';

const initState = {
    applyInfo: [],
    pageInfo: {},
    msg: ''
}

export function apply(state = initState, action) {
    switch (action.type) {
        case GET_APPLY:
            return {
                applyInfo: action.applyInfo,
                msg: ''
            };
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
        default:
            return state;
    }
}

function getApplyListSync(applyInfo) {
    return { type: GET_APPLY, applyInfo };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

function updateApplySync(_id, state) {
    return { type: UPDATE_APPLY, _id, state };
}

export function getApplyList(departName = '', month = '', type = '') {
    const condition = { month, type };
    if (departName !== '')
        condition.departName = departName;

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
