'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Task = _interopRequireDefault(require("./task/Task"));

var _Options = _interopRequireDefault(require("./options/Options"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    this._options = new _Options["default"](options);
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
      var task = new _Task["default"](name, fn, interval);

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
  }]);

  return Intervaly;
}();

exports["default"] = Intervaly;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJJbnRlcnZhbHkiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJPcHRpb25zIiwiX2ludGVydmFsIiwiaW50ZXJ2YWwiLCJhdXRvc3RhcnQiLCJzdGFydCIsIm5hbWUiLCJmbiIsInRhc2siLCJUYXNrIiwiX3Rhc2tzIiwicHVzaCIsImZpbHRlciIsIl9leHBlY3RlZCIsIkRhdGUiLCJub3ciLCJfdGltZXIiLCJzZXRUaW1lb3V0IiwiX3RpY2siLCJjbGVhclRpbWVvdXQiLCJkcmlmdCIsIkVycm9yIiwibWFwIiwiX2VsYXBzZWQiLCJydW4iLCJNYXRoIiwibWF4Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLcUJBLFM7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQSx1QkFBa0M7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQSxvQ0EzQ1osQ0EyQ1k7O0FBQUEsb0NBbENKLEVBa0NJOztBQUFBLHNDQXpCUCxDQXlCTzs7QUFBQSx1Q0FoQk4sQ0FnQk07O0FBQUE7O0FBRWhDLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBWUYsT0FBWixDQUFoQjtBQUVBLFNBQUtHLFNBQUwsR0FBaUIsS0FBS0YsUUFBTCxDQUFjRyxRQUEvQjtBQUVBLFFBQUksS0FBS0gsUUFBTCxDQUFjSSxTQUFsQixFQUE2QixLQUFLQyxLQUFMO0FBRTlCO0FBRUQ7Ozs7Ozs7Ozs7Ozs7NEJBU1FDLEksRUFBY0MsRSxFQUE2QztBQUFBLFVBQS9CSixRQUErQix1RUFBWixJQUFZO0FBRWpFLFVBQU1LLElBQVUsR0FBRyxJQUFJQyxnQkFBSixDQUFTSCxJQUFULEVBQWVDLEVBQWYsRUFBbUJKLFFBQW5CLENBQW5COztBQUVBLFdBQUtPLE1BQUwsQ0FBWUMsSUFBWixDQUFpQkgsSUFBakI7O0FBRUEsYUFBT0EsSUFBUDtBQUVEO0FBRUQ7Ozs7Ozs7OytCQUtXRixJLEVBQWM7QUFFdkIsV0FBS0ksTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUUsTUFBWixDQUFtQixVQUFDSixJQUFEO0FBQUEsZUFBZ0JBLElBQUksQ0FBQ0YsSUFBTCxLQUFjQSxJQUE5QjtBQUFBLE9BQW5CLENBQWQ7QUFFRDtBQUVEOzs7Ozs7NEJBR1E7QUFBQTs7QUFFTixXQUFLTyxTQUFMLEdBQWlCQyxJQUFJLENBQUNDLEdBQUwsRUFBakI7QUFFQSxXQUFLQyxNQUFMLEdBQWNDLFVBQVUsQ0FBQztBQUFBLGVBQU0sS0FBSSxDQUFDQyxLQUFMLEVBQU47QUFBQSxPQUFELENBQXhCO0FBRUQ7QUFFRDs7Ozs7OzJCQUdPO0FBRUxDLE1BQUFBLFlBQVksQ0FBQyxLQUFLSCxNQUFOLENBQVo7QUFFRDtBQUVEOzs7Ozs7Ozs0QkFLZ0I7QUFBQTs7QUFFZCxVQUFNSSxLQUFhLEdBQUdOLElBQUksQ0FBQ0MsR0FBTCxLQUFhLEtBQUtGLFNBQXhDOztBQUVBLFVBQUlPLEtBQUssR0FBRyxLQUFLbEIsU0FBakIsRUFBNEIsTUFBTSxJQUFJbUIsS0FBSixDQUFVLDhEQUFWLENBQU47QUFFNUIsV0FBS1IsU0FBTCxJQUFrQixLQUFLWCxTQUF2Qjs7QUFFQSxXQUFLUSxNQUFMLENBQVlZLEdBQVosQ0FBZ0IsVUFBQ2QsSUFBRCxFQUFnQjtBQUU5QixZQUFJLE1BQUksQ0FBQ2UsUUFBTCxLQUFrQixDQUF0QixFQUF5QixPQUZLLENBSTlCOztBQUVBLFlBQUksTUFBSSxDQUFDQSxRQUFMLEdBQWdCZixJQUFJLENBQUNMLFFBQXJCLEtBQWtDLENBQXRDLEVBQXlDSyxJQUFJLENBQUNnQixHQUFMO0FBRTFDLE9BUkQ7O0FBVUEsV0FBS0QsUUFBTCxJQUFpQixLQUFLckIsU0FBdEI7QUFFQSxXQUFLYyxNQUFMLEdBQWNDLFVBQVUsQ0FBQyxZQUFNO0FBRTdCLFFBQUEsTUFBSSxDQUFDQyxLQUFMO0FBRUQsT0FKdUIsRUFJckJPLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLeEIsU0FBTCxHQUFpQmtCLEtBQTdCLENBSnFCLENBQXhCO0FBTUQ7Ozs7Ozs7QUFFRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrL1Rhc2snO1xyXG5pbXBvcnQgT3B0aW9ucyBmcm9tICcuL29wdGlvbnMvT3B0aW9ucyc7XHJcblxyXG4vKipcclxuICogQSBzaW1wbGUgQVBJIHRoYXQgYWxsb3dzIHlvdSB0byBydW4gZnVuY3Rpb25zIG9uIGFuIGludGVydmFsIHVzaW5nIHRoZSBtb3JlIHJlbGlhYmxlIHNldFRpbWVvdXQgc3RyYXRlZ3kuXHJcbiAqIFxyXG4gKiBBbGwgbWV0aG9kcyBhcmUgcnVuIGFzIGFzeW5jIGluIG9yZGVyIHRvIG1ha2Ugc3VyZSB0aGF0IGFzeW5jIG1ldGhvZHMgZm9sbG93IHRoZSB0aW1lb3V0LlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJ2YWx5IHtcclxuXHJcbiAgLyoqXHJcbiAgICogQSByZWZlcmVuY2UgdG8gdGhlIG9wdGlvbnMgZm9yIHRoaXMgaW5zdGFuY2Ugb2YgSW50ZXJ2YWx5LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtPcHRpb25zfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX29wdGlvbnM6IE9wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpZCByZXR1cm5lZCBieSBzZXRUaW1lb3V0IHRvIGJlIHVzZWQgdG8gc3RvcCB0aGUgdGltZXIuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF90aW1lcjogYW55ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogQSBsaXN0IG9mIHRoZSB0YXNrcyBhc3NpZ25lZCB0byBJbnRlcnZhbHkuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge0FycmF5PFRhc2s+fVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX3Rhc2tzOiBBcnJheTxUYXNrPiA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgYW1vdW50IG9mIG1zIHRoYXQgaGFzIHBhc3NlZCBzaW5jZSBJbnRlcnZhbHkgd2FzIHN0YXJ0ZWQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9lbGFwc2VkOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgdGltZSB0aGF0IEludGVydmFseSBpcyBleHBlY3RlZCB0byBiZSBhdCwgdXNlZCB0byBhY2NvdW50IGZvciBkcmlmdC5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2V4cGVjdGVkOiBudW1iZXIgPSAwO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaW50ZXJ2YWwgdGhhdCB0aGUgdGltZXIgc2hvdWxkIHRpY2sgYXQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcHJvcGVydHkge09iamVjdH0gb3B0aW9ucyBUaGUgaW5pdGlhbGl6YXRpb24gb3B0aW9ucyBwYXNzZWQgdG8gSW50ZXJ2YWx5LlxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBbb3B0aW9ucy5pbnRlcnZhbD0xMDAwXSBUaGUgYW1vdW50IG9mIHRpbWUgdGhhdCBzaG91bGQgcGFzcyBiZXR3ZWVuIHRpY2tzIG9mIHRoZSB0aW1lci5cclxuICAgKiBAcHJvcGVydHkge2Jvb2xlYW59IFtvcHRpb25zLmF1dG9zdGFydD1mYWxzZV0gSW5kaWNhdGVzIHdoZXRoZXIgb3Igbm90IEludGVydmFseSB3aWxsIHN0YXJ0IHRoZSB0aW1lciBhcyBzb29uIGFzIGl0IGl0cyBpbml0aWFsaXplZC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBPYmplY3QgPSB7fSkge1xyXG5cclxuICAgIHRoaXMuX29wdGlvbnMgPSBuZXcgT3B0aW9ucyhvcHRpb25zKTtcclxuXHJcbiAgICB0aGlzLl9pbnRlcnZhbCA9IHRoaXMuX29wdGlvbnMuaW50ZXJ2YWw7XHJcblxyXG4gICAgaWYgKHRoaXMuX29wdGlvbnMuYXV0b3N0YXJ0KSB0aGlzLnN0YXJ0KCk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHRhc2sgdG8gSW50ZXJ2YWx5LlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoaXMgdGFzayB1c2VkIHRvIG1vZGlmeS9yZW1vdmUgaXQuXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBvbiBhbiBpbnRlcnZhbC5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gW2ludGVydmFsPTEwMDBdIFRoZSBpbnRlcnZhbCB0aGF0IHRoaXMgdGFzayBzaG91bGQgcnVuIGF0LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtUYXNrfSBSZXR1cm5zIHRoZSB0YXNrIHRoYXQgd2FzIGNyZWF0ZWQuXHJcbiAgICovXHJcbiAgYWRkVGFzayhuYW1lOiBzdHJpbmcsIGZuOiBGdW5jdGlvbiwgaW50ZXJ2YWw6IG51bWJlciA9IDEwMDApOiBUYXNrIHtcclxuXHJcbiAgICBjb25zdCB0YXNrOiBUYXNrID0gbmV3IFRhc2sobmFtZSwgZm4sIGludGVydmFsKTtcclxuXHJcbiAgICB0aGlzLl90YXNrcy5wdXNoKHRhc2spO1xyXG5cclxuICAgIHJldHVybiB0YXNrO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYSB0YXNrIGZyb20gSW50ZXJ2YWx5IGJ5IG5hbWUuXHJcbiAgICogXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhlIHRhc2sgdG8gcmVtb3ZlLlxyXG4gICAqL1xyXG4gIHJlbW92ZVRhc2sobmFtZTogc3RyaW5nKSB7XHJcblxyXG4gICAgdGhpcy5fdGFza3MgPSB0aGlzLl90YXNrcy5maWx0ZXIoKHRhc2s6IFRhc2spID0+IHRhc2submFtZSAhPT0gbmFtZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIEludGVydmFseS5cclxuICAgKi9cclxuICBzdGFydCgpIHtcclxuXHJcbiAgICB0aGlzLl9leHBlY3RlZCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX3RpY2soKSk7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcHMgdGhlIG9wZXJhdGlvbiBvZiBJbnRlcnZhbHkuXHJcbiAgICovXHJcbiAgc3RvcCgpIHtcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJ1bnMgb25jZSBldmVyeSBzZWNvbmQgYW5kIHByb2Nlc3NlcyBhbnkgdGFza3MgdGhhdCBuZWVkIHRvIGJlIHByb2Nlc3NlZCBvbiB0aGlzIHRpY2suXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF90aWNrKCkge1xyXG5cclxuICAgIGNvbnN0IGRyaWZ0OiBudW1iZXIgPSBEYXRlLm5vdygpIC0gdGhpcy5fZXhwZWN0ZWQ7XHJcblxyXG4gICAgaWYgKGRyaWZ0ID4gdGhpcy5faW50ZXJ2YWwpIHRocm93IG5ldyBFcnJvcignVGhlIGludGVydmFsIGhhcyBleGNlZWRlZCB0aGUgZXJyb3IgbGltaXQgYW5kIGNhbm5vdCByZWNvdmVyJyk7XHJcblxyXG4gICAgdGhpcy5fZXhwZWN0ZWQgKz0gdGhpcy5faW50ZXJ2YWw7XHJcblxyXG4gICAgdGhpcy5fdGFza3MubWFwKCh0YXNrOiBUYXNrKSA9PiB7XHJcblxyXG4gICAgICBpZiAodGhpcy5fZWxhcHNlZCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5fZWxhcHNlZCwgdGFzay5pbnRlcnZhbCwgdGhpcy5fZWxhcHNlZCAlIHRhc2suaW50ZXJ2YWwgPT09IDApO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2VsYXBzZWQgJSB0YXNrLmludGVydmFsID09PSAwKSB0YXNrLnJ1bigpO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2VsYXBzZWQgKz0gdGhpcy5faW50ZXJ2YWw7XHJcblxyXG4gICAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuXHJcbiAgICAgIHRoaXMuX3RpY2soKTtcclxuXHJcbiAgICB9LCBNYXRoLm1heCgwLCB0aGlzLl9pbnRlcnZhbCAtIGRyaWZ0KSk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19