import React from 'react'
import AppBar from 'material-ui/AppBar'

class Header extends React.Component {

  props: {
    title: String
  }

  handleSidebarLeft() {
    this.props.handleSidebarLeft()
  }

  render(){
    return(
      <div className="app-navigation">
        <AppBar
          title={this.props.title}
          onLeftIconButtonTouchTap={::this.handleSidebarLeft}
        />
      </div>
    )
  }
}


export default Header
