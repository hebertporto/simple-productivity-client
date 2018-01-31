import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'
import If from '../../helpers/If'

const LoggedMenu = props => (
  <If test={props.logged}>
    <Menu.Item name='Sign-out' onClick={() => alert('sign-out')} />
  </If>
)

LoggedMenu.PropTypes = {
  logged: PropTypes.bool.isRequired,
  logoutFunc: PropTypes.func.isRequired
}

export default LoggedMenu
