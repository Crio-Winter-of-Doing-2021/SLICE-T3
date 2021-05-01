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
 * The DigimockerFile model module.
 * @module model/DigimockerFile
 * @version 1.0.0
 */
var DigimockerFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DigimockerFile</code>.
   * @alias module:model/DigimockerFile
   */
  function DigimockerFile() {
    _classCallCheck(this, DigimockerFile);

    DigimockerFile.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DigimockerFile, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DigimockerFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DigimockerFile} obj Optional instance to populate.
     * @return {module:model/DigimockerFile} The populated <code>DigimockerFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DigimockerFile();

        if (data.hasOwnProperty('exported')) {
          obj['exported'] = _ApiClient["default"].convertToType(data['exported'], 'String');
        }

        if (data.hasOwnProperty('_id')) {
          obj['_id'] = _ApiClient["default"].convertToType(data['_id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('identifier')) {
          obj['identifier'] = _ApiClient["default"].convertToType(data['identifier'], 'String');
        }

        if (data.hasOwnProperty('__v')) {
          obj['__v'] = _ApiClient["default"].convertToType(data['__v'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return DigimockerFile;
}();
/**
 * @member {String} exported
 */


DigimockerFile.prototype['exported'] = undefined;
/**
 * @member {String} _id
 */

DigimockerFile.prototype['_id'] = undefined;
/**
 * @member {String} name
 */

DigimockerFile.prototype['name'] = undefined;
/**
 * @member {String} email
 */

DigimockerFile.prototype['email'] = undefined;
/**
 * @member {String} url
 */

DigimockerFile.prototype['url'] = undefined;
/**
 * @member {String} identifier
 */

DigimockerFile.prototype['identifier'] = undefined;
/**
 * @member {Number} __v
 */

DigimockerFile.prototype['__v'] = undefined;
var _default = DigimockerFile;
exports["default"] = _default;