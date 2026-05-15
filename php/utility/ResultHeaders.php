<?php
declare(strict_types=1);

// JokeFather SDK utility: result_headers

class JokeFatherResultHeaders
{
    public static function call(JokeFatherContext $ctx): ?JokeFatherResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
