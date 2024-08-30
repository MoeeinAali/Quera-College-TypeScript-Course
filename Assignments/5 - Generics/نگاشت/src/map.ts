export type FMap = <A, B>(f: (x: A) => B, arr: A[]) => B[]

const map: FMap = (f, arr) => arr.map(f)

map(x => x ? 1 : 2, [true, false, true])