-- JokeFather SDK error

local JokeFatherError = {}
JokeFatherError.__index = JokeFatherError


function JokeFatherError.new(code, msg, ctx)
  local self = setmetatable({}, JokeFatherError)
  self.is_sdk_error = true
  self.sdk = "JokeFather"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function JokeFatherError:error()
  return self.msg
end


function JokeFatherError:__tostring()
  return self.msg
end


return JokeFatherError
