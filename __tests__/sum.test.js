'use strict'

import { sum } from '../lib'

describe('map', ()=> {
  it('to be defined', ()=> {
    expect(sum).toBeDefined()
  })
  it('can be run', ()=> {
    expect(sum(1,1)).toBe(2)
  })
})
