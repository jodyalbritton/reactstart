import React, { Component } from 'react'
import { connect } from 'react-redux'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

class Home extends Component {
  // Home Container
  // See /src/routes/index

  render() {
    return (
        <div className="body-wrapper">
          <Grid container>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className="body-content">
                Home Column #1
              </Paper>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Paper className="body-content">
                Home Column #2
              </Paper>
            </Grid>
          </Grid>
        </div>
    )
  }
}


// Map the router state to props
const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})


export default connect(mapStateToProps)(Home)
