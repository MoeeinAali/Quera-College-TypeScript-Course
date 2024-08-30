export type Filter = <A>(af: (x: A) => boolean, arr: Array<A>) => Array<A>;

const filter: Filter = (f, arr) => arr.filter(f)

filter(x => x > 3 ? true : false, [1, 2, 3, 4, 5])