import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import Single from './components/Single';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import NotFound from './components/NotFound';
// import authenticated action from  Login action
import { authenticated } from './actions/login';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';

/*
 Check if user token exists
 then dispatch AUTHENTICATED Action
*/
const user = localStorage.getItem('user_token');

if (user) {
  store.dispatch(authenticated());
}
/*
Stateless Router
Component Setup
*/

const Root = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={App} />
          <Route path="/view/:postId" exact component={Single} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  </Provider>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
