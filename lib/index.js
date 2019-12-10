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

      var fnPromisfied = this._promisfy(fn);

      var task = new _Task["default"](name, fnPromisfied, interval);

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
        if (_this2._elapsed === 0) return;
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

exports["default"] = Intervaly;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50cyJdLCJuYW1lcyI6WyJJbnRlcnZhbHkiLCJvcHRpb25zIiwiX29wdGlvbnMiLCJPcHRpb25zIiwiX2ludGVydmFsIiwiaW50ZXJ2YWwiLCJhdXRvc3RhcnQiLCJzdGFydCIsIm5hbWUiLCJmbiIsImZuUHJvbWlzZmllZCIsIl9wcm9taXNmeSIsInRhc2siLCJUYXNrIiwiX3Rhc2tzIiwicHVzaCIsImZpbHRlciIsIl9leHBlY3RlZCIsIkRhdGUiLCJub3ciLCJfdGltZXIiLCJzZXRUaW1lb3V0IiwiX3RpY2siLCJjbGVhclRpbWVvdXQiLCJkcmlmdCIsIkVycm9yIiwibWFwIiwiX2VsYXBzZWQiLCJydW4iLCJNYXRoIiwibWF4IiwiYXJncyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY2FsbGJhY2siLCJlcnIiLCJyZXN1bHQiLCJjYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTs7Ozs7SUFLcUJBLFM7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQSx1QkFBa0M7QUFBQSxRQUF0QkMsT0FBc0IsdUVBQUosRUFBSTs7QUFBQTs7QUFBQTs7QUFBQSxvQ0EzQ1osQ0EyQ1k7O0FBQUEsb0NBbENKLEVBa0NJOztBQUFBLHNDQXpCUCxDQXlCTzs7QUFBQSx1Q0FoQk4sQ0FnQk07O0FBQUE7O0FBRWhDLFNBQUtDLFFBQUwsR0FBZ0IsSUFBSUMsbUJBQUosQ0FBWUYsT0FBWixDQUFoQjtBQUVBLFNBQUtHLFNBQUwsR0FBaUIsS0FBS0YsUUFBTCxDQUFjRyxRQUEvQjtBQUVBLFFBQUksS0FBS0gsUUFBTCxDQUFjSSxTQUFsQixFQUE2QixLQUFLQyxLQUFMO0FBRTlCO0FBRUQ7Ozs7Ozs7Ozs7Ozs7NEJBU1FDLEksRUFBY0MsRSxFQUE2QztBQUFBLFVBQS9CSixRQUErQix1RUFBWixJQUFZOztBQUVqRSxVQUFNSyxZQUFzQixHQUFHLEtBQUtDLFNBQUwsQ0FBZUYsRUFBZixDQUEvQjs7QUFFQSxVQUFNRyxJQUFVLEdBQUcsSUFBSUMsZ0JBQUosQ0FBU0wsSUFBVCxFQUFlRSxZQUFmLEVBQTZCTCxRQUE3QixDQUFuQjs7QUFFQSxXQUFLUyxNQUFMLENBQVlDLElBQVosQ0FBaUJILElBQWpCOztBQUVBLGFBQU9BLElBQVA7QUFFRDtBQUVEOzs7Ozs7OzsrQkFLV0osSSxFQUFjO0FBRXZCLFdBQUtNLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlFLE1BQVosQ0FBbUIsVUFBQ0osSUFBRDtBQUFBLGVBQWdCQSxJQUFJLENBQUNKLElBQUwsS0FBY0EsSUFBOUI7QUFBQSxPQUFuQixDQUFkO0FBRUQ7QUFFRDs7Ozs7OzRCQUdRO0FBQUE7O0FBRU4sV0FBS1MsU0FBTCxHQUFpQkMsSUFBSSxDQUFDQyxHQUFMLEVBQWpCO0FBRUEsV0FBS0MsTUFBTCxHQUFjQyxVQUFVLENBQUM7QUFBQSxlQUFNLEtBQUksQ0FBQ0MsS0FBTCxFQUFOO0FBQUEsT0FBRCxDQUF4QjtBQUVEO0FBRUQ7Ozs7OzsyQkFHTztBQUVMQyxNQUFBQSxZQUFZLENBQUMsS0FBS0gsTUFBTixDQUFaO0FBRUQ7QUFFRDs7Ozs7Ozs7NEJBS2dCO0FBQUE7O0FBRWQsVUFBTUksS0FBYSxHQUFHTixJQUFJLENBQUNDLEdBQUwsS0FBYSxLQUFLRixTQUF4Qzs7QUFFQSxVQUFJTyxLQUFLLEdBQUcsS0FBS3BCLFNBQWpCLEVBQTRCLE1BQU0sSUFBSXFCLEtBQUosQ0FBVSw4REFBVixDQUFOO0FBRTVCLFdBQUtSLFNBQUwsSUFBa0IsS0FBS2IsU0FBdkI7O0FBRUEsV0FBS1UsTUFBTCxDQUFZWSxHQUFaLENBQWdCLFVBQUNkLElBQUQsRUFBZ0I7QUFFOUIsWUFBSSxNQUFJLENBQUNlLFFBQUwsS0FBa0IsQ0FBdEIsRUFBeUI7QUFFekIsWUFBSSxNQUFJLENBQUNBLFFBQUwsR0FBZ0JmLElBQUksQ0FBQ1AsUUFBckIsS0FBa0MsQ0FBdEMsRUFBeUNPLElBQUksQ0FBQ2dCLEdBQUw7QUFFMUMsT0FORDs7QUFRQSxXQUFLRCxRQUFMLElBQWlCLEtBQUt2QixTQUF0QjtBQUVBLFdBQUtnQixNQUFMLEdBQWNDLFVBQVUsQ0FBQyxZQUFNO0FBRTdCLFFBQUEsTUFBSSxDQUFDQyxLQUFMO0FBRUQsT0FKdUIsRUFJckJPLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxLQUFLMUIsU0FBTCxHQUFpQm9CLEtBQTdCLENBSnFCLENBQXhCO0FBTUQ7QUFFRDs7Ozs7Ozs7Ozs7OzhCQVNrQmYsRSxFQUF3QjtBQUV4QyxhQUFPLFlBQXVCO0FBQUE7O0FBQUEsMENBQVhzQixJQUFXO0FBQVhBLFVBQUFBLElBQVc7QUFBQTs7QUFFNUIsZUFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBRXRDLG1CQUFTQyxRQUFULENBQWtCQyxHQUFsQixFQUE0QkMsTUFBNUIsRUFBeUM7QUFFdkMsZ0JBQUlELEdBQUosRUFBU0YsTUFBTSxDQUFDRSxHQUFELENBQU4sQ0FBVCxLQUVLSCxPQUFPLENBQUNJLE1BQUQsQ0FBUDtBQUVOOztBQUVETixVQUFBQSxJQUFJLENBQUNoQixJQUFMLENBQVVvQixRQUFWO0FBRUExQixVQUFBQSxFQUFFLENBQUM2QixJQUFILE9BQUE3QixFQUFFLEdBQU0sTUFBTixTQUFlc0IsSUFBZixFQUFGO0FBRUQsU0FkTSxDQUFQO0FBZ0JELE9BbEJEO0FBb0JEOzs7Ozs7O0FBRUYiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCdcclxuXHJcbmltcG9ydCBUYXNrIGZyb20gJy4vdGFzay9UYXNrJztcclxuaW1wb3J0IE9wdGlvbnMgZnJvbSAnLi9vcHRpb25zL09wdGlvbnMnO1xyXG5cclxuLyoqXHJcbiAqIEEgc2ltcGxlIEFQSSB0aGF0IGFsbG93cyB5b3UgdG8gcnVuIGZ1bmN0aW9ucyBvbiBhbiBpbnRlcnZhbCB1c2luZyB0aGUgbW9yZSByZWxpYWJsZSBzZXRUaW1lb3V0IHN0cmF0ZWd5LlxyXG4gKiBcclxuICogQWxsIG1ldGhvZHMgYXJlIHJ1biBhcyBhc3luYyBpbiBvcmRlciB0byBtYWtlIHN1cmUgdGhhdCBhc3luYyBtZXRob2RzIGZvbGxvdyB0aGUgdGltZW91dC5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEludGVydmFseSB7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBvcHRpb25zIGZvciB0aGlzIGluc3RhbmNlIG9mIEludGVydmFseS5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7T3B0aW9uc31cclxuICAgKi9cclxuICBwcml2YXRlIF9vcHRpb25zOiBPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgaWQgcmV0dXJuZWQgYnkgc2V0VGltZW91dCB0byBiZSB1c2VkIHRvIHN0b3AgdGhlIHRpbWVyLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGltZXI6IGFueSA9IDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgbGlzdCBvZiB0aGUgdGFza3MgYXNzaWduZWQgdG8gSW50ZXJ2YWx5LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtBcnJheTxUYXNrPn1cclxuICAgKi9cclxuICBwcml2YXRlIF90YXNrczogQXJyYXk8VGFzaz4gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGFtb3VudCBvZiBtcyB0aGF0IGhhcyBwYXNzZWQgc2luY2UgSW50ZXJ2YWx5IHdhcyBzdGFydGVkLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfZWxhcHNlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpbWUgdGhhdCBJbnRlcnZhbHkgaXMgZXhwZWN0ZWQgdG8gYmUgYXQsIHVzZWQgdG8gYWNjb3VudCBmb3IgZHJpZnQuXHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKi9cclxuICBwcml2YXRlIF9leHBlY3RlZDogbnVtYmVyID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVydmFsIHRoYXQgdGhlIHRpbWVyIHNob3VsZCB0aWNrIGF0LlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHByb3BlcnR5IHtPYmplY3R9IG9wdGlvbnMgVGhlIGluaXRpYWxpemF0aW9uIG9wdGlvbnMgcGFzc2VkIHRvIEludGVydmFseS5cclxuICAgKiBAcHJvcGVydHkge251bWJlcn0gW29wdGlvbnMuaW50ZXJ2YWw9MTAwMF0gVGhlIGFtb3VudCBvZiB0aW1lIHRoYXQgc2hvdWxkIHBhc3MgYmV0d2VlbiB0aWNrcyBvZiB0aGUgdGltZXIuXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufSBbb3B0aW9ucy5hdXRvc3RhcnQ9ZmFsc2VdIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBJbnRlcnZhbHkgd2lsbCBzdGFydCB0aGUgdGltZXIgYXMgc29vbiBhcyBpdCBpdHMgaW5pdGlhbGl6ZWQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogT2JqZWN0ID0ge30pIHtcclxuXHJcbiAgICB0aGlzLl9vcHRpb25zID0gbmV3IE9wdGlvbnMob3B0aW9ucyk7XHJcblxyXG4gICAgdGhpcy5faW50ZXJ2YWwgPSB0aGlzLl9vcHRpb25zLmludGVydmFsO1xyXG5cclxuICAgIGlmICh0aGlzLl9vcHRpb25zLmF1dG9zdGFydCkgdGhpcy5zdGFydCgpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSB0YXNrIHRvIEludGVydmFseS5cclxuICAgKiBcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHRhc2sgdXNlZCB0byBtb2RpZnkvcmVtb3ZlIGl0LlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBydW4gb24gYW4gaW50ZXJ2YWwuXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtpbnRlcnZhbD0xMDAwXSBUaGUgaW50ZXJ2YWwgdGhhdCB0aGlzIHRhc2sgc2hvdWxkIHJ1biBhdC5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7VGFza30gUmV0dXJucyB0aGUgdGFzayB0aGF0IHdhcyBjcmVhdGVkLlxyXG4gICAqL1xyXG4gIGFkZFRhc2sobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24sIGludGVydmFsOiBudW1iZXIgPSAxMDAwKTogVGFzayB7XHJcblxyXG4gICAgY29uc3QgZm5Qcm9taXNmaWVkOiBGdW5jdGlvbiA9IHRoaXMuX3Byb21pc2Z5KGZuKTtcclxuXHJcbiAgICBjb25zdCB0YXNrOiBUYXNrID0gbmV3IFRhc2sobmFtZSwgZm5Qcm9taXNmaWVkLCBpbnRlcnZhbCk7XHJcblxyXG4gICAgdGhpcy5fdGFza3MucHVzaCh0YXNrKTtcclxuXHJcbiAgICByZXR1cm4gdGFzaztcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgdGFzayBmcm9tIEludGVydmFseSBieSBuYW1lLlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZSBuYW1lIG9mIHRoZSB0YXNrIHRvIHJlbW92ZS5cclxuICAgKi9cclxuICByZW1vdmVUYXNrKG5hbWU6IHN0cmluZykge1xyXG5cclxuICAgIHRoaXMuX3Rhc2tzID0gdGhpcy5fdGFza3MuZmlsdGVyKCh0YXNrOiBUYXNrKSA9PiB0YXNrLm5hbWUgIT09IG5hbWUpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBJbnRlcnZhbHkuXHJcbiAgICovXHJcbiAgc3RhcnQoKSB7XHJcblxyXG4gICAgdGhpcy5fZXhwZWN0ZWQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB0aGlzLl90aWNrKCkpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHRoZSBvcGVyYXRpb24gb2YgSW50ZXJ2YWx5LlxyXG4gICAqL1xyXG4gIHN0b3AoKSB7XHJcblxyXG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVyKTtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSdW5zIG9uY2UgZXZlcnkgc2Vjb25kIGFuZCBwcm9jZXNzZXMgYW55IHRhc2tzIHRoYXQgbmVlZCB0byBiZSBwcm9jZXNzZWQgb24gdGhpcyB0aWNrLlxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfdGljaygpIHtcclxuXHJcbiAgICBjb25zdCBkcmlmdDogbnVtYmVyID0gRGF0ZS5ub3coKSAtIHRoaXMuX2V4cGVjdGVkO1xyXG5cclxuICAgIGlmIChkcmlmdCA+IHRoaXMuX2ludGVydmFsKSB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBpbnRlcnZhbCBoYXMgZXhjZWVkZWQgdGhlIGVycm9yIGxpbWl0IGFuZCBjYW5ub3QgcmVjb3ZlcicpO1xyXG5cclxuICAgIHRoaXMuX2V4cGVjdGVkICs9IHRoaXMuX2ludGVydmFsO1xyXG5cclxuICAgIHRoaXMuX3Rhc2tzLm1hcCgodGFzazogVGFzaykgPT4ge1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2VsYXBzZWQgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9lbGFwc2VkICUgdGFzay5pbnRlcnZhbCA9PT0gMCkgdGFzay5ydW4oKTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9lbGFwc2VkICs9IHRoaXMuX2ludGVydmFsO1xyXG5cclxuICAgIHRoaXMuX3RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblxyXG4gICAgICB0aGlzLl90aWNrKCk7XHJcblxyXG4gICAgfSwgTWF0aC5tYXgoMCwgdGhpcy5faW50ZXJ2YWwgLSBkcmlmdCkpO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb21pc2ZpZXMgYSBmdW5jdGlvbi5cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBwcm9taXNmeS5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIHByb21pc2ZpZWQgZnVuY3Rpb24uXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfcHJvbWlzZnkoZm46IEZ1bmN0aW9uKTogRnVuY3Rpb24ge1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiguLi5hcmdzOiBhbnkpIHtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGNhbGxiYWNrKGVycjogYW55LCByZXN1bHQ6IGFueSkge1xyXG5cclxuICAgICAgICAgIGlmIChlcnIpIHJlamVjdChlcnIpO1xyXG5cclxuICAgICAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XHJcblxyXG4gICAgICAgIGZuLmNhbGwodGhpcywgLi4uYXJncyk7XHJcblxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn07Il19