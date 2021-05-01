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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DocxlibJs);
  }
}(this, function(expect, DocxlibJs) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DocxlibJs.GdriveClientCredentials();
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

  describe('GdriveClientCredentials', function() {
    it('should create an instance of GdriveClientCredentials', function() {
      // uncomment below and update the code to test GdriveClientCredentials
      //var instane = new DocxlibJs.GdriveClientCredentials();
      //expect(instance).to.be.a(DocxlibJs.GdriveClientCredentials);
    });

    it('should have the property clientId (base name: "client_id")', function() {
      // uncomment below and update the code to test the property clientId
      //var instance = new DocxlibJs.GdriveClientCredentials();
      //expect(instance).to.be();
    });

    it('should have the property clientSecret (base name: "client_secret")', function() {
      // uncomment below and update the code to test the property clientSecret
      //var instance = new DocxlibJs.GdriveClientCredentials();
      //expect(instance).to.be();
    });

    it('should have the property redirectUris (base name: "redirect_uris")', function() {
      // uncomment below and update the code to test the property redirectUris
      //var instance = new DocxlibJs.GdriveClientCredentials();
      //expect(instance).to.be();
    });

  });

}));
