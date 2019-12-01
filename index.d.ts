interface DataWorker {
  start(): void,
  stop(): void,
  isRunning(): boolean,
  name(): string
}

function createDataWorker ({worker, interval, name}: {worker: CallableFunction, interval: number, name?: string}) : DataWorker

export = createDataWorker
