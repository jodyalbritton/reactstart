import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import routes from '../routes'

// @flow

const AppRoot = ({ history }) => {
  // AppRoot component
  // Enables the connected router and history
  return (
      <ConnectedRouter history={history}>
        { routes }
      </ConnectedRouter>
  )
}

AppRoot.propTypes = {
  history: PropTypes.object,
}

export default AppRoot
