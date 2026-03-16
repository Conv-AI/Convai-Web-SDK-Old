declare class AsyncBlockingQueue {
    private queue;
    constructor();
    enqueue(t: any): void;
    dequeue(): any;
    isEmpty(): boolean;
}
export { AsyncBlockingQueue };
