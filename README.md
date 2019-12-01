# data-worker

Runs a worker function on interval. Every worker instance can be started, stopped, view running status. Optionally name your worker. The worker name will be set to what ever you name + an unique id.

Usage:
```javascript
const createWorker = require('data-worker')

// crate a worker that runs a worker function every 30 seconds
const myWorker = createWorker({worker: () => console.log('Doing som work...'), interval: 30000, name: 'my-worker'})

// start worker
myWorker.start()

// get worker status
console.log(myWorker.isRunning()) // true

// get worker name
console.log(myWorker.name()) // my-worker-c234df

// stop worker
myWorker.stop()

// get worker status
console.log(myWorker.isRunning()) // false
```
