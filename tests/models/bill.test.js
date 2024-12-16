import { strict as assert } from 'assert'
import Bill from '../../models/Bill.js'

describe('Bill', () => {
  describe('split()', () => {
    it('should split the bill evenly without a tip', () => {
      const bill = new Bill()
      assert.equal(bill.split(60, 3), 20)
    })
  })
  it('should split the bill evenly with a tip', () => {
    const bill = new Bill()
    assert.equal(bill.split(100, 4, 20), 20)
  })

  it('should handle cases with zero people', () => {
    const bill = new Bill()
    assert.throws(() => {
      bill.split(100, 0, 20)
    }, /provide a number of people/)
  })
})
