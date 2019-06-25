import axios from 'axios';

const GET_MSG_LIST = 'GET_MSG_LIST';
const ERROR = 'ERROR';
const proxy = '/msg'

const initState = {
    messageInfo: [],
    pageInfo: {},
    msg: ''
}

export function message(state = initState, action) {
    switch(action.type) {
        case GET_MSG_LIST:
            return {
                messageInfo: action.messageInfo,
                msg: ''
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

function getMsgListSync(messageInfo) {
    return { type: GET_MSG_LIST, messageInfo };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

export function getDepartList(userId) {
    return dispatch => {
        axios.post(proxy + '/list', {
            userId
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(getMsgListSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function deleteMsg(_id) {
    return dispatch => {
        axios.post(proxy + '/delete', {
            _id
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    ;
                    // dispatch(getMsgListSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
