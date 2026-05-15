<?php
declare(strict_types=1);

// JokeFather SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class JokeFatherMakeContext
{
    public static function call(array $ctxmap, ?JokeFatherContext $basectx): JokeFatherContext
    {
        return new JokeFatherContext($ctxmap, $basectx);
    }
}
