export interface Joke {
    id: string;
    joke: string;
    punchline?: string;
    setup?: string;
}
export interface JokeLoadMatch {
    id: string;
    joke?: string;
    punchline?: string;
    setup?: string;
    $action?: string;
    [action: string]: any;
}
