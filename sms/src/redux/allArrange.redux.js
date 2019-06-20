import axios from 'axios';

const GET_ALLARR = 'GET_ALLARR';
const TEMP_ADJUST = 'TEMP_ADJUST', FOREVER_ADJUST = 'FOREVER_ADJUST', SEARCH = 'SEARCH';
const INSERT_ALLARR = 'INSERT_ALLARR', EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
const EDIT_ALLARR = 'EDIT_ALLARR', DELETE_ALLARR = 'DELETE_ALLARR';
const ERROR = "ERROR", proxy = '/allarrange';

const initState = {
    allArrangeInfo: [],
    pageInfo: {},
    edition: {},
    msg: ''
}

export function allArrange(state = initState, action) {
    const nextState = { ...state, msg: '' };
    switch (action.type) {
        case SEARCH:
        case GET_ALLARR:
            nextState.allArrangeInfo = action.allArrangeInfo;
            return nextState;
        // case TEMP_ADJUST:
        //     nextState.allArrangeInfo.isTemp = 1;
        //     return newState;
        // case FOREVER_ADJUST:
        //     nextState.allArrangeInfo.isTemp = 0;
        // return nextState;
        case INSERT_ALLARR:
            console.log("action.allArrangeInfo: ", action.allArrangeInfo)
            return {
                ...state,
                allArrangeInfo: state.allArrangeInfo.concat(action.allArrangeInfo)
            };
        case EDIT_EMPLOYEE:
            nextState.edition = action.arrange;
            return nextState;
        case EDIT_ALLARR:
            nextState.allArrangeInfo = state.allArrangeInfo.map(v => {
                if (v._id === action._id)
                    return action.allArrange;
                else
                    return v;
            })
            console.log(nextState);
            return nextState;
        case DELETE_ALLARR:
            nextState.allArrangeInfo = state.allArrangeInfo.filter(v => {
                return v._id !== action._id;
            })
            return nextState;
        case ERROR:
            return {
                ...state,
                msg: action.msg
            }
        default:
            return state;
    }
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

function getAllArrSync(allArrangeInfo) {
    return { type: GET_ALLARR, allArrangeInfo };
}

function insertAllArrSync(allArrangeInfo) {
    return { type: INSERT_ALLARR, allArrangeInfo };
}

function editAllArrSync(_id, allArrange) {
    return { type: EDIT_ALLARR, _id, allArrange };
}

function deleteAllArrSync(_id) {
    return { type: DELETE_ALLARR, _id };
}

export function editEmployee(allArr) {
    return { type: EDIT_EMPLOYEE, arrange: allArr };
}

function searchSync(allArrangeInfo) {
    return { type: SEARCH, allArrangeInfo };
}

export function search(condition) {
    console.log(condition)
    return dispatch => {
        axios.post(proxy + '/list', condition).then(res => {
            console.log(res);
            if (res.status === 200) {
                if (res.data.code === 1) {
                    dispatch(errMsg(res.data.msg));
                } else {
                    dispatch(searchSync(res.data.list || []))
                }
            } else {
                return dispatch(errMsg(res.statusText));
            }
        })
    }
}

export function getAllArr(departName, month) {
    // console.log(month);
    const postData = { month };
    if (departName)
        postData.departName = departName;
    return dispatch => {
        axios.post(proxy + '/list', postData).then(res => {
            console.log(res.data.list);
            if (res.status === 200) {
                if (res.data.code === 1) {
                    dispatch(errMsg(res.data.msg));
                } else {
                    dispatch(getAllArrSync(res.data.list))
                }
            } else {
                dispatch(errMsg(res.statusText));
            }
        })
    }
}

export function insertAllArr(allArrangeInfo) {
    // console.log("allArrangeInfo: ", allArrangeInfo);
    return dispatch => {
        axios.post(proxy + '/insert', {
            allArrange: allArrangeInfo
        }).then(res => {
            console.log(res);
            if (res.status === 200) {
                if (res.data.code !== 0) {
                    dispatch(errMsg(res.data.msg));
                } else {
                    dispatch(insertAllArrSync(res.data.list))
                }
            } else {
                dispatch(errMsg(res.statusText));
            }
        })
    }
}

export function editAllArr(_id, allArrange) {
    return dispatch => {
        axios.post(proxy + '/update', {
            _id,
            allArrange
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0) {
                    dispatch(errMsg(res.data.msg))
                } else {
                    dispatch(editAllArrSync(_id, allArrange))
                }
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function deleteAllArr(_id) {
    return dispatch => {
        axios.post(proxy + '/delete', {
            _id
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(deleteAllArrSync(_id));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}
