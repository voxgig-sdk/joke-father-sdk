<?php
declare(strict_types=1);

// JokeFather SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

JokeFatherUtility::setRegistrar(function (JokeFatherUtility $u): void {
    $u->clean = [JokeFatherClean::class, 'call'];
    $u->done = [JokeFatherDone::class, 'call'];
    $u->make_error = [JokeFatherMakeError::class, 'call'];
    $u->feature_add = [JokeFatherFeatureAdd::class, 'call'];
    $u->feature_hook = [JokeFatherFeatureHook::class, 'call'];
    $u->feature_init = [JokeFatherFeatureInit::class, 'call'];
    $u->fetcher = [JokeFatherFetcher::class, 'call'];
    $u->make_fetch_def = [JokeFatherMakeFetchDef::class, 'call'];
    $u->make_context = [JokeFatherMakeContext::class, 'call'];
    $u->make_options = [JokeFatherMakeOptions::class, 'call'];
    $u->make_request = [JokeFatherMakeRequest::class, 'call'];
    $u->make_response = [JokeFatherMakeResponse::class, 'call'];
    $u->make_result = [JokeFatherMakeResult::class, 'call'];
    $u->make_point = [JokeFatherMakePoint::class, 'call'];
    $u->make_spec = [JokeFatherMakeSpec::class, 'call'];
    $u->make_url = [JokeFatherMakeUrl::class, 'call'];
    $u->param = [JokeFatherParam::class, 'call'];
    $u->prepare_auth = [JokeFatherPrepareAuth::class, 'call'];
    $u->prepare_body = [JokeFatherPrepareBody::class, 'call'];
    $u->prepare_headers = [JokeFatherPrepareHeaders::class, 'call'];
    $u->prepare_method = [JokeFatherPrepareMethod::class, 'call'];
    $u->prepare_params = [JokeFatherPrepareParams::class, 'call'];
    $u->prepare_path = [JokeFatherPreparePath::class, 'call'];
    $u->prepare_query = [JokeFatherPrepareQuery::class, 'call'];
    $u->result_basic = [JokeFatherResultBasic::class, 'call'];
    $u->result_body = [JokeFatherResultBody::class, 'call'];
    $u->result_headers = [JokeFatherResultHeaders::class, 'call'];
    $u->transform_request = [JokeFatherTransformRequest::class, 'call'];
    $u->transform_response = [JokeFatherTransformResponse::class, 'call'];
});
