import axios from "axios";

const GET_ARR = "GET_ARR", INSERT_ARR = "INSERT_ARR";
const DELETE_ARR = "DELETE_ARR", EDIT_ARR = "EDIT_ARR";
const TEMP_ARR_ADJUST = 'TEMP_ARR_ADJUST';
const FOREVER_ARR_ADJUST = 'FOREVER_ARR_ADJUST';
const IMPORT_ARR = 'IMPORT_ARR', EXPORT_ARR = 'EXPORT_ARR';
const ERROR = 'ERROR';
const proxy = '/arrange';

const initState = {
    arrangeInfo: [],
    pageInfo: {},
    msg: ''
}

export function arrange(state = initState, action) {
    switch (action.type) {
        case GET_ARR:
            return {
                arrangeInfo: action.arrangeInfo,
                msg: ''
            };
        case INSERT_ARR:
            console.log(action)
            return {
                ...state,
                arrangeInfo: state.arrangeInfo.concat(action.arranges),
                msg: ''
            }
        case DELETE_ARR:
            return {
                ...state,
                arrangeInfo: state.arrangeInfo.filter(v => v._id !== action._id),
                msg: ''
            }
        case EDIT_ARR:
            return {
                ...state,
                arrangeInfo: state.arrangeInfo.map(v => {
                    if (v._id === action._id)
                        return action.arrange;
                    else
                        return v;
                }),
                msg: ''
            }
        // case TEMP_ARR_ADJUST:
        //     return {

        //     };
        // case FOREVER_ARR_ADJUST:
        //     return {

        //     };
        case IMPORT_ARR:
            return {
                ...state,
                arrangeInfo: action.arrangeInfo,
                msg: ''
            }
        case EXPORT_ARR:
            return {
                ...state,
                msg: ''
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

function getArrListSync(arrangeInfo) {
    return { type: GET_ARR, arrangeInfo };
}

function insertArrSync(arranges) {
    return { type: INSERT_ARR, arranges };
}

function deleteArrSync(_id) {
    return { type: DELETE_ARR, _id };
}

function editArrSync(_id, arrange) {
    return { type: EDIT_ARR, _id, arrange };
}

function importArrSync(arrangeInfo) {
    return { type: IMPORT_ARR, arrangeInfo };
}

function exportArrSync() {
    return { type: EXPORT_ARR };
}

function errMsg(msg) {
    return { type: ERROR, msg };
}

export function getArrList(departName = '', month = '') {
    const condition = { month };
    if (departName !== '')
        condition.departName = departName;

    return dispatch => {
        axios.post(proxy + '/list/manager', condition).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(getArrListSync(res.data.list));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function insertArr(arrange = []) {
    return dispatch => {
        axios.post(proxy + '/insert', {
            arrange
        }).then(res => {
            console.log(res)
            if (res.status === 200) {
                // if (res.data.code !== 0)
                //     dispatch(errMsg(res.data.msg));
                // else
                    dispatch(insertArrSync(arrange));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function deleteArr(_id) {
    return dispatch => {
        axios.post(proxy + '/delete', {
            _id
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(deleteArrSync(_id));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

export function editArr(_id, arrange) {
    return dispatch => {
        axios.post(proxy + '/update', {
            arrange
        }).then(res => {
            if (res.status === 200) {
                if (res.data.code !== 0)
                    dispatch(errMsg(res.data.msg));
                else
                    dispatch(editArrSync(_id, arrange));
            } else {
                dispatch(errMsg(res.statusText));
            }
        }).catch(err => {
            console.log(err);
        })
    }
}

// export function importArr(arrangeInfo) {
//     return dispatch => {
//         axios.post(proxy + '/import/1', {})
//     }
//     return { type: IMPORT_ARR, arrangeInfo };
// }

// export function exportArr() {
//     return { type: EXPORT_ARR };
// }
