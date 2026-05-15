package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewJokeEntityFunc func(client *JokeFatherSDK, entopts map[string]any) JokeFatherEntity

