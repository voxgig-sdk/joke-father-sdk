
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JokeFatherSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = JokeFatherSDK.test()
    equal(testsdk instanceof JokeFatherSDK, true,
      'JokeFatherSDK.test() must return a client synchronously')
  })

})
