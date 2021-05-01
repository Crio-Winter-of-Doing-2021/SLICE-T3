"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileTransferSourceConfig = _interopRequireDefault(require("./FileTransferSourceConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FileTransfer model module.
 * @module model/FileTransfer
 * @version 1.0.0
 */
var FileTransfer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FileTransfer</code>.
   * @alias module:model/FileTransfer
   * @param sourceConfig {module:model/FileTransferSourceConfig} 
   * @param destinationConfig {module:model/FileTransferSourceConfig} 
   */
  function FileTransfer(sourceConfig, destinationConfig) {
    _classCallCheck(this, FileTransfer);

    FileTransfer.initialize(this, sourceConfig, destinationConfig);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FileTransfer, null, [{
    key: "initialize",
    value: function initialize(obj, sourceConfig, destinationConfig) {
      obj['sourceConfig'] = sourceConfig;
      obj['destinationConfig'] = destinationConfig;
    }
    /**
     * Constructs a <code>FileTransfer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FileTransfer} obj Optional instance to populate.
     * @return {module:model/FileTransfer} The populated <code>FileTransfer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FileTransfer();

        if (data.hasOwnProperty('sourceConfig')) {
          obj['sourceConfig'] = _FileTransferSourceConfig["default"].constructFromObject(data['sourceConfig']);
        }

        if (data.hasOwnProperty('destinationConfig')) {
          obj['destinationConfig'] = _FileTransferSourceConfig["default"].constructFromObject(data['destinationConfig']);
        }
      }

      return obj;
    }
  }]);

  return FileTransfer;
}();
/**
 * @member {module:model/FileTransferSourceConfig} sourceConfig
 */


FileTransfer.prototype['sourceConfig'] = undefined;
/**
 * @member {module:model/FileTransferSourceConfig} destinationConfig
 */

FileTransfer.prototype['destinationConfig'] = undefined;
var _default = FileTransfer;
exports["default"] = _default;