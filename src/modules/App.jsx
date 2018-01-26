import React, { Component } from 'react'
import Router from './Router'

import Header from './shared/components/layout/Header'

import './shared/style/app.css'
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Router />
      </div>
    )
  }
}

export default App
