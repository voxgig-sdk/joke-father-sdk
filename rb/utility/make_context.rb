# JokeFather SDK utility: make_context
require_relative '../core/context'
module JokeFatherUtilities
  MakeContext = ->(ctxmap, basectx) {
    JokeFatherContext.new(ctxmap, basectx)
  }
end
