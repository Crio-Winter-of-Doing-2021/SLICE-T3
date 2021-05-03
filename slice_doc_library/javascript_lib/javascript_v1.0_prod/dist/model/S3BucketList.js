"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _S3BucketListData = _interopRequireDefault(require("./S3BucketListData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The S3BucketList model module.
 * @module model/S3BucketList
 * @version 1.0.0
 */
var S3BucketList = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>S3BucketList</code>.
   * @alias module:model/S3BucketList
   * @param data {Array.<module:model/S3BucketListData>} 
   */
  function S3BucketList(data) {
    _classCallCheck(this, S3BucketList);

    S3BucketList.initialize(this, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(S3BucketList, null, [{
    key: "initialize",
    value: function initialize(obj, data) {
      obj['data'] = data;
    }
    /**
     * Constructs a <code>S3BucketList</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3BucketList} obj Optional instance to populate.
     * @return {module:model/S3BucketList} The populated <code>S3BucketList</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new S3BucketList();

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_S3BucketListData["default"]]);
        }
      }

      return obj;
    }
  }]);

  return S3BucketList;
}();
/**
 * @member {Array.<module:model/S3BucketListData>} data
 */


S3BucketList.prototype['data'] = undefined;
var _default = S3BucketList;
exports["default"] = _default;