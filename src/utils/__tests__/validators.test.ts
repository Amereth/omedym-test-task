import { minDateNowValidator } from '../validators'

describe('minDateNowValidator', () => {
  it('should return true if value is in future', () => {
    const futureDate = new Date('2122-01-01').toISOString()
    expect(minDateNowValidator(futureDate)).toBe(true)
  })

  it('should return false if value is in past', () => {
    const pastDate = new Date('2020-01-01').toISOString()
    expect(minDateNowValidator(pastDate)).toBe(false)
  })

  it('should return true if value is empty', () => {
    expect(minDateNowValidator()).toBe(true)
  })
})
