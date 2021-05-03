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
 * The GdriveToken model module.
 * @module model/GdriveToken
 * @version 1.0.0
 */
var GdriveToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GdriveToken</code>.
   * @alias module:model/GdriveToken
   * @param accessToken {String} 
   * @param refreshToken {String} 
   * @param scope {String} 
   * @param tokenType {String} 
   * @param expiryDate {Number} 
   */
  function GdriveToken(accessToken, refreshToken, scope, tokenType, expiryDate) {
    _classCallCheck(this, GdriveToken);

    GdriveToken.initialize(this, accessToken, refreshToken, scope, tokenType, expiryDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GdriveToken, null, [{
    key: "initialize",
    value: function initialize(obj, accessToken, refreshToken, scope, tokenType, expiryDate) {
      obj['access_token'] = accessToken;
      obj['refresh_token'] = refreshToken;
      obj['scope'] = scope;
      obj['token_type'] = tokenType;
      obj['expiry_date'] = expiryDate;
    }
    /**
     * Constructs a <code>GdriveToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveToken} obj Optional instance to populate.
     * @return {module:model/GdriveToken} The populated <code>GdriveToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GdriveToken();

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], 'String');
        }

        if (data.hasOwnProperty('token_type')) {
          obj['token_type'] = _ApiClient["default"].convertToType(data['token_type'], 'String');
        }

        if (data.hasOwnProperty('expiry_date')) {
          obj['expiry_date'] = _ApiClient["default"].convertToType(data['expiry_date'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GdriveToken;
}();
/**
 * @member {String} access_token
 */


GdriveToken.prototype['access_token'] = undefined;
/**
 * @member {String} refresh_token
 */

GdriveToken.prototype['refresh_token'] = undefined;
/**
 * @member {String} scope
 */

GdriveToken.prototype['scope'] = undefined;
/**
 * @member {String} token_type
 */

GdriveToken.prototype['token_type'] = undefined;
/**
 * @member {Number} expiry_date
 */

GdriveToken.prototype['expiry_date'] = undefined;
var _default = GdriveToken;
exports["default"] = _default;