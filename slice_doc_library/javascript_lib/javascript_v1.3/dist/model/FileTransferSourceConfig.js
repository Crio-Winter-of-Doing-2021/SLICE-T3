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
 * The FileTransferSourceConfig model module.
 * @module model/FileTransferSourceConfig
 * @version 1.0.0
 */
var FileTransferSourceConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileTransferSourceConfig</code>.
   * @alias module:model/FileTransferSourceConfig
   * @param name {String} 
   * @param extendedData {Object} 
   */
  function FileTransferSourceConfig(name, extendedData) {
    _classCallCheck(this, FileTransferSourceConfig);

    FileTransferSourceConfig.initialize(this, name, extendedData);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileTransferSourceConfig, null, [{
    key: "initialize",
    value: function initialize(obj, name, extendedData) {
      obj['name'] = name;
      obj['extendedData'] = extendedData;
    }
    /**
     * Constructs a <code>FileTransferSourceConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileTransferSourceConfig} obj Optional instance to populate.
     * @return {module:model/FileTransferSourceConfig} The populated <code>FileTransferSourceConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileTransferSourceConfig();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('extendedData')) {
          obj['extendedData'] = _ApiClient["default"].convertToType(data['extendedData'], Object);
        }
      }

      return obj;
    }
  }]);

  return FileTransferSourceConfig;
}();
/**
 * @member {String} name
 */


FileTransferSourceConfig.prototype['name'] = undefined;
/**
 * @member {Object} extendedData
 */

FileTransferSourceConfig.prototype['extendedData'] = undefined;
var _default = FileTransferSourceConfig;
exports["default"] = _default;