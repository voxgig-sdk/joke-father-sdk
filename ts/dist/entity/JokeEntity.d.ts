import { JokeFatherEntityBase } from '../JokeFatherEntityBase';
import type { JokeFatherSDK } from '../JokeFatherSDK';
import type { Control } from '../types';
import type { Joke, JokeLoadMatch } from '../JokeFatherTypes';
declare class JokeEntity extends JokeFatherEntityBase<Joke> {
    constructor(client: JokeFatherSDK, entopts: any);
    make(this: JokeEntity): JokeEntity;
    load(this: any, reqmatch?: JokeLoadMatch, ctrl?: Control): Promise<JokeEntity>;
}
export { JokeEntity };
