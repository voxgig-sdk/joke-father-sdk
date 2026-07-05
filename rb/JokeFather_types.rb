# frozen_string_literal: true

# Typed models for the JokeFather SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Joke entity data model.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] joke
#   @return [String]
#
# @!attribute [rw] punchline
#   @return [String, nil]
#
# @!attribute [rw] setup
#   @return [String, nil]
Joke = Struct.new(
  :id,
  :joke,
  :punchline,
  :setup,
  keyword_init: true
)

# Request payload for Joke#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] joke
#   @return [String, nil]
#
# @!attribute [rw] punchline
#   @return [String, nil]
#
# @!attribute [rw] setup
#   @return [String, nil]
JokeLoadMatch = Struct.new(
  :id,
  :joke,
  :punchline,
  :setup,
  keyword_init: true
)

