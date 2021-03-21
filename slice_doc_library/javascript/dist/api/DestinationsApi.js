"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _S3BucketList = _interopRequireDefault(require("../model/S3BucketList"));

var _S3Credentials = _interopRequireDefault(require("../model/S3Credentials"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Destinations service.
* @module api/DestinationsApi
* @version 1.0.0
*/
var DestinationsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DestinationsApi. 
  * @alias module:api/DestinationsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DestinationsApi(apiClient) {
    _classCallCheck(this, DestinationsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the s3StorageListBuckets operation.
   * @callback module:api/DestinationsApi~s3StorageListBucketsCallback
   * @param {String} error Error message, if any.
   * @param {module:model/S3BucketList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * List all s3 buckets associated with given aws credentials
   * @param {module:model/S3Credentials} body Aws credentials
   * @param {module:api/DestinationsApi~s3StorageListBucketsCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/S3BucketList}
   */


  _createClass(DestinationsApi, [{
    key: "s3StorageListBuckets",
    value: function s3StorageListBuckets(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling s3StorageListBuckets");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _S3BucketList["default"];
      return this.apiClient.callApi('/destination/s3/listBuckets', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DestinationsApi;
}();

exports["default"] = DestinationsApi;