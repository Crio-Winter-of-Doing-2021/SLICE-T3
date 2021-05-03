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
 * The GdriveClientCredentials model module.
 * @module model/GdriveClientCredentials
 * @version 1.0.0
 */
var GdriveClientCredentials = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GdriveClientCredentials</code>.
   * @alias module:model/GdriveClientCredentials
   * @param clientId {String} 
   * @param clientSecret {String} 
   * @param redirectUris {String} 
   */
  function GdriveClientCredentials(clientId, clientSecret, redirectUris) {
    _classCallCheck(this, GdriveClientCredentials);

    GdriveClientCredentials.initialize(this, clientId, clientSecret, redirectUris);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GdriveClientCredentials, null, [{
    key: "initialize",
    value: function initialize(obj, clientId, clientSecret, redirectUris) {
      obj['client_id'] = clientId;
      obj['client_secret'] = clientSecret;
      obj['redirect_uris'] = redirectUris;
    }
    /**
     * Constructs a <code>GdriveClientCredentials</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveClientCredentials} obj Optional instance to populate.
     * @return {module:model/GdriveClientCredentials} The populated <code>GdriveClientCredentials</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GdriveClientCredentials();

        if (data.hasOwnProperty('client_id')) {
          obj['client_id'] = _ApiClient["default"].convertToType(data['client_id'], 'String');
        }

        if (data.hasOwnProperty('client_secret')) {
          obj['client_secret'] = _ApiClient["default"].convertToType(data['client_secret'], 'String');
        }

        if (data.hasOwnProperty('redirect_uris')) {
          obj['redirect_uris'] = _ApiClient["default"].convertToType(data['redirect_uris'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GdriveClientCredentials;
}();
/**
 * @member {String} client_id
 */


GdriveClientCredentials.prototype['client_id'] = undefined;
/**
 * @member {String} client_secret
 */

GdriveClientCredentials.prototype['client_secret'] = undefined;
/**
 * @member {String} redirect_uris
 */

GdriveClientCredentials.prototype['redirect_uris'] = undefined;
var _default = GdriveClientCredentials;
exports["default"] = _default;