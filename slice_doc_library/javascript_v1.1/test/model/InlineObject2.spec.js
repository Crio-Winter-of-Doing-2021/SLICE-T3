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
    instance = new SliceDocLibraryT3.InlineObject2();
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

  describe('InlineObject2', function() {
    it('should create an instance of InlineObject2', function() {
      // uncomment below and update the code to test InlineObject2
      //var instane = new SliceDocLibraryT3.InlineObject2();
      //expect(instance).to.be.a(SliceDocLibraryT3.InlineObject2);
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new SliceDocLibraryT3.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property gdriveClientCredentials (base name: "gdriveClientCredentials")', function() {
      // uncomment below and update the code to test the property gdriveClientCredentials
      //var instance = new SliceDocLibraryT3.InlineObject2();
      //expect(instance).to.be();
    });

  });

}));
