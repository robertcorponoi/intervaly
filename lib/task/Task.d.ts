/**
 * A task is a method with controlling properties that runs on a specified interval.
 */
export default class Task {
    /**
     * The name of this task.
     *
     * @property {string}
     *
     * @private
     */
    private _name;
    /**
     * The function to run as a part of this task.
     *
     * @property {Function}
     *
     * @private
     */
    private _fn;
    /**
     * The interval that this task should run at.
     *
     * @property {number}
     *
     * @private
     */
    private _interval;
    /**
     * @param {string} name The name of this task.
     * @param {Function} fn The function to run as a part of this task.
     * @param {number} interval The interval that this task should run at.
     */
    constructor(name: string, fn: Function, interval: number);
    /**
     * Gets the name of this task.
     *
     * @returns {string}
     */
    get name(): string;
    /**
     * Gets the function associated with this task.
     *
     * @returns {Function}
     */
    get fn(): Function;
    /**
     * Gets the interval that this task runs at.
     *
     * @returns {number}
     */
    get interval(): number;
    /**
     * Sets a new interval for this task.
     *
     * @property {number} newInterval The new interval to set for this task.
     */
    set interval(newInterval: number);
    /**
     * Runs the function associated with this task.
     */
    run(): void;
}
