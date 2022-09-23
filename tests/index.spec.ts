import { vi, describe, beforeEach, afterEach, it } from 'vitest'
import dayjs from 'dayjs'


describe(`test`, () => {
  beforeEach(() => {
    vi.setSystemTime(new Date())
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it(`test dayjs`, () => {
    console.log(dayjs().format(`YYYY-MM-DD`))
    console.log(dayjs().subtract(1, 'day').format(`YYYY-MM-DD`))
  })
})
