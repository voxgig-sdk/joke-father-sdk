# JokeFather SDK utility: make_context

from core.context import JokeFatherContext


def make_context_util(ctxmap, basectx):
    return JokeFatherContext(ctxmap, basectx)
