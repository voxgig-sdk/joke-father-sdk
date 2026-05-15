<?php
declare(strict_types=1);

// JokeFather SDK exists test

require_once __DIR__ . '/../jokefather_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = JokeFatherSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
