import { combineReducers } from 'redux';
import { users } from './redux/user.redux';
import { allArrange } from './redux/allArrange.redux';
import { apply } from './redux/apply.redux';
import { arrange } from './redux/arrange.redux';
import { department } from './redux/department.redux';
import { message } from './redux/message.redux';

export const reducers = combineReducers({
    user: users,
    allArrange,
    apply,
    arrange,
    department,
    message
});
