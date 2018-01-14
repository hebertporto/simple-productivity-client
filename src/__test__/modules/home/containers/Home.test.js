import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'

const middlewares = []
const mockStore = configureStore(middlewares)

import Home from '../../../../modules/home/containers/Home'

describe('Home Container', () => {
  const home = shallow(<Home {...props}/>, {context: { store: mockStore() }})
  it('should redenders properly', () => {
    expect(home).toMatchSnapshot()
  })
})