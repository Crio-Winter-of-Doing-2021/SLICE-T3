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
 * The InlineObject model module.
 * @module model/InlineObject
 * @version 1.0.0
 */
class InlineObject {
    /**
     * Constructs a new <code>InlineObject</code>.
     * @alias module:model/InlineObject
     * @param email {String} 
     * @param password {String} 
     */
    constructor(email, password) { 
        
        InlineObject.initialize(this, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, email, password) { 
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>InlineObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject} obj Optional instance to populate.
     * @return {module:model/InlineObject} The populated <code>InlineObject</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InlineObject();

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} email
 */
InlineObject.prototype['email'] = undefined;

/**
 * @member {String} password
 */
InlineObject.prototype['password'] = undefined;






export default InlineObject;

