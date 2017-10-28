import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { MemoryRouter, Route, Switch } from 'react-router-dom';
import { store } from './store'

// Styles
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import '../scss/style.scss'

// Containers
import Home from './containers/Home/'

ReactDOM.render((
  <Provider store={store}>
    <MemoryRouter>
      <Switch>
        <Route path="/" name="Home" component={Home}/>
      </Switch>
    </MemoryRouter>
  </Provider>
), document.getElementById('root'));
