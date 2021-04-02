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
 * The S3BucketListData model module.
 * @module model/S3BucketListData
 * @version 1.0.0
 */
var S3BucketListData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>S3BucketListData</code>.
   * @alias module:model/S3BucketListData
   */
  function S3BucketListData() {
    _classCallCheck(this, S3BucketListData);

    S3BucketListData.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(S3BucketListData, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>S3BucketListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3BucketListData} obj Optional instance to populate.
     * @return {module:model/S3BucketListData} The populated <code>S3BucketListData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new S3BucketListData();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('CreationDate')) {
          obj['CreationDate'] = _ApiClient["default"].convertToType(data['CreationDate'], 'String');
        }
      }

      return obj;
    }
  }]);

  return S3BucketListData;
}();
/**
 * @member {String} Name
 */


S3BucketListData.prototype['Name'] = undefined;
/**
 * @member {String} CreationDate
 */

S3BucketListData.prototype['CreationDate'] = undefined;
var _default = S3BucketListData;
exports["default"] = _default;