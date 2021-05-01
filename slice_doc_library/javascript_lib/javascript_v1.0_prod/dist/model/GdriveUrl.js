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
 * The GdriveUrl model module.
 * @module model/GdriveUrl
 * @version 1.0.0
 */
var GdriveUrl = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GdriveUrl</code>.
   * @alias module:model/GdriveUrl
   * @param authUrl {String} 
   * @param message {String} 
   */
  function GdriveUrl(authUrl, message) {
    _classCallCheck(this, GdriveUrl);

    GdriveUrl.initialize(this, authUrl, message);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GdriveUrl, null, [{
    key: "initialize",
    value: function initialize(obj, authUrl, message) {
      obj['authUrl'] = authUrl;
      obj['message'] = message;
    }
    /**
     * Constructs a <code>GdriveUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveUrl} obj Optional instance to populate.
     * @return {module:model/GdriveUrl} The populated <code>GdriveUrl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GdriveUrl();

        if (data.hasOwnProperty('authUrl')) {
          obj['authUrl'] = _ApiClient["default"].convertToType(data['authUrl'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GdriveUrl;
}();
/**
 * @member {String} authUrl
 */


GdriveUrl.prototype['authUrl'] = undefined;
/**
 * @member {String} message
 */

GdriveUrl.prototype['message'] = undefined;
var _default = GdriveUrl;
exports["default"] = _default;