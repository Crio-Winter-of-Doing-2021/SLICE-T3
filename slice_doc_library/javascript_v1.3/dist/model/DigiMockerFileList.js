"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DigimockerFile = _interopRequireDefault(require("./DigimockerFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DigiMockerFileList model module.
 * @module model/DigiMockerFileList
 * @version 1.0.0
 */
var DigiMockerFileList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DigiMockerFileList</code>.
   * @alias module:model/DigiMockerFileList
   * @param files {Array.<module:model/DigimockerFile>} 
   */
  function DigiMockerFileList(files) {
    _classCallCheck(this, DigiMockerFileList);

    DigiMockerFileList.initialize(this, files);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DigiMockerFileList, null, [{
    key: "initialize",
    value: function initialize(obj, files) {
      obj['files'] = files;
    }
    /**
     * Constructs a <code>DigiMockerFileList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DigiMockerFileList} obj Optional instance to populate.
     * @return {module:model/DigiMockerFileList} The populated <code>DigiMockerFileList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DigiMockerFileList();

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_DigimockerFile["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DigiMockerFileList;
}();
/**
 * @member {Array.<module:model/DigimockerFile>} files
 */


DigiMockerFileList.prototype['files'] = undefined;
var _default = DigiMockerFileList;
exports["default"] = _default;