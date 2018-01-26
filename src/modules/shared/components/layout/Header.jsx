import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu, Dropdown, Button } from 'semantic-ui-react'
import ReduxToastr from 'react-redux-toastr'
import { connect } from 'react-redux'
// import { AppBar } from 'material-ui'

import SectionCentered from './../grid/SectionCentered'
// import LoggedMenu from './header/LoggedMenu'

import { signOut } from './../../../../redux/actions/auth/actions'

import './../../style/header.css'

class Header extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render () {
    const { activeItem } = this.state
    // const { logged } = this.props
    return (
      <SectionCentered>
        <Menu borderless='false' stackable size='large'>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item name='messages' active={activeItem === 'messages'} onClick={this.handleItemClick} />

          <Menu.Menu position='right'>
            <Dropdown item text='Language'>
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
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
