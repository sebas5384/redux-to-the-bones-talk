const loggerMiddleware = store => next => action => {
  console.log('--- logger ---')
  console.log(action)
  return next(action)
}

const otherLoggerMiddleware = store => next => action => {
  console.log('--- other logger ---')
  console.log(action)
  return next(action)
}
