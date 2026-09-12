import { Context } from './Context';
declare class JokeFatherError extends Error {
    isJokeFatherError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { JokeFatherError };
