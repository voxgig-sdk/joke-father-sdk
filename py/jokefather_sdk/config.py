# JokeFather SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "JokeFather",
            "slug": "joke-father",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://jokefather.com",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "joke": {},
            },
        },
        "entity": {
      "joke": {
        "fields": [
          {
            "name": "id",
            "req": True,
            "short": "Unique identifier for the joke",
            "type": "`$STRING`",
          },
          {
            "name": "joke",
            "req": True,
            "short": "The complete joke text",
            "type": "`$STRING`",
          },
          {
            "name": "punchline",
            "short": "The punchline/answer part of the joke",
            "type": "`$STRING`",
          },
          {
            "name": "setup",
            "short": "The setup/question part of the joke",
            "type": "`$STRING`",
          },
        ],
        "name": "joke",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/api/jokes/random",
                "parts": [
                  "api",
                  "jokes",
                  "random",
                ],
                "select": {
                  "$action": "random",
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
