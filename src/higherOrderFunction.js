const sum = (numA, numB) => numA + numB

console.log('SOMA SIMPLES', sum(1, 3))

const double = fn => {
  return (...args) => {
    return fn(...args) + fn(...args)
  }
}

const doubleSum = double(sum)

console.log('SOMA DOBRADA', doubleSum(1, 3))
