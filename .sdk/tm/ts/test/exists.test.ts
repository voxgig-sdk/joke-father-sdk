
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { JokeFatherSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await JokeFatherSDK.test()
    equal(null !== testsdk, true)
  })

})
