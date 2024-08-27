function evenNumberFilter(number: number): boolean {
    return number % 2 == 0
}

function oddNumberFilter(number: number): boolean {
    return !evenNumberFilter(number)
}

function filter(predicateFunc: Function): number[] {
    const result = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    return result.filter((value) => {
        return predicateFunc(value);
    })
}


export { filter, evenNumberFilter, oddNumberFilter }