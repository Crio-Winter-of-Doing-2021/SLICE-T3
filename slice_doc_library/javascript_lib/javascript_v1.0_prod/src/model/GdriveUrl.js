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
 * The GdriveUrl model module.
 * @module model/GdriveUrl
 * @version 1.0.0
 */
class GdriveUrl {
    /**
     * Constructs a new <code>GdriveUrl</code>.
     * @alias module:model/GdriveUrl
     * @param authUrl {String} 
     * @param message {String} 
     */
    constructor(authUrl, message) { 
        
        GdriveUrl.initialize(this, authUrl, message);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authUrl, message) { 
        obj['authUrl'] = authUrl;
        obj['message'] = message;
    }

    /**
     * Constructs a <code>GdriveUrl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GdriveUrl} obj Optional instance to populate.
     * @return {module:model/GdriveUrl} The populated <code>GdriveUrl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GdriveUrl();

            if (data.hasOwnProperty('authUrl')) {
                obj['authUrl'] = ApiClient.convertToType(data['authUrl'], 'String');
            }
            if (data.hasOwnProperty('message')) {
                obj['message'] = ApiClient.convertToType(data['message'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} authUrl
 */
GdriveUrl.prototype['authUrl'] = undefined;

/**
 * @member {String} message
 */
GdriveUrl.prototype['message'] = undefined;






export default GdriveUrl;

