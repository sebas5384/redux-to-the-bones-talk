const loggerMiddleware = next => action => {
  bin.log('--- logger ---')
  bin.log(action)
  return next(action)
}

const otherLoggerMiddleware = next => action => {
  bin.log('--- other logger ---')
  bin.log(action)
  return next(action)
}