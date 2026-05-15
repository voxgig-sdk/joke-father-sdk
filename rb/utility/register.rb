# JokeFather SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

JokeFatherUtility.registrar = ->(u) {
  u.clean = JokeFatherUtilities::Clean
  u.done = JokeFatherUtilities::Done
  u.make_error = JokeFatherUtilities::MakeError
  u.feature_add = JokeFatherUtilities::FeatureAdd
  u.feature_hook = JokeFatherUtilities::FeatureHook
  u.feature_init = JokeFatherUtilities::FeatureInit
  u.fetcher = JokeFatherUtilities::Fetcher
  u.make_fetch_def = JokeFatherUtilities::MakeFetchDef
  u.make_context = JokeFatherUtilities::MakeContext
  u.make_options = JokeFatherUtilities::MakeOptions
  u.make_request = JokeFatherUtilities::MakeRequest
  u.make_response = JokeFatherUtilities::MakeResponse
  u.make_result = JokeFatherUtilities::MakeResult
  u.make_point = JokeFatherUtilities::MakePoint
  u.make_spec = JokeFatherUtilities::MakeSpec
  u.make_url = JokeFatherUtilities::MakeUrl
  u.param = JokeFatherUtilities::Param
  u.prepare_auth = JokeFatherUtilities::PrepareAuth
  u.prepare_body = JokeFatherUtilities::PrepareBody
  u.prepare_headers = JokeFatherUtilities::PrepareHeaders
  u.prepare_method = JokeFatherUtilities::PrepareMethod
  u.prepare_params = JokeFatherUtilities::PrepareParams
  u.prepare_path = JokeFatherUtilities::PreparePath
  u.prepare_query = JokeFatherUtilities::PrepareQuery
  u.result_basic = JokeFatherUtilities::ResultBasic
  u.result_body = JokeFatherUtilities::ResultBody
  u.result_headers = JokeFatherUtilities::ResultHeaders
  u.transform_request = JokeFatherUtilities::TransformRequest
  u.transform_response = JokeFatherUtilities::TransformResponse
}
