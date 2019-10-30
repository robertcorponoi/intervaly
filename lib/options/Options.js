'use strict';
/**
 * The options that are available for an instance of Intervaly along with defaults for any options
 * that have default values.
 */

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

exports["default"] = Options;
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9vcHRpb25zL09wdGlvbnMudHMiXSwibmFtZXMiOlsiT3B0aW9ucyIsIm9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iXSwibWFwcGluZ3MiOiJBQUFBO0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBSXFCQSxPO0FBRW5COzs7Ozs7OztBQVNBOzs7Ozs7OztBQVNBOzs7OztBQUtBLGlCQUFZQyxPQUFaLEVBQTZCO0FBQUE7O0FBQUEsb0NBaEJWLElBZ0JVOztBQUFBLHFDQVBSLEtBT1E7O0FBRTNCQyxFQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYyxJQUFkLEVBQW9CRixPQUFwQjtBQUVELEM7OztBQUVGIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnXHJcblxyXG4vKipcclxuICogVGhlIG9wdGlvbnMgdGhhdCBhcmUgYXZhaWxhYmxlIGZvciBhbiBpbnN0YW5jZSBvZiBJbnRlcnZhbHkgYWxvbmcgd2l0aCBkZWZhdWx0cyBmb3IgYW55IG9wdGlvbnNcclxuICogdGhhdCBoYXZlIGRlZmF1bHQgdmFsdWVzLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9ucyB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBpbnRlcnZhbCB0aGF0IHRoZSB0aW1lciBzaG91bGQgdGljayBhdC5cclxuICAgKiBcclxuICAgKiBAcHJvcGVydHkge251bWJlcn1cclxuICAgKiBcclxuICAgKiBAZGVmYXVsdCAxMDAwXHJcbiAgICovXHJcbiAgaW50ZXJ2YWw6IG51bWJlciA9IDEwMDA7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIG9yIG5vdCBJbnRlcnZhbHkgd2lsbCBzdGFydCB0aGUgdGltZXIgYXMgc29vbiBhcyBpdCBpdHMgaW5pdGlhbGl6ZWQuXHJcbiAgICogXHJcbiAgICogQHByb3BlcnR5IHtib29sZWFufVxyXG4gICAqIFxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgYXV0b3N0YXJ0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBvcHRpb25zIFRoZSBpbml0aWFsaXphdGlvbiBvcHRpb25zIHBhc3NlZCB0byBJbnRlcnZhbHkuXHJcbiAgICogQHByb3BlcnR5IHtudW1iZXJ9IFtvcHRpb25zLmludGVydmFsPTEwMDBdIFRoZSBhbW91bnQgb2YgdGltZSB0aGF0IHNob3VsZCBwYXNzIGJldHdlZW4gdGlja3Mgb2YgdGhlIHRpbWVyLlxyXG4gICAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gW29wdGlvbnMuYXV0b3N0YXJ0PWZhbHNlXSBJbmRpY2F0ZXMgd2hldGhlciBvciBub3QgSW50ZXJ2YWx5IHdpbGwgc3RhcnQgdGhlIHRpbWVyIGFzIHNvb24gYXMgaXQgaXRzIGluaXRpYWxpemVkLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IE9iamVjdCkge1xyXG5cclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgb3B0aW9ucyk7XHJcblxyXG4gIH1cclxuXHJcbn07Il19