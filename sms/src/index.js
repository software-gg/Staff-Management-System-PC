import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore, applyMiddleware, compose } from 'redux'
import { reducers } from './index.redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    BrowserRouter,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'

// 引入全部组件
import Login from './container/login/login';
import ApplyDetail from './container/apply/detail';
import ApplyGoldbrick from './container/apply/goldbrick';
import ApplyWorkaholic from './container/apply/workaholic';
import ArrangeDetail from './container/arrange/detail';
import ArrangeGeneral from './container/arrange/general';
import Attend from './container/attend/attend';
import Department from './container/department/department';
import EmployeeCheck from './container/employee/check';
import EmployeeCreate from './container/employee/create';
import EmployeeEdit from './container/employee/edit';
import EmployeeList from './container/employee/list';
import EmployeePasswd from './container/employee/passwd';
import EmployeeSelect from './container/employee/select';
import Message from './container/message/message';
import NotFound from './container/others/notFound';
import AuthRoute from './container/others/authRoute';

// import AuthRouter from './component/authroute/authroute';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : f => f
const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    reduxDevtools
));

ReactDOM.render(
    (<Provider store={store}>
        <BrowserRouter>
            <div>
                {/* <AuthRoute></AuthRoute> */}
                <Switch>
                    <Route path='/login' exact component={Login}></Route>
                    <Route path='/apply/detail' exact component={ApplyDetail}></Route>
                    <Route path='/apply/goldbrick' exact component={ApplyGoldbrick}></Route>
                    <Route path='/apply/workaholic' exact component={ApplyWorkaholic}></Route>
                    <Route path='/arrange/detail' exact component={ArrangeDetail}></Route>
                    <Route path='/arrange/general' exact component={ArrangeGeneral}></Route>
                    <Route path='/attend' exact component={Attend}></Route>
                    <Route path='/department' exact component={Department}></Route>
                    <Route path='/employee/check' exact component={EmployeeCheck}></Route>
                    <Route path='/employee/create' exact component={EmployeeCreate}></Route>
                    <Route path='/employee/list' exact component={EmployeeList}></Route>
                    {/* <Route path='/employee/edit' component={EmployeeEdit}></Route> */}
                    <Route path='/employee/passwd' exact component={EmployeePasswd}></Route>
                    <Route path='/employee/select' exact component={EmployeeSelect}></Route>
                    <Route path='/message' exact component={Message}></Route>
                    <Route path='/' component={NotFound}></Route>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('root')
);


// render();
// store.subscribe(render);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
