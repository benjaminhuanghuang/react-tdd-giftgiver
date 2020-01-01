import React, { Component } from 'react'
//
import { connect } from 'react-redux'

export class Wallet extends Component {
  render() {
    return (
      <div className='balance'>
        <h2>{this.props.balance}</h2>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  balance: state
})
export default connect(mapStateToProps, null)(Wallet)