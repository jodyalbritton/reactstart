// Import react parts
import React                                     from 'react'
import ReactDOM                                  from 'react-dom'

// Wrap everything in this for hot reloading
import { AppContainer }                          from 'react-hot-loader'

// Import redux and connect it to react
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider }                              from 'react-redux'
import thunkMiddleware                           from 'redux-thunk'
import { createLogger }                          from 'redux-logger'
// Import Reducers
import reducers                                  from './reducers'

// Import router middleware and history for routing
import { routerMiddleware, connectRouter }       from 'connected-react-router'
import { createBrowserHistory }                  from 'history'

// Build the app root
import AppRoot                                   from './containers/appRoot'

// Add tap events and init material UI
import injectTapEventPlugin                      from 'react-tap-event-plugin'
import { MuiThemeProvider }                      from 'material-ui/styles'
import theme                                     from './theme'

// We need to reset styles
import "normalize.css/normalize.css"
// And import our default stylesheet
// Import additional styles in the following file
import "./styles/style.scss"


// Let's have some logging to the console

const loggerMiddleware = createLogger({
    level: 'info',
    collapsed: true,
})

// This is needed to register touch and tap events for material ui
injectTapEventPlugin()


const history = createBrowserHistory()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  connectRouter(history)(reducers),
  composeEnhancer(
    applyMiddleware(
      thunkMiddleware,
      loggerMiddleware,
      routerMiddleware(history),
    ),
  ),
)


const render = () => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <MuiThemeProvider theme={theme}>
          <AppRoot history={history} />
        </MuiThemeProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}


render()

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./containers/appRoot', () => {
    render()
  })

  // Reload reducers
  module.hot.accept('./reducers', () => {
    store.replaceReducer(connectRouter(history)(reducers))
  })
}
