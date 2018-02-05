import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Button, Form, Grid } from 'semantic-ui-react'

import '../style/loginForm.css'

class LoginForm extends Component {
  state = {
    email: 'hebertporto@gmail.com',
    password: '123456'
  }

  handleChange = (event) => {
    const { value, name } = event.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.submit(email, password)
  }

  render () {
    const { email, password } = this.state
    return (
      <Grid className='lf-wrapper' centered columns={1}>
        <Grid.Column mobile={15} tablet={10} computer={4}>
          <Form className='lf-form'>
            <Form.Field>
              <label>Email</label>
              <input placeholder='Email' name='email' value={email} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input placeholder='Password' name='password' type='password' value={password} onChange={this.handleChange} />
            </Form.Field>
            <Button onClick={this.handleSubmit} type='submit'>Submit</Button>
          </Form>
        </Grid.Column>
      </Grid>

    )
  }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
}

export default LoginForm
