# data-worker

Runs a worker function on interval. Every worker instance can be started, stopped, get running status. Optionally name your worker and the worker will be named to what ever you name it + an unique id.

### Example code:
```javascript
// import library
const createWorker = require('data-worker')

// create a worker that runs a worker function every 30 seconds
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
Run test:
```javascript
npm test
```
Configured for use with wallaby testing tool.