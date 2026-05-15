# JokeFather SDK utility: feature_add
module JokeFatherUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
