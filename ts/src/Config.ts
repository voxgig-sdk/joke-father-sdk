
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }


  main = {
    name: 'JokeFather',
  }


  feature = {
     test:     {
      "options": {
        "active": false
      }
    },

  }


  options = {
    base: "https://jokefather.com",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      joke: {
      },

    }
  }


  entity = {
    "joke": {
      "fields": [
        {
          "name": "id",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "joke",
          "req": true,
          "type": "`$STRING`"
        },
        {
          "name": "punchline",
          "type": "`$STRING`"
        },
        {
          "name": "setup",
          "type": "`$STRING`"
        }
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
                "random"
              ],
              "select": {
                "$action": "random"
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config
}

