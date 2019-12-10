'use strict'

import Task from './task/Task';
import Options from './options/Options';

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
  private _options: Options;

  /**
   * The id returned by setTimeout to be used to stop the timer.
   * 
   * @private
   * 
   * @property {number}
   */
  private _timer: any = 0;

  /**
   * A list of the tasks assigned to Intervaly.
   * 
   * @private
   * 
   * @property {Array<Task>}
   */
  private _tasks: Array<Task> = [];

  /**
   * The amount of ms that has passed since Intervaly was started.
   * 
   * @private
   * 
   * @property {number}
   */
  private _elapsed: number = 0;

  /**
   * The time that Intervaly is expected to be at, used to account for drift.
   * 
   * @private
   * 
   * @property {number}
   */
  private _expected: number = 0;

  /**
   * The interval that the timer should tick at.
   * 
   * @private
   * 
   * @property {number}
   */
  private _interval: number;

  /**
   * @property {Object} options The initialization options passed to Intervaly.
   * @property {number} [options.interval=1000] The amount of time that should pass between ticks of the timer.
   * @property {boolean} [options.autostart=false] Indicates whether or not Intervaly will start the timer as soon as it its initialized.
   */
  constructor(options: Object = {}) {

    this._options = new Options(options);

    this._interval = this._options.interval;

    if (this._options.autostart) this.start();

  }

  /**
   * Adds a task to Intervaly.
   * 
   * @param {string} name The name of this task used to modify/remove it.
   * @param {Function} fn The function to run on an interval.
   * @param {number} [interval=1000] The interval that this task should run at.
   * 
   * @returns {Task} Returns the task that was created.
   */
  addTask(name: string, fn: Function, interval: number = 1000): Task {

    const fnPromisfied: Function = this._promisfy(fn);

    const task: Task = new Task(name, fnPromisfied, interval);

    this._tasks.push(task);

    return task;

  }

  /**
   * Removes a task from Intervaly by name.
   * 
   * @param {string} name The name of the task to remove.
   */
  removeTask(name: string) {

    this._tasks = this._tasks.filter((task: Task) => task.name !== name);

  }

  /**
   * Starts Intervaly.
   */
  start() {

    this._expected = Date.now();

    this._timer = setTimeout(() => this._tick());

  }

  /**
   * Stops the operation of Intervaly.
   */
  stop() {

    clearTimeout(this._timer);

  }

  /**
   * Runs once every second and processes any tasks that need to be processed on this tick.
   * 
   * @private
   */
  private _tick() {

    const drift: number = Date.now() - this._expected;

    if (drift > this._interval) throw new Error('The interval has exceeded the error limit and cannot recover');

    this._expected += this._interval;

    this._tasks.map((task: Task) => {

      if (this._elapsed === 0) return;

      if (this._elapsed % task.interval === 0) task.run();

    });

    this._elapsed += this._interval;

    this._timer = setTimeout(() => {

      this._tick();

    }, Math.max(0, this._interval - drift));

  }

  /**
   * Promisfies a function.
   * 
   * @private
   * 
   * @param {Function} fn The function to promisfy.
   * 
   * @returns {Function} Returns the promisfied function.
   */
  private _promisfy(fn: Function): Function {

    return function(...args: any) {

      return new Promise((resolve, reject) => {

        function callback(err: any, result: any) {

          if (err) reject(err);

          else resolve(result);

        }

        args.push(callback);

        fn.call(this, ...args);

      });

    }

  }

};