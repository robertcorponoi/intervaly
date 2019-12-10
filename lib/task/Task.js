'use strict';
/**
 * A task is a method with controlling properties that runs on a specified interval.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
     * Gets the function associated with this task.
     * 
     * @returns {Function}
     */

  }, {
    key: "fn",
    get: function get() {
      return this._fn;
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

exports["default"] = Task;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsIm5hbWUiLCJmbiIsImludGVydmFsIiwiX25hbWUiLCJfZm4iLCJfaW50ZXJ2YWwiLCJuZXdJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEk7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQSxnQkFBWUMsSUFBWixFQUEwQkMsRUFBMUIsRUFBd0NDLFFBQXhDLEVBQTBEO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRXhELFNBQUtDLEtBQUwsR0FBYUgsSUFBYjtBQUVBLFNBQUtJLEdBQUwsR0FBV0gsRUFBWDtBQUVBLFNBQUtJLFNBQUwsR0FBaUJILFFBQWpCO0FBRUQ7QUFFRDs7Ozs7Ozs7OztBQTRCQTs7OzBCQUdNO0FBRUosV0FBS0UsR0FBTDtBQUVEOzs7d0JBOUJrQjtBQUFFLGFBQU8sS0FBS0QsS0FBWjtBQUFvQjtBQUV6Qzs7Ozs7Ozs7d0JBS21CO0FBQUUsYUFBTyxLQUFLQyxHQUFaO0FBQWtCO0FBRXZDOzs7Ozs7Ozt3QkFLdUI7QUFBRSxhQUFPLEtBQUtDLFNBQVo7QUFBd0I7QUFFakQ7Ozs7OztzQkFLYUMsVyxFQUFxQjtBQUFFLFdBQUtELFNBQUwsR0FBaUJDLFdBQWpCO0FBQStCOzs7Ozs7O0FBV3BFIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogQSB0YXNrIGlzIGEgbWV0aG9kIHdpdGggY29udHJvbGxpbmcgcHJvcGVydGllcyB0aGF0IHJ1bnMgb24gYSBzcGVjaWZpZWQgaW50ZXJ2YWwuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNrIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhpcyB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7c3RyaW5nfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZnVuY3Rpb24gdG8gcnVuIGFzIGEgcGFydCBvZiB0aGlzIHRhc2suXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtGdW5jdGlvbn1cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX2ZuOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGludGVydmFsIHRoYXQgdGhpcyB0YXNrIHNob3VsZCBydW4gYXQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9pbnRlcnZhbDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGlzIHRhc2suXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHJ1biBhcyBhIHBhcnQgb2YgdGhpcyB0YXNrLlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbCBUaGUgaW50ZXJ2YWwgdGhhdCB0aGlzIHRhc2sgc2hvdWxkIHJ1biBhdC5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIGZuOiBGdW5jdGlvbiwgaW50ZXJ2YWw6IG51bWJlcikge1xyXG5cclxuICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG5cclxuICAgIHRoaXMuX2ZuID0gZm47XHJcblxyXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBuYW1lIG9mIHRoaXMgdGFzay5cclxuICAgKiBcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9uYW1lOyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGZ1bmN0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIHRhc2suXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIGdldCBmbigpOiBGdW5jdGlvbiB7IHJldHVybiB0aGlzLl9mbjsgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBpbnRlcnZhbCB0aGF0IHRoaXMgdGFzayBydW5zIGF0LlxyXG4gICAqIFxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgZ2V0IGludGVydmFsKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9pbnRlcnZhbDsgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgbmV3IGludGVydmFsIGZvciB0aGlzIHRhc2suXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IG5ld0ludGVydmFsIFRoZSBuZXcgaW50ZXJ2YWwgdG8gc2V0IGZvciB0aGlzIHRhc2suXHJcbiAgICovXHJcbiAgc2V0IGludGVydmFsKG5ld0ludGVydmFsOiBudW1iZXIpIHsgdGhpcy5faW50ZXJ2YWwgPSBuZXdJbnRlcnZhbDsgfVxyXG5cclxuICAvKipcclxuICAgKiBSdW5zIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXNrLlxyXG4gICAqL1xyXG4gIHJ1bigpIHtcclxuXHJcbiAgICB0aGlzLl9mbigpO1xyXG5cclxuICB9XHJcblxyXG59OyJdfQ==