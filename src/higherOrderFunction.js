const sum = (numberA, numberB) => numberA + numberB

console.log('Simple Sum', sum(2, 4))

const double = (fn, ...args) => {

  const result = fn(...args)

  return fn(result, result)
}

console.log('Double Sum', double(sum, 2, 4))
