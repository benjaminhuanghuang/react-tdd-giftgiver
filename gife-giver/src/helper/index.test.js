import { max_number } from './index'

describe('max_number', () => {
  describe('give an empty array', () => {
    it("return 0", () => {
      expect(max_number([])).toEqual(0)
    })

  })
  describe('give an array of nubmers', () => {
    it("return 0", () => {
      expect(max_number([1, 2, 3])).toEqual(3)
    })
  })
})