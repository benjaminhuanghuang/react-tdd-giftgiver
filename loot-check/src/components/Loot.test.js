import React from "react"
import { mount, shallow } from 'enzyme'
//
import Loot from './Loot'

describe('Loot', () => {
  const mockFetchbitcoin = jest.fn();
  const props = { balance: 10, bitcoin: {} }
  const loot = shallow(<Loot {...props} />)

  it("renders correnctly", () => {
    expect(loot).toMatchSnapshot()
  })


  describe('when mounted', () => {
    const mockFetchbitcoin = jest.fn();
    beforeEach(() => {
      props.fetchBitcoin = mockFetchbitcoin;
      loot = mount(<Loot {...props} />)
    })

    it('dispatches the `fetchBitcoin()` method it receives from props', () => {
      expect(mockFetchbitcoin).toHaveBeenCalled();
    })
  })


  describe('when there are valid bitcoin props', () => {
    beforeEach(() => {
      props = { balance: 10, bitcoin: { bpi: { USD: { rate: '1' } } } };
      loot = shallow(<Loot {...props} />)
    })

    it('display the correct bitcoin value', () => {
      expect(loot.find('h3').text()).toEqual('Bitcoin balance: 0.01');
    })
  })
})




