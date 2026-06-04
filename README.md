# JokeFather SDK

Serve up dad jokes from a small, no-auth API that returns a random groan-worthy one-liner

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Joke Father

[Joke Father](https://jokefather.com) is a small public API that hands back dad jokes — the kind written to provoke groans as much as laughter. The site is a consumer-facing joke viewer ("Made with love in Jersey City") with a thin HTTP API behind it that anyone can call.

What you get from the API:
- A random dad joke on demand via `GET /api/jokes/random`
- Plain joke text suitable for chat bots, status pages, screensavers, or quick novelty integrations

Operational notes: the API is unauthenticated and free to call. The freepublicapis.com listing notes that CORS is not enabled, so browser-side calls from another origin may need a server-side proxy. No rate limits are published, so be polite with request volume.

## Try it

**TypeScript**
```bash
npm install joke-father
```

**Python**
```bash
pip install joke-father-sdk
```

**PHP**
```bash
composer require voxgig/joke-father-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/joke-father-sdk/go
```

**Ruby**
```bash
gem install joke-father-sdk
```

**Lua**
```bash
luarocks install joke-father-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { JokeFatherSDK } from 'joke-father'

const client = new JokeFatherSDK({})

```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o joke-father-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "joke-father": {
      "command": "/abs/path/to/joke-father-mcp"
    }
  }
}
```

## Entities

The API exposes one entity:

| Entity | Description | API path |
| --- | --- | --- |
| **Joke** | A single dad joke, fetched one at a time from `GET /api/jokes/random`. | `/api/jokes/random` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from jokefather_sdk import JokeFatherSDK

client = JokeFatherSDK({})


# Load a specific joke
joke, err = client.Joke(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'jokefather_sdk.php';

$client = new JokeFatherSDK([]);


// Load a specific joke
[$joke, $err] = $client->Joke(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/joke-father-sdk/go"

client := sdk.NewJokeFatherSDK(map[string]any{})

```

### Ruby

```ruby
require_relative "JokeFather_sdk"

client = JokeFatherSDK.new({})


# Load a specific joke
joke, err = client.Joke(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("joke-father_sdk")

local client = sdk.new({})


-- Load a specific joke
local joke, err = client:Joke(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = JokeFatherSDK.test()
const result = await client.Joke().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = JokeFatherSDK.test(None, None)
result, err = client.Joke(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = JokeFatherSDK::test(null, null);
[$result, $err] = $client->Joke(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Joke(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = JokeFatherSDK.test(nil, nil)
result, err = client.Joke(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Joke(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Joke Father

- Upstream: [https://jokefather.com](https://jokefather.com)

- No licence is published on the Joke Father site or its freepublicapis.com listing
- Treat returned joke text as the work of its original authors; attribute Joke Father when republishing
- Confirm permitted use with the operator before commercial redistribution

---

Generated from the Joke Father OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
