import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

class Header extends React.Component {
  // Header component
  // Functional stateless component
  // needs two props: title(string) value and the toggle function for the sidebar

  props: {
    title: String,
    handleSidebarLeft: Function
  }

  handleSidebarLeft() {
    this.props.handleSidebarLeft()
  }

  render(){


    return(
      <div className="app-navigation">
        <AppBar position="static">
          <Toolbar>
          <IconButton color="contrast" aria-label="Menu" onTouchTap={::this.handleSidebarLeft}>
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className="appbar-typo">
            {this.props.title}
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
        </AppBar>
      </div>
    )
  }
}


export default Header
