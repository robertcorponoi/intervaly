import Task from './task/Task';
/**
 * A simple API that allows you to run functions on an interval using the more reliable setTimeout strategy.
 *
 * All methods are run as async in order to make sure that async methods follow the timeout.
 */
export default class Intervaly {
    /**
     * A reference to the options for this instance of Intervaly.
     *
     * @private
     *
     * @property {Options}
     */
    private _options;
    /**
     * The id returned by setTimeout to be used to stop the timer.
     *
     * @private
     *
     * @property {number}
     */
    private _timer;
    /**
     * A list of the tasks assigned to Intervaly.
     *
     * @private
     *
     * @property {Array<Task>}
     */
    private _tasks;
    /**
     * The amount of ms that has passed since Intervaly was started.
     *
     * @private
     *
     * @property {number}
     */
    private _elapsed;
    /**
     * The time that Intervaly is expected to be at, used to account for drift.
     *
     * @private
     *
     * @property {number}
     */
    private _expected;
    /**
     * The interval that the timer should tick at.
     *
     * @private
     *
     * @property {number}
     */
    private _interval;
    /**
     * @property {Object} options The initialization options passed to Intervaly.
     * @property {number} [options.interval=1000] The amount of time that should pass between ticks of the timer.
     * @property {boolean} [options.autostart=false] Indicates whether or not Intervaly will start the timer as soon as it its initialized.
     */
    constructor(options?: Object);
    /**
     * Adds a task to Intervaly.
     *
     * @param {string} name The name of this task used to modify/remove it.
     * @param {Function} fn The function to run on an interval.
     * @param {number} [interval=1000] The interval that this task should run at.
     *
     * @returns {Task} Returns the task that was created.
     */
    addTask(name: string, fn: Function, interval?: number): Task;
    /**
     * Removes a task from Intervaly by name.
     *
     * @param {string} name The name of the task to remove.
     */
    removeTask(name: string): void;
    /**
     * Starts Intervaly.
     */
    start(): void;
    /**
     * Stops the operation of Intervaly.
     */
    stop(): void;
    /**
     * Runs once every second and processes any tasks that need to be processed on this tick.
     *
     * @private
     */
    private _tick;
}
