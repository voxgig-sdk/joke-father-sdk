package voxgigjokefathersdk

import (
	"github.com/voxgig-sdk/joke-father-sdk/core"
	"github.com/voxgig-sdk/joke-father-sdk/entity"
	"github.com/voxgig-sdk/joke-father-sdk/feature"
	_ "github.com/voxgig-sdk/joke-father-sdk/utility"
)

// Type aliases preserve external API.
type JokeFatherSDK = core.JokeFatherSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type JokeFatherEntity = core.JokeFatherEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type JokeFatherError = core.JokeFatherError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewJokeEntityFunc = func(client *core.JokeFatherSDK, entopts map[string]any) core.JokeFatherEntity {
		return entity.NewJokeEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewJokeFatherSDK = core.NewJokeFatherSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
