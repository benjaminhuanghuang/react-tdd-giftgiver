import React from "react"
import { shallow } from 'enzyme'
//
import App from './App'

const app = shallow(<App />)

it("renders correnctly", () => {
  expect(app).toMatchSnapshot()
})


it("renders the state with an empyt list of gift", () => {
  expect(app.state().gifts).toEqual([])
})

it("add a new gift to state when click the add gift button", () => {
  app.find('.btn-add').simulate('click');
  expect(app.state().gifts).toEqual([{ id: 1 }])
})