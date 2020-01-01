import React from "react"
import { shallow } from 'enzyme'
//
import Wallet from './Wallet'

describe('Wallet', ()=>{
  const app = shallow(<Wallet />)

  it("renders correnctly", () => {
    expect(app).toMatchSnapshot()
  })
  
})
