import React from "react"
import { shallow } from 'enzyme'
//
import App from './App'
describe('App', ()=>{
  const app = shallow(<App />)

  it("renders correnctly", () => {
    expect(app).toMatchSnapshot()
  })
  
  
  it("renders the state with an empyt list of gift", () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('When click `add-gift` button', ()=>{
    const id = 1;
    beforeEach(()=>{
      app.find('.btn-add').simulate('click');
    })

    afterEach(()=>{
      app.setState({gifts:[]})
    })
    
    it("add a new gift to state when click the add gift button", () => {
      expect(app.state().gifts).toEqual([{ id }])
    })
    
    
    it("add a new gift to the rendered list when click the add gift button", () => {
      expect(app.find('.gift-list').children().length).toEqual(id)
    })

    it("create a Gift component", () => {
      expect(app.find('Gift').exists()).toBe(true)
    })

    describe('remove the added gift', ()=>{
      beforeEach(()=>{
        app.instance().removeGift(id)
      })
  
      afterEach(()=>{
        
      })
      
      it('removes the gift from `state `', ()=>{
        expect(app.state().gifts).toEqual([])
      })
      
    })
  })
})




