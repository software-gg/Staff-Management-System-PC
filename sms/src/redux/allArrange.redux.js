import axios from 'axios';

const GET_ALLARR = 'GET_ALLARR';
const TEMP_ADJUST = 'TEMP_ADJUST', FOREVER_ADJUST = 'FOREVER_ADJUST';
const INSERT_ALLARR = 'INSERT_ALLARR', EDIT_EMPLOYEE = 'EDIT_EMPLOYEE';
const EDIT_ALLARR = 'EDIT_ALLARR', DELETE_ALLARR = 'DELETE_ALLARR';
const ERROR = "ERROR";

const initState = {
    allArrangeInfo: [],
    pageInfo: {},
    msg: ''
}

export function allArrange(state = initState, action) {
    const nextState = { ...state, msg: '' };
    switch (action.type) {
        case GET_ALLARR:
            nextState.allArrangeInfo = action.allArrangeInfo;
            return nextState;
        // case TEMP_ADJUST:
        //     nextState.allArrangeInfo.isTemp = 1;
        //     return newState;
        // case FOREVER_ADJUST:
        //     nextState.allArrangeInfo.isTemp = 0;
            return nextState;
        case INSERT_ALLARR:
            nextState.allArrangeInfo = state.allArrangeInfo.concat(action.allArrangeInfo);
            return nextState;
        case EDIT_EMPLOYEE:
            nextState.allArrange.arrange = action.arrange;
            return nextState;
        case EDIT_ALLARR:
            nextState.allArrangeInfo.map(v => {
                if (v._id === action._id)
                    return action.allArrange;
            })
            return nextState;
        case DELETE_ALLARR:
            nextState.allArrangeInfo.filter(v => {
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
