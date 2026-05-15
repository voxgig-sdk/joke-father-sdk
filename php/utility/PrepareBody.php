<?php
declare(strict_types=1);

// JokeFather SDK utility: prepare_body

class JokeFatherPrepareBody
{
    public static function call(JokeFatherContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
