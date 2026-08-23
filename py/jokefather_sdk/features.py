# JokeFather SDK feature factory

from jokefather_sdk.feature.base_feature import JokeFatherBaseFeature
from jokefather_sdk.feature.test_feature import JokeFatherTestFeature


_FEATURES = {
    "base": lambda: JokeFatherBaseFeature(),
    "test": lambda: JokeFatherTestFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
