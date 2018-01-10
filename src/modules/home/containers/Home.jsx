import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import SectionCentered from './../../shared/components/grid/SectionCentered'
import TableNovels from './../components/TableNovels'
import SideMenu from './../components/SideMenu'

import {
  signOut
} from './../../../redux/actions/auth/actions'

import { fetchAllNovels } from '../../../redux/actions/novel/actions'

import './../style/home.css'

class Home extends Component {
  componentDidMount = () => {
    this.props.fetchAllNovels()
  }

  render () {
    const { novels } = this.props
    return (
      <SectionCentered>
        <SideMenu />
        <TableNovels novels={novels} />
      </SectionCentered>
    )
  }
}

Home.propTypes = {
  logged: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    logged: state.auth.logged,
    novels: state.novel.novels,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    fetchAllNovels: () => dispatch(fetchAllNovels())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
