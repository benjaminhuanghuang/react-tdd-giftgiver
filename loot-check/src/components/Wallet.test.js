import React from "react"
import { shallow } from 'enzyme'
//
import { Wallet } from './Wallet'

describe('Wallet', () => {
  const props = {balance:20}
  const wallet = shallow(<Wallet {...props}/>)

  it("renders correnctly", () => {
    expect(wallet).toMatchSnapshot()
  })

  it('display balance from props', ()=>{
    expect(wallet.find('.balance').text()).toMatch('0')
  })
})
