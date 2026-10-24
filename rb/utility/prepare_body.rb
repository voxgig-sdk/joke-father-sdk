# JokeFather SDK utility: prepare_body
require_relative 'media'
module JokeFatherUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return JokeFatherUtilities.raw_body(ctx.reqdata) if JokeFatherUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
