function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var Task =
/*#__PURE__*/
function () {
  /**
   * The name of this task.
   * 
   * @property {string}
   * 
   * @private
   */

  /**
   * The function to run as a part of this task.
   * 
   * @property {Function}
   * 
   * @private
   */

  /**
   * The interval that this task should run at.
   * 
   * @property {number}
   * 
   * @private
   */

  /**
   * @param {string} name The name of this task.
   * @param {Function} fn The function to run as a part of this task.
   * @param {number} interval The interval that this task should run at.
   */
  function Task(name, fn, interval) {
    _classCallCheck(this, Task);

    _defineProperty(this, "_name", void 0);

    _defineProperty(this, "_fn", void 0);

    _defineProperty(this, "_interval", void 0);

    this._name = name;
    this._fn = fn;
    this._interval = interval;
  }
  /**
   * Gets the name of this task.
   * 
   * @returns {string}
   */


  _createClass(Task, [{
    key: "run",

    /**
     * Runs the function associated with this task.
     */
    value: function run() {
      this._fn();
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
    /**
     * Gets the interval that this task runs at.
     * 
     * @returns {number}
     */

  }, {
    key: "interval",
    get: function get() {
      return this._interval;
    }
    /**
     * Sets a new interval for this task.
     * 
     * @property {number} newInterval The new interval to set for this task.
     */
    ,
    set: function set(newInterval) {
      this._interval = newInterval;
    }
  }]);

  return Task;
}();

var Options =
/**
 * The interval that the timer should tick at.
 * 
 * @property {number}
 * 
 * @default 1000
 */

/**
 * Indicates whether or not Intervaly will start the timer as soon as it its initialized.
 * 
 * @property {boolean}
 * 
 * @default false
 */

/**
 * @property {Object} options The initialization options passed to Intervaly.
 * @property {number} [options.interval=1000] The amount of time that should pass between ticks of the timer.
 * @property {boolean} [options.autostart=false] Indicates whether or not Intervaly will start the timer as soon as it its initialized.
 */
function Options(options) {
  _classCallCheck(this, Options);

  _defineProperty(this, "interval", 1000);

  _defineProperty(this, "autostart", false);

  Object.assign(this, options);
};

/**
 * A simple API that allows you to run functions on an interval using the more reliable setTimeout strategy.
 * 
 * All methods are run as async in order to make sure that async methods follow the timeout.
 */

var Intervaly =
/*#__PURE__*/
function () {
  /**
   * A reference to the options for this instance of Intervaly.
   * 
   * @private
   * 
   * @property {Options}
   */

  /**
   * The id returned by setTimeout to be used to stop the timer.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * A list of the tasks assigned to Intervaly.
   * 
   * @private
   * 
   * @property {Array<Task>}
   */

  /**
   * The amount of ms that has passed since Intervaly was started.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The time that Intervaly is expected to be at, used to account for drift.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * The interval that the timer should tick at.
   * 
   * @private
   * 
   * @property {number}
   */

  /**
   * @property {Object} options The initialization options passed to Intervaly.
   * @property {number} [options.interval=1000] The amount of time that should pass between ticks of the timer.
   * @property {boolean} [options.autostart=false] Indicates whether or not Intervaly will start the timer as soon as it its initialized.
   */
  function Intervaly() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Intervaly);

    _defineProperty(this, "_options", void 0);

    _defineProperty(this, "_timer", 0);

    _defineProperty(this, "_tasks", []);

    _defineProperty(this, "_elapsed", 0);

    _defineProperty(this, "_expected", 0);

    _defineProperty(this, "_interval", void 0);

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


  _createClass(Intervaly, [{
    key: "addTask",
    value: function addTask(name, fn) {
      var interval = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

      var fnPromisfied = this._promisfy(fn);

      var task = new Task(name, fnPromisfied, interval);

      this._tasks.push(task);

      return task;
    }
    /**
     * Removes a task from Intervaly by name.
     * 
     * @param {string} name The name of the task to remove.
     */

  }, {
    key: "removeTask",
    value: function removeTask(name) {
      this._tasks = this._tasks.filter(function (task) {
        return task.name !== name;
      });
    }
    /**
     * Starts Intervaly.
     */

  }, {
    key: "start",
    value: function start() {
      var _this = this;

      this._expected = Date.now();
      this._timer = setTimeout(function () {
        return _this._tick();
      });
    }
    /**
     * Stops the operation of Intervaly.
     */

  }, {
    key: "stop",
    value: function stop() {
      clearTimeout(this._timer);
    }
    /**
     * Runs once every second and processes any tasks that need to be processed on this tick.
     * 
     * @private
     */

  }, {
    key: "_tick",
    value: function _tick() {
      var _this2 = this;

      var drift = Date.now() - this._expected;

      if (drift > this._interval) throw new Error('The interval has exceeded the error limit and cannot recover');
      this._expected += this._interval;

      this._tasks.map(function (task) {
        if (_this2._elapsed === 0) return; // console.log(this._elapsed, task.interval, this._elapsed % task.interval === 0);

        if (_this2._elapsed % task.interval === 0) task.run();
      });

      this._elapsed += this._interval;
      this._timer = setTimeout(function () {
        _this2._tick();
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

  }, {
    key: "_promisfy",
    value: function _promisfy(fn) {
      return function () {
        var _this3 = this;

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return new Promise(function (resolve, reject) {
          function callback(err, result) {
            if (err) reject(err);else resolve(result);
          }

          args.push(callback);
          fn.call.apply(fn, [_this3].concat(args));
        });
      };
    }
  }]);

  return Intervaly;
}();

export default Intervaly;
