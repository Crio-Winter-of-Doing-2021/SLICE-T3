"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FileTransfer = _interopRequireDefault(require("../model/FileTransfer"));

var _FileTransferResult = _interopRequireDefault(require("../model/FileTransferResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Transfer service.
* @module api/TransferApi
* @version 1.0.0
*/
var TransferApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TransferApi. 
  * @alias module:api/TransferApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TransferApi(apiClient) {
    _classCallCheck(this, TransferApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the fileTransfer operation.
   * @callback module:api/TransferApi~fileTransferCallback
   * @param {String} error Error message, if any.
   * @param {module:model/FileTransferResult} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Endpoint to transfer chosen file from a source to destination storage
   * @param {module:model/FileTransfer} body Data source, storage service and upload file specs
   * @param {module:api/TransferApi~fileTransferCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/FileTransferResult}
   */


  _createClass(TransferApi, [{
    key: "fileTransfer",
    value: function fileTransfer(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileTransfer");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _FileTransferResult["default"];
      return this.apiClient.callApi('/docTransfer', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TransferApi;
}();

exports["default"] = TransferApi;