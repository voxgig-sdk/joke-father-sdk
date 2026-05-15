<?php
declare(strict_types=1);

// JokeFather SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class JokeFatherFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new JokeFatherBaseFeature();
            case "test":
                return new JokeFatherTestFeature();
            default:
                return new JokeFatherBaseFeature();
        }
    }
}
