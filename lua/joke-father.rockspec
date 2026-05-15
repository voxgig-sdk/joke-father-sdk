package = "voxgig-sdk-joke-father"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/joke-father-sdk.git"
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
