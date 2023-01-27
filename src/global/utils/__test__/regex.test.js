import { emailRegex } from "../emailRegex"
import { numberRegex } from "../numberRegex"

describe('Regex test suite', () => { 
  it('emailRegex should work well', () => {
    const success = emailRegex.test('eric@gmail.com')
    const failure = emailRegex.test('ericgmail.com')
    const failure2 = emailRegex.test('eric@gmailcom')
    expect(success).toBe(true)
    expect(failure).toBe(false)
    expect(failure2).toBe(false)
  })

  it('numberRegex should work well', () => {
    const success = numberRegex.test(123)
    const failure = numberRegex.test('hi')

    expect(success).toBe(true)
    expect(failure).toBe(false)
  })
})