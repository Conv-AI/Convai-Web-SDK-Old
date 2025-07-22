declare class AsyncBlockingQueue<T> {
    private resolvers;
    private promises;
    private _add;
    enqueue(value: T): void;
    dequeue(): Promise<T>;
    isEmpty(): boolean;
    isBlocked(): boolean;
    get length(): number;
    [Symbol.asyncIterator](): AsyncIterableIterator<T>;
}
export { AsyncBlockingQueue };
