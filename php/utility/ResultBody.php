<?php
declare(strict_types=1);

// JokeFather SDK utility: result_body

class JokeFatherResultBody
{
    public static function call(JokeFatherContext $ctx): ?JokeFatherResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
