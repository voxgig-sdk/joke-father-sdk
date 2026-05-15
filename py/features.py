# JokeFather SDK feature factory

from feature.base_feature import JokeFatherBaseFeature
from feature.test_feature import JokeFatherTestFeature


def _make_feature(name):
    features = {
        "base": lambda: JokeFatherBaseFeature(),
        "test": lambda: JokeFatherTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
