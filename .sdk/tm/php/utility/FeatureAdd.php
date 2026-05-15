<?php
declare(strict_types=1);

// JokeFather SDK utility: feature_add

class JokeFatherFeatureAdd
{
    public static function call(JokeFatherContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
