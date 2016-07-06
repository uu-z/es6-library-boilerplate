import test from 'ava'
import {fooo} from './lib'

test('fooo', t => {
  t.truthy(fooo(),'lol')
})
