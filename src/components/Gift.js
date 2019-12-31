import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export default class Gift extends Component {
  constructor(params) {
    super();
    this.state = {
      person: '',
      present: ''
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Group>
            <Form.Label>Person</Form.Label>
            <Form.Control id="person" className='input-person' onChange={this.handleChange}></Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Present</Form.Label>
            <Form.Control id="present" className='input-present' onChange={this.handleChange}></Form.Control>
          </Form.Group>
        </Form>
      </div>
    )
  }
}
