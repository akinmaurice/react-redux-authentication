import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './components/App';
import Single from './components/Single';

import registerServiceWorker from './registerServiceWorker';

import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/style.css';


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
        </Switch>
      </div>
    </Router>
  </Provider>
);
render(<Root />, document.querySelector('#root'));
registerServiceWorker();
