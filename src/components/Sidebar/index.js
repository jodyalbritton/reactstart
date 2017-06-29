import React     from 'react'
import Drawer    from 'material-ui/Drawer'
import { NavLink }  from 'react-router-dom'
import List, { ListItem, ListItemText } from 'material-ui/List'

class Sidebar extends React.Component {

    props: {
      sidebar: Object,
      toggleDrawer: Function,
    }

    render() {
        return (
          <div>
            <Drawer
              open={this.props.sidebar}
              docked={false}
              className="app-drawer"
              onRequestClose={this.props.toggleDrawer}>
              <List className="side-list">
                <NavLink className="nav-link"
                  activeClassName="active"
                  to="/">
                  <ListItem button onTouchTap={this.props.toggleDrawer}>
                    <ListItemText primary="Home" />
                  </ListItem>
                </NavLink>

                <NavLink className="nav-link"
                  activeClassName="active"
                  to="/demo">
                  <ListItem button onTouchTap={this.props.toggleDrawer}>
                    <ListItemText primary="Demo" />
                  </ListItem>
                </NavLink>
              </List>
            </Drawer>
          </div>
        )
    }
}



export default Sidebar
