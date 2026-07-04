# Typed models for the JokeFather SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Joke:
    id: str
    joke: str
    punchline: Optional[str] = None
    setup: Optional[str] = None


@dataclass
class JokeLoadMatch:
    id: Optional[str] = None
    joke: Optional[str] = None
    punchline: Optional[str] = None
    setup: Optional[str] = None

