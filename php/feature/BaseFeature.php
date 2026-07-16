<?php
declare(strict_types=1);

// JokeFather SDK base feature

class JokeFatherBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(JokeFatherContext $ctx, array $options): void {}
    public function PostConstruct(JokeFatherContext $ctx): void {}
    public function PostConstructEntity(JokeFatherContext $ctx): void {}
    public function SetData(JokeFatherContext $ctx): void {}
    public function GetData(JokeFatherContext $ctx): void {}
    public function GetMatch(JokeFatherContext $ctx): void {}
    public function SetMatch(JokeFatherContext $ctx): void {}
    public function PrePoint(JokeFatherContext $ctx): void {}
    public function PreSpec(JokeFatherContext $ctx): void {}
    public function PreRequest(JokeFatherContext $ctx): void {}
    public function PreResponse(JokeFatherContext $ctx): void {}
    public function PreResult(JokeFatherContext $ctx): void {}
    public function PreDone(JokeFatherContext $ctx): void {}
    public function PreUnexpected(JokeFatherContext $ctx): void {}
}
