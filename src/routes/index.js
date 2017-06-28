import React from 'react'
import { Route, Switch } from 'react-router'
import App from '../containers/App'
import Home from '../containers/Home'
import Demo from '../containers/Demo'


const routes = (
  <div>
    <App>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/demo" component={Demo} />
      </Switch>
    </App>
  </div>
)

export default routes
