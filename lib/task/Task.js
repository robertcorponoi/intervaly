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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy90YXNrL1Rhc2sudHMiXSwibmFtZXMiOlsiVGFzayIsIm5hbWUiLCJmbiIsImludGVydmFsIiwiX25hbWUiLCJfZm4iLCJfaW50ZXJ2YWwiLCJuZXdJbnRlcnZhbCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFHcUJBLEk7OztBQUVuQjs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7QUFTQTs7Ozs7QUFLQSxnQkFBWUMsSUFBWixFQUEwQkMsRUFBMUIsRUFBd0NDLFFBQXhDLEVBQTBEO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBRXhELFNBQUtDLEtBQUwsR0FBYUgsSUFBYjtBQUVBLFNBQUtJLEdBQUwsR0FBV0gsRUFBWDtBQUVBLFNBQUtJLFNBQUwsR0FBaUJILFFBQWpCO0FBRUQ7QUFFRDs7Ozs7Ozs7OztBQWlDQTs7OzBCQUdNO0FBRUosV0FBS0UsR0FBTDtBQUVEOzs7d0JBbkNrQjtBQUVqQixhQUFPLEtBQUtELEtBQVo7QUFFRDtBQUVEOzs7Ozs7Ozt3QkFLdUI7QUFFckIsYUFBTyxLQUFLRSxTQUFaO0FBRUQ7QUFFRDs7Ozs7O3NCQUthQyxXLEVBQXFCO0FBRWhDLFdBQUtELFNBQUwsR0FBaUJDLFdBQWpCO0FBRUQ7Ozs7Ozs7QUFXRiIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0J1xyXG5cclxuLyoqXHJcbiAqIEEgdGFzayBpcyBhIG1ldGhvZCB3aXRoIGNvbnRyb2xsaW5nIHByb3BlcnRpZXMgdGhhdCBydW5zIG9uIGEgc3BlY2lmaWVkIGludGVydmFsLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoaXMgdGFzay5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge3N0cmluZ31cclxuICAgKiBcclxuICAgKiBAcHJpdmF0ZVxyXG4gICAqL1xyXG4gIHByaXZhdGUgX25hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGZ1bmN0aW9uIHRvIHJ1biBhcyBhIHBhcnQgb2YgdGhpcyB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7RnVuY3Rpb259XHJcbiAgICogXHJcbiAgICogQHByaXZhdGVcclxuICAgKi9cclxuICBwcml2YXRlIF9mbjogRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCB0aGF0IHRoaXMgdGFzayBzaG91bGQgcnVuIGF0LlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfVxyXG4gICAqIFxyXG4gICAqIEBwcml2YXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBfaW50ZXJ2YWw6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgVGhlIG5hbWUgb2YgdGhpcyB0YXNrLlxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBydW4gYXMgYSBwYXJ0IG9mIHRoaXMgdGFzay5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWwgVGhlIGludGVydmFsIHRoYXQgdGhpcyB0YXNrIHNob3VsZCBydW4gYXQuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBmbjogRnVuY3Rpb24sIGludGVydmFsOiBudW1iZXIpIHtcclxuXHJcbiAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuXHJcbiAgICB0aGlzLl9mbiA9IGZuO1xyXG5cclxuICAgIHRoaXMuX2ludGVydmFsID0gaW50ZXJ2YWw7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgbmFtZSBvZiB0aGlzIHRhc2suXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG5cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGludGVydmFsIHRoYXQgdGhpcyB0YXNrIHJ1bnMgYXQuXHJcbiAgICogXHJcbiAgICogQHJldHVybnMge251bWJlcn1cclxuICAgKi9cclxuICBnZXQgaW50ZXJ2YWwoKTogbnVtYmVyIHtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5faW50ZXJ2YWw7XHJcblxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIG5ldyBpbnRlcnZhbCBmb3IgdGhpcyB0YXNrLlxyXG4gICAqIFxyXG4gICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBuZXdJbnRlcnZhbCBUaGUgbmV3IGludGVydmFsIHRvIHNldCBmb3IgdGhpcyB0YXNrLlxyXG4gICAqL1xyXG4gIHNldCBpbnRlcnZhbChuZXdJbnRlcnZhbDogbnVtYmVyKSB7XHJcblxyXG4gICAgdGhpcy5faW50ZXJ2YWwgPSBuZXdJbnRlcnZhbDtcclxuXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSdW5zIHRoZSBmdW5jdGlvbiBhc3NvY2lhdGVkIHdpdGggdGhpcyB0YXNrLlxyXG4gICAqL1xyXG4gIHJ1bigpIHtcclxuXHJcbiAgICB0aGlzLl9mbigpO1xyXG5cclxuICB9XHJcblxyXG59OyJdfQ==