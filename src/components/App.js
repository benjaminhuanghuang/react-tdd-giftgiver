import React, { Component } from 'react'
import { Button } from 'react-bootstrap'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      gifts: []
    };
  }
  addGift = () => {
    const { gifts } = this.state;

    const ids = this.state.gifts.map(gift => gift.id)
    const max_id = ids.legth > 0 ? Math.max(...ids) : 0
    gifts.push({ id: max_id + 1 })

    this.setState({gifts})
  }
  render() {
    return (
      <div>

        <Button className='btn-add' onClick={this.addGift}> Add Gift</Button>
      </div>

    )
  }
}
