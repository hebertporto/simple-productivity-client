import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import { connect } from 'react-redux'

import SectionCentered from './../grid/SectionCentered'
import LoggedMenu from './header/LoggedMenu'

import { signOut } from './../../../../redux/actions/auth/actions'

import './../../style/header.css'

class Header extends Component {
  state = {}

  renderLoggedMenu = () => (
    <LoggedMenu
      logoutFunc={() => this.props.signOut()}
    />
  )

  render () {
    const { logged } = this.props
    return (
      <SectionCentered>
        <Menu borderless={false} stackable size='large'>
          {logged && this.renderLoggedMenu}
        </Menu>
      </SectionCentered>
    )
  }
}

Header.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
