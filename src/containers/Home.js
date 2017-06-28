import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
        <div>
          Hello Home
        </div>
    )
  }
}

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

const mapDispatchToProps = dispatch => ({
  // map stuff to props
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
