# ProjectName SDK exists test

import pytest
from jokefather_sdk import JokeFatherSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = JokeFatherSDK.test(None, None)
        assert testsdk is not None
