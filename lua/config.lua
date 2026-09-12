-- JokeFather SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "JokeFather",
      slug = "joke-father",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://jokefather.com",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["joke"] = {},
      },
    },
    entity = {
      ["joke"] = {
        ["fields"] = {
          {
            ["name"] = "id",
            ["req"] = true,
            ["short"] = "Unique identifier for the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "joke",
            ["req"] = true,
            ["short"] = "The complete joke text",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "punchline",
            ["short"] = "The punchline/answer part of the joke",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "setup",
            ["short"] = "The setup/question part of the joke",
            ["type"] = "`$STRING`",
          },
        },
        ["id"] = {
          ["field"] = "id",
          ["name"] = "id",
        },
        ["name"] = "joke",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {},
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/api/jokes/random",
                ["segments"] = {
                  {
                    ["lit"] = "api",
                  },
                  {
                    ["lit"] = "jokes",
                  },
                  {
                    ["lit"] = "random",
                  },
                },
                ["select"] = {
                  ["$action"] = "random",
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["parts"] = {
                  "api",
                  "jokes",
                  "random",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
