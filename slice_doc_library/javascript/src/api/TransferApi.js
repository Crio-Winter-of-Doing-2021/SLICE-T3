/**
 * Slice Doc Library - T3
 * This is api documentation for slice document library. Team `SLICE - T3`
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import FileTransfer from '../model/FileTransfer';
import FileTransferResult from '../model/FileTransferResult';

/**
* Transfer service.
* @module api/TransferApi
* @version 1.0.0
*/
export default class TransferApi {

    /**
    * Constructs a new TransferApi. 
    * @alias module:api/TransferApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
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
    fileTransfer(body, callback) {
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling fileTransfer");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = FileTransferResult;
      return this.apiClient.callApi(
        '/docTransfer', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}