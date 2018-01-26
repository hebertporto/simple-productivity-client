import React, { Component } from 'react'
import { Card, Image, Button } from 'semantic-ui-react'

import '../style/ProductivityColumns.css'

class ProductivityColumns extends Component {
  state = {
    novels: []
  }

  render () {
    return (
      <div className="pd-wrapper">
        <div className='pd-column-1'>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://www.mystellar.org/uploads/avatars/avatar_3508.jpg?dateline=1495441932'
              />
              <Card.Header>
                Steve Sanders
              </Card.Header>
              <Card.Meta>
                Friends of Elliot
              </Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
              <Image
                floated='right'
                size='mini'
                src='https://www.mystellar.org/uploads/avatars/avatar_3508.jpg?dateline=1495441932'
              />
              <Card.Header>
                Steve Sanders
              </Card.Header>
              <Card.Meta>
                Friends of Elliot
              </Card.Meta>
              <Card.Description>
                Steve wants to add you to the group <strong>best friends</strong>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
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
