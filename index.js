'use strict'
const shortID = require('shortid')

function createDataWorker ({ worker, interval, name = '' }) {
  let intervalId
  let isRunning = false
  const workerId = shortID()
  return {
    start: () => {
      intervalId = setInterval(() => {
        worker()
      }, interval)
      isRunning = true
    },

    stop: () => {
      clearInterval(intervalId)
      isRunning = false
    },

    isRunning: () => isRunning,

    name: () => `${name}-${workerId}`
  }
}

module.exports = createDataWorker
