import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './store';
import Main from './components/Main';
import App from './components/App';
import Single from './components/Single';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Logout from './components/auth/Logout';
import NotFound from './components/NotFound';
import Profile from './components/Profile';
import NewTodo from './components/NewTodo';
// import authenticated action from  Login action
import { authenticated } from './actions/login';

// Import HOC MiddleWares
import requireAuth from './components/hoc/require_auth';
import noRequireAuth from './components/hoc/no_require_auth';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';

/*
 Check if user token exists
 then dispatch AUTHENTICATED Action
*/
const user = localStorage.getItem('token');

if (user) {
  store.dispatch(authenticated(true));
}
/*
Stateless Router
Component Setup
*/

const Root = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={noRequireAuth(Main)} />
            <Route path="/home" exact component={requireAuth(App)} />
            <Route path="/todo/:slug" exact component={Single} />
            <Route path="/login" exact component={noRequireAuth(Login)} />
            <Route path="/register" exact component={noRequireAuth(Register)} />
            <Route path="/logout" exact component={requireAuth(Logout)} />
            <Route path="/profile" exact component={requireAuth(Profile)} />
            <Route path="/create" exact component={requireAuth(NewTodo)} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    </PersistGate>
  </Provider>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
