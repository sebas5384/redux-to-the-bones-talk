const sum = (numberA, numberB) => numberA + numberB

const double = (fn, ...args) => {

  const result = fn(...args)

  return fn(result, result)
}

console.log(double(sum, 2, 4))
