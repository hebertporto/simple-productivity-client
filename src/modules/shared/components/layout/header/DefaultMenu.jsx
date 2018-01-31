import React from 'react'
import PropTypes from 'prop-types'

import { Menu } from 'semantic-ui-react'
import If from '../../helpers/If'

const DefaultMenu = props => (
  <If test={!props.logged}>
    <Menu.Item name='Sign-up' onClick={() => alert('sign in')} />
    <Menu.Item name='Login-in' onClick={() => alert('login')} />
  </If>
)

DefaultMenu.PropTypes = {
  logged: PropTypes.bool.isRequired
}

export default DefaultMenu
