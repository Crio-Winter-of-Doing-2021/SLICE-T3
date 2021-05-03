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
 * The GdriveFile model module.
 * @module model/GdriveFile
 * @version 1.0.0
 */
var GdriveFile = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GdriveFile</code>.
   * @alias module:model/GdriveFile
   * @param kind {String} 
   * @param id {String} 
   * @param name {String} 
   * @param mimeType {String} 
   * @param iconLink {String} 
   */
  function GdriveFile(kind, id, name, mimeType, iconLink) {
    _classCallCheck(this, GdriveFile);

    GdriveFile.initialize(this, kind, id, name, mimeType, iconLink);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GdriveFile, null, [{
    key: "initialize",
    value: function initialize(obj, kind, id, name, mimeType, iconLink) {
      obj['kind'] = kind;
      obj['id'] = id;
      obj['name'] = name;
      obj['mimeType'] = mimeType;
      obj['iconLink'] = iconLink;
    }
    /**
     * Constructs a <code>GdriveFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveFile} obj Optional instance to populate.
     * @return {module:model/GdriveFile} The populated <code>GdriveFile</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GdriveFile();

        if (data.hasOwnProperty('kind')) {
          obj['kind'] = _ApiClient["default"].convertToType(data['kind'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('iconLink')) {
          obj['iconLink'] = _ApiClient["default"].convertToType(data['iconLink'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GdriveFile;
}();
/**
 * @member {String} kind
 */


GdriveFile.prototype['kind'] = undefined;
/**
 * @member {String} id
 */

GdriveFile.prototype['id'] = undefined;
/**
 * @member {String} name
 */

GdriveFile.prototype['name'] = undefined;
/**
 * @member {String} mimeType
 */

GdriveFile.prototype['mimeType'] = undefined;
/**
 * @member {String} iconLink
 */

GdriveFile.prototype['iconLink'] = undefined;
var _default = GdriveFile;
exports["default"] = _default;