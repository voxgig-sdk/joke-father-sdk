# JokeFather SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module JokeFatherFeatures
  def self.make_feature(name)
    case name
    when "base"
      JokeFatherBaseFeature.new
    when "test"
      JokeFatherTestFeature.new
    else
      JokeFatherBaseFeature.new
    end
  end
end
