import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'

// @flow

const AppRoot = ({ history }) => {
  return (
    <div className="main-app">
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
    </div>
  )
}

AppRoot.propTypes = {
  history: PropTypes.object,
}

export default AppRoot
