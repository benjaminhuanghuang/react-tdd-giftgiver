import React from "react"
import { shallow } from 'enzyme'
//
import Gift from './Gift'
describe('Gift', () => {
  const mockRemove = jest.fn();
  const id =1;
  const props = {gift: {id}, removeGift:mockRemove};
  
  const gift = shallow(<Gift {...props}/>);
  
  it("renders correnctly", () => {
    expect(gift).toMatchSnapshot()
  })


  it("init a persion and present in `state`", () => {
    expect(gift.state()).toEqual({
      person: '',
      present: ''
    })
  })


  describe('When typing into the person input', () => {
    const person = 'abcd';
    beforeEach(() => {
      gift.find('.input-person').simulate('change', { target: { value: person, name: 'person' } })
    })

    it("updates the person in state", () => {
      expect(gift.state().person).toEqual(person)
    })

  })

  describe('When typing into the present input', () => {
    const present = 'abcd';

    beforeEach(() => {
      gift.find('.input-present').simulate('change', { target: { value: present, name: 'present' } })
    })

    it("updates the present in state", () => {
      expect(gift.state().present).toEqual(present)
    })

  })

  describe('When click the `remove gift` button', () => {
    beforeEach(() => {
      gift.find('.btn-remove').simulate('click');
    })

    it("Call the removeGift callback", () => {
      expect(mockRemove).toHaveBeenCalledWith(id)
    })
  })
})




