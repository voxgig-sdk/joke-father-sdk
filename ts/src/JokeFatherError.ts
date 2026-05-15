
import { Context } from './Context'


class JokeFatherError extends Error {

  isJokeFatherError = true

  sdk = 'JokeFather'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  JokeFatherError
}

