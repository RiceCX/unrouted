import type { SuperTest, Test } from 'supertest'
import supertest from 'supertest'
import { createApp as createH3App } from 'h3'
import { describe, expect, it } from 'vitest'
import simpleServeApi from '../fixtures/api/simpleServeApi'
import { serve } from '../assertions'

describe('serve static test', async() => {
  const app = createH3App({
    onError() {
      // do nothing
    },
  })

  const api = await simpleServeApi()
  const request: SuperTest<Test> = supertest(app)

  app.use(api)

  it('serving sub api works', async() => {
    const subApiResponse = await request.get('/static/my-sub-api')
    expect(subApiResponse.ok).toBeTruthy()
  })

  await serve(request)
})
