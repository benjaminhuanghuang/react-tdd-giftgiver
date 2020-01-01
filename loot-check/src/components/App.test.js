import React from "react"
import { shallow } from 'enzyme'
//
import App from './App'

describe('App', ()=>{
  const app = shallow(<App />)

  it("renders correnctly", () => {
    expect(app).toMatchSnapshot()
  })


  it("constains a Wallet componnet", () => {
    //console.log(app.debug());  // app constains <Connect(Wallet)/>
    expect(app.find('Connect(Wallet)').exists()).toBe(true);
  })
  
})




