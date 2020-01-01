import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'

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
      <div className='gift'>
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
        <Button className="btn-remove" onClick={()=>this.props.removeGift(this.props.gift.id)}>
          Remove Gift
        </Button>
      </div>
    )
  }
}
