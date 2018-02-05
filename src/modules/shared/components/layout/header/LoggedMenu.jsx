import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'

const LoggedMenu = props => (
  <Menu.Menu position='right'>
    <Menu.Item name='Sign-out' onClick={() => alert('sign-out')} />
  </Menu.Menu>
)

LoggedMenu.PropTypes = {
  logoutFunc: PropTypes.func.isRequired
}

export default LoggedMenu
