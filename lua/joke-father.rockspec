package = "voxgig-sdk-joke-father"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/joke-father-sdk.git",
  tag = "lua/v0.0.1",
  dir = "joke-father-sdk/lua"
}
description = {
  summary = "JokeFather SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["joke-father_sdk"] = "joke-father_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
