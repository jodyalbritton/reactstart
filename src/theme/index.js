import {blue700, blue500, pinkA200, grey100, grey400, white, grey300, grey500, darkBlack, fullBlack} from 'material-ui/styles/colors'
import {createMuiTheme} from 'material-ui/styles'
import createPalette from 'material-ui/styles/palette'

const Theme = createMuiTheme({
  palette: createPalette({
     type: 'light', // Switching the dark mode on is a single property value change.
     primary: blue500,
     accent: pinkA200
   }),
  })


export default Theme
