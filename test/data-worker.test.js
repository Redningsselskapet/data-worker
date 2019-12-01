
'use strict'
const createDataWorker = require('../')
jest.useFakeTimers()

test('calling isRunning() returns false on newly created worker', () => {
  const worker = createDataWorker({worker: () => {}, interval: 2000})
    expect(worker.isRunning()).toBeFalsy()
})

test('calling isRunning() returns true after calling start()', () => {
  const worker = createDataWorker({worker: () => {}, interval: 2000})
  worker.start()
  expect(worker.isRunning()).toBeTruthy
})

test('calling isRunning() returns false after calling stop() on a running worker', () => {
  const worker = createDataWorker({worker: () => {}, interval: 2000})
  worker.start()
  worker.stop()
  expect(worker.isRunning()).toBeFalsy()
})

test('the worker function is being called after calling start()', () => {
  const workerFunc = jest.fn()
  const interval = 1000
  const worker = createDataWorker({worker: workerFunc, interval: interval})
  worker.start()
  jest.runTimersToTime(interval*4)
  expect(workerFunc).toBeCalledTimes(4)
})

test('calling stop() on a running worker stops running the worker function', () => {
  const workerFunc = jest.fn()
  const interval = 1000
  const worker = createDataWorker({worker: workerFunc, interval: interval})
  worker.start()
  jest.runTimersToTime(interval*4)
  worker.stop()
  jest.runOnlyPendingTimers()
  expect(workerFunc).toBeCalledTimes(4)
})

test('All workers are created with a unique name', () => {
  const worker1 = createDataWorker({worker: () => {}, interval: 2000, name: 'worker'})
  const worker2 = createDataWorker({worker: () => {}, interval: 2000, name: 'worker'})
  expect(worker1.name() !== worker2.name()).toBeTruthy()
})


