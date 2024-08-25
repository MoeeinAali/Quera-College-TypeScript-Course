enum Operation {
  ADD = "+",
  SUBTRACT = "-",
  MULTIPLY = "*",
  DIVIDE = "/",
}

function performOperation(values: [number, number], operation: Operation): number {
  switch (operation) {
    case Operation.ADD:
      return values[0] + values[1]
    case Operation.SUBTRACT:
      return values[0] - values[1]
    case Operation.MULTIPLY:
      return values[0] * values[1]
    case Operation.DIVIDE:
      return values[0] / values[1]
    default:
      throw new Error('unknown operation')
  }
}

export { Operation, performOperation };
