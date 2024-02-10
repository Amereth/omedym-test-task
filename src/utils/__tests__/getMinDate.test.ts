import { getMinDate } from '../getMinDate'

describe('getMinDate', () => {
  it('should be 16 characters long', () => {
    const minDate = getMinDate()
    expect(minDate).toHaveLength(16)
  })
})
