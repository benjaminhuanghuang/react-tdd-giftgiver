import React, { Component } from 'react'
//
import { connect } from 'react-redux'
//
import { deposit, withdraw } from '../actions/balance'

export class Wallet extends Component {
  constructor() {
    super();
    this.state = {
      balance: 0
    }
  }

  onChange = (event) => {
    this.setState({
      balance: parseInt(event.target.value, 10)
    });
  }

  deposit = () =>{ this.props.deposit(this.state.balance);}
  withdraw = () =>{ this.props.withdraw(this.state.balance);}

  render() {
    return (
      <div className='balance'>
        <h2>Wallet balace: {this.props.balance}</h2>
        <input type="text" className="input-wallet" onChange={this.onChange} />
        <button className='btn-deposit' onClick={this.deposit}>Deposit</button>
        <button className='btn-withdraw' onClick={this.withdraw}>Withdraw</button>
      </div>

    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return  {
    balance: state.balance
  }
}
 
export default connect(mapStateToProps, { deposit , withdraw})(Wallet)