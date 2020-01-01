import balanceReducer from './balance'
import balanceReducer2 from './balance'
import * as constants from '../actions/constants'


describe('balanceReducer', ()=>{
  describe('when initializing',()=>{
    const balance =10;

    it('set a balance', ()=>{
      const balance =10;
      expect(balanceReducer(undefined, {  
        type: constants.SET_BALANCE, 
        balance
      })).toEqual(balance);
    })

    describe('then re-initializing',()=>{
      it('reads the balance from cookies', ()=>{
        expect(balanceReducer2(undefined, {})).toEqual(balance);
      })
    })
  })

  it('deposit into the balance', ()=>{
    const deposit =10;
    const initState = 5;
    expect(balanceReducer(initState, {
      type: constants.DEPOSIT, 
      deposit
    })).toEqual(initState + deposit);
  })

  it('withdraw from the balance', ()=>{
    const withdraw =10;
    const initState = 20;
    expect(balanceReducer(initState, {
      type: constants.WITHDRAW, 
      withdraw
    })).toEqual(initState - withdraw);
  })
})