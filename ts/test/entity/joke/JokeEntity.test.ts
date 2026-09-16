

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { JokeFatherSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('JokeEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when JOKE_FATHER_TEST_LIVE=TRUE.
  afterEach(liveDelay('JOKE_FATHER_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = JokeFatherSDK.test()
    const ent = testsdk.Joke()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.JOKE_FATHER_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'joke.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"id","req":true,"short":"Unique identifier for the joke","type":"`$STRING`","index$":0},{"active":true,"name":"joke","req":true,"short":"The complete joke text","type":"`$STRING`","index$":1},{"active":true,"name":"punchline","req":false,"short":"The punchline/answer part of the joke","type":"`$STRING`","index$":2},{"active":true,"name":"setup","req":false,"short":"The setup/question part of the joke","type":"`$STRING`","index$":3}],"id":{"field":"id","name":"id"},"name":"joke","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /api/jokes/random","json":"{\"operationId\":\"getRandomJoke\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"examples\":{\"joke\":{\"value\":{\"id\":\"01JN5DCA8DDRQGW2MZ8DCEPHYE\",\"joke\":\"Why don't scientists trust atoms? Because they make up everything!\",\"punchline\":\"Because they make up everything!\",\"setup\":\"Why don't scientists trust atoms?\"}}},\"schema\":{\"properties\":{\"id\":{\"description\":\"Unique identifier for the joke\",\"example\":\"01JN5DCA8DDRQGW2MZ8DCEPHYE\",\"type\":\"string\"},\"joke\":{\"description\":\"The complete joke text\",\"example\":\"Why don't scientists trust atoms? Because they make up everything!\",\"type\":\"string\"},\"punchline\":{\"description\":\"The punchline/answer part of the joke\",\"example\":\"Because they make up everything!\",\"type\":\"string\"},\"setup\":{\"description\":\"The setup/question part of the joke\",\"example\":\"Why don't scientists trust atoms?\",\"type\":\"string\"}},\"required\":[\"id\",\"joke\"],\"type\":\"object\"}}},\"description\":\"Successfully retrieved a random joke\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"code\":{\"description\":\"Error code\",\"type\":\"integer\"},\"error\":{\"description\":\"Error message\",\"type\":\"string\"}},\"required\":[\"error\"],\"type\":\"object\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/api/jokes/random","segments":[{"lit":"api"},{"lit":"jokes"},{"lit":"random"}],"select":{"$action":"random"},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"joke","name__orig":"joke","Name":"Joke","name_":"joke","name-":"joke","NAME":"JOKE","index$":0}, {"active":true,"entity":"joke","key$":"BasicJokeFlow","kind":"basic","name":"BasicJokeFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"joke_ref01","srcdatavar":"joke_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-joke_ref01"}}],"index$":0}]}, 'Joke')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let joke_ref01_data = Object.values(setup.data.existing.joke)[0] as any

    // LOAD
    const joke_ref01_ent = client.Joke()
    const joke_ref01_match_dt0: any = {}
    joke_ref01_match_dt0.id = joke_ref01_data.id
    const joke_ref01_data_dt0 = (await joke_ref01_ent.load(joke_ref01_match_dt0)).data()
    assert(joke_ref01_data_dt0.id === joke_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/joke/JokeTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = JokeFatherSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['joke01','joke02','joke03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'JOKE_FATHER_TEST_JOKE_ENTID': idmap,
    'JOKE_FATHER_TEST_LIVE': 'FALSE',
    'JOKE_FATHER_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['JOKE_FATHER_TEST_JOKE_ENTID']

  const live = 'TRUE' === env.JOKE_FATHER_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['JOKE_FATHER_TEST_JOKE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new JokeFatherSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.JOKE_FATHER_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
