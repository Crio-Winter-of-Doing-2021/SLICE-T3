/**
 * docxlib_js
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

import ApiClient from '../ApiClient';

/**
 * The FileTransferSourceConfig model module.
 * @module model/FileTransferSourceConfig
 * @version 1.0.0
 */
class FileTransferSourceConfig {
    /**
     * Constructs a new <code>FileTransferSourceConfig</code>.
     * @alias module:model/FileTransferSourceConfig
     * @param name {String} 
     * @param extendedData {Object} 
     */
    constructor(name, extendedData) { 
        
        FileTransferSourceConfig.initialize(this, name, extendedData);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, extendedData) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FileTransferSourceConfig();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('extendedData')) {
                obj['extendedData'] = ApiClient.convertToType(data['extendedData'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
FileTransferSourceConfig.prototype['name'] = undefined;

/**
 * @member {Object} extendedData
 */
FileTransferSourceConfig.prototype['extendedData'] = undefined;






export default FileTransferSourceConfig;

