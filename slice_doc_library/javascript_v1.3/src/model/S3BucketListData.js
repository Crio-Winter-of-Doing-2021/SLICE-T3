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

import ApiClient from '../ApiClient';

/**
 * The S3BucketListData model module.
 * @module model/S3BucketListData
 * @version 1.0.0
 */
class S3BucketListData {
    /**
     * Constructs a new <code>S3BucketListData</code>.
     * @alias module:model/S3BucketListData
     * @param name {String} 
     * @param creationDate {String} 
     */
    constructor(name, creationDate) { 
        
        S3BucketListData.initialize(this, name, creationDate);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, creationDate) { 
        obj['Name'] = name;
        obj['CreationDate'] = creationDate;
    }

    /**
     * Constructs a <code>S3BucketListData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/S3BucketListData} obj Optional instance to populate.
     * @return {module:model/S3BucketListData} The populated <code>S3BucketListData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new S3BucketListData();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('CreationDate')) {
                obj['CreationDate'] = ApiClient.convertToType(data['CreationDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
S3BucketListData.prototype['Name'] = undefined;

/**
 * @member {String} CreationDate
 */
S3BucketListData.prototype['CreationDate'] = undefined;






export default S3BucketListData;

