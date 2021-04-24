"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The S3Credentials model module.
 * @module model/S3Credentials
 * @version 1.0.0
 */
var S3Credentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>S3Credentials</code>.
   * @alias module:model/S3Credentials
   * @param ACCESS_KEY {String} 
   * @param SECRET_KEY {String} 
   */
  function S3Credentials(ACCESS_KEY, SECRET_KEY) {
    _classCallCheck(this, S3Credentials);

    S3Credentials.initialize(this, ACCESS_KEY, SECRET_KEY);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(S3Credentials, null, [{
    key: "initialize",
    value: function initialize(obj, ACCESS_KEY, SECRET_KEY) {
      obj['ACCESS_KEY'] = ACCESS_KEY;
      obj['SECRET_KEY'] = SECRET_KEY;
    }
    /**
     * Constructs a <code>S3Credentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3Credentials} obj Optional instance to populate.
     * @return {module:model/S3Credentials} The populated <code>S3Credentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new S3Credentials();

        if (data.hasOwnProperty('ACCESS_KEY')) {
          obj['ACCESS_KEY'] = _ApiClient["default"].convertToType(data['ACCESS_KEY'], 'String');
        }

        if (data.hasOwnProperty('SECRET_KEY')) {
          obj['SECRET_KEY'] = _ApiClient["default"].convertToType(data['SECRET_KEY'], 'String');
        }
      }

      return obj;
    }
  }]);

  return S3Credentials;
}();
/**
 * @member {String} ACCESS_KEY
 */


S3Credentials.prototype['ACCESS_KEY'] = undefined;
/**
 * @member {String} SECRET_KEY
 */

S3Credentials.prototype['SECRET_KEY'] = undefined;
var _default = S3Credentials;
exports["default"] = _default;