package core

type JokeFatherError struct {
	IsJokeFatherError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewJokeFatherError(code string, msg string, ctx *Context) *JokeFatherError {
	return &JokeFatherError{
		IsJokeFatherError: true,
		Sdk:              "JokeFather",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *JokeFatherError) Error() string {
	return e.Msg
}
