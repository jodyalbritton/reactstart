import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import * as sessionActions from '../actions/sessionActions'
import { connect } from 'react-redux'


import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

class App extends Component {
  props: {
    sessionsActions: Function,
    session: Object,
    children: Object,
  }

  handleToggle(){
    this.props.sessionsActions.toggleSidebar(!this.props.session.sidebar)
  }


  render() {
    return (
      <div>
        <Header title="Home" handleSidebarLeft={::this.handleToggle}/>
        {this.props.children}
        <Sidebar sidebar={this.props.session.sidebar} toggleDrawer={::this.handleToggle}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  session: state.session,
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

const mapDispatchToProps = dispatch => ({
  sessionsActions: bindActionCreators(sessionActions, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
