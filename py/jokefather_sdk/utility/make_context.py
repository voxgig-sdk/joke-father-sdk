# JokeFather SDK utility: make_context

from jokefather_sdk.core.context import JokeFatherContext


def make_context_util(ctxmap, basectx):
    return JokeFatherContext(ctxmap, basectx)
