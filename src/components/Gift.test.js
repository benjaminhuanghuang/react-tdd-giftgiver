import React from "react"
import { shallow } from 'enzyme'
//
import Gift from './Gift'
describe('Gift', () => {
  const gift = shallow(<Gift />);

  it("renders correnctly", () => {
    expect(gift).toMatchSnapshot()
  })


  it("init a persion and present in `state`", () => {
    expect(gift.state()).toEqual({
      person:'',
      present:''
    })
  })


  describe('When typing into the person instpu', ()=>{
    beforeEach(()=>{
      gift.find('.input-person').simulate('change', {target:{value:'abcd'}})
    })

    afterEach(()=>{
      gift.setState({gifts:[]})
    })
    
    it("updates the person in state", () => {
      expect(gift.state().person).toEqual('abcd')
    })
  
  })

})




