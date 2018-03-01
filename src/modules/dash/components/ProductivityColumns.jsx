import React, { Component } from 'react'

import '../style/ProductivityColumns.css'
import { ColumnClient } from './ColumnClient'

class ProductivityColumns extends Component {
  state = {
    novels: []
  }

  render () {
    return (
      <div className="pd-wrapper">
        <ColumnClient />
        <div className='pd-column-2'>
          <h1>Column 2</h1>
        </div>
        <div className='pd-column-3'>
          <h1>Column 3</h1>
        </div>
        <div className='pd-column-4'>
          <h1>Column 4</h1>
        </div>
      </div>
    )
  }
}

export default ProductivityColumns
