import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom'
import { store } from './store'

// Styles
// App global css
import './global.css'
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css'
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css'
// Import Main styles for this application
import '../scss/style.scss'
// Import Animate.css
import 'animate.css/animate.min.css'

// Containers
import Home from './containers/Home/'

ReactDOM.render((
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" name="Home" component={Home}/>
      </Switch>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
