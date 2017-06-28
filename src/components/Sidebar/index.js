import React     from 'react'
import MenuItem  from 'material-ui/MenuItem'
import Drawer    from 'material-ui/Drawer'
import AppBar    from 'material-ui/AppBar'
import { NavLink }  from 'react-router-dom'

class Sidebar extends React.Component {

    props: {
      sidebar: Object,
      toggleDrawer: Function,
    }

    render() {
        return (
          <div>
            <Drawer open={this.props.sidebar} docked={false} className="app-drawer" onRequestChange={this.props.toggleDrawer}>
              <AppBar showMenuIconButton={false} />
              <NavLink className="nav-link"
                activeClassName="active"
                to="/">
                <MenuItem onTouchTap={this.props.toggleDrawer}>
                  Home
                </MenuItem>
              </NavLink>

              <NavLink className="nav-link"
                activeClassName="active"
                to="/demo">
                <MenuItem onTouchTap={this.props.toggleDrawer}>
                  Demo
                </MenuItem>
              </NavLink>

            </Drawer>
          </div>
        )
    }
}



export default Sidebar
