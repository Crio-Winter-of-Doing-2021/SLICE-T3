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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.SliceDocLibraryT3);
  }
}(this, function(expect, SliceDocLibraryT3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new SliceDocLibraryT3.S3BucketListData();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('S3BucketListData', function() {
    it('should create an instance of S3BucketListData', function() {
      // uncomment below and update the code to test S3BucketListData
      //var instane = new SliceDocLibraryT3.S3BucketListData();
      //expect(instance).to.be.a(SliceDocLibraryT3.S3BucketListData);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new SliceDocLibraryT3.S3BucketListData();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "CreationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new SliceDocLibraryT3.S3BucketListData();
      //expect(instance).to.be();
    });

  });

}));