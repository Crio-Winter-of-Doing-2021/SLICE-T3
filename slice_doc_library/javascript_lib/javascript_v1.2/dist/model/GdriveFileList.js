"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GdriveFile = _interopRequireDefault(require("./GdriveFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GdriveFileList model module.
 * @module model/GdriveFileList
 * @version 1.0.0
 */
var GdriveFileList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GdriveFileList</code>.
   * @alias module:model/GdriveFileList
   */
  function GdriveFileList() {
    _classCallCheck(this, GdriveFileList);

    GdriveFileList.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GdriveFileList, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GdriveFileList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveFileList} obj Optional instance to populate.
     * @return {module:model/GdriveFileList} The populated <code>GdriveFileList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GdriveFileList();

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_GdriveFile["default"]]);
        }
      }

      return obj;
    }
  }]);

  return GdriveFileList;
}();
/**
 * @member {Array.<module:model/GdriveFile>} files
 */


GdriveFileList.prototype['files'] = undefined;
var _default = GdriveFileList;
exports["default"] = _default;