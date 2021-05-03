# DocxlibJs.SourcesApi

All URIs are relative to *https://docxlib-backend.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**digiMockerSourceAuthCallback**](SourcesApi.md#digiMockerSourceAuthCallback) | **POST** /source/digimocker/oauth2callback | Returns oauth token from digimocker login url
[**digimockerSourceAuth**](SourcesApi.md#digimockerSourceAuth) | **GET** /source/digimocker/auth | Get Digimocker Auth Url
[**digimockerSourceListFiles**](SourcesApi.md#digimockerSourceListFiles) | **POST** /source/digimocker/listFiles | Get list of all files in authenticated user&#39;s digimocker account
[**gDriveSourceAuth**](SourcesApi.md#gDriveSourceAuth) | **POST** /source/gdrive/auth | Get Google Drive Auth Url
[**gDriveSourceAuthCallback**](SourcesApi.md#gDriveSourceAuthCallback) | **POST** /source/gdrive/oauth2callback | Returns oauth token from google callback url
[**gDriveSourceListFiles**](SourcesApi.md#gDriveSourceListFiles) | **POST** /source/gdrive/listFiles | Get list of all files in authenticated user&#39;s google drive



## digiMockerSourceAuthCallback

> DigiMockerToken digiMockerSourceAuthCallback(opts)

Returns oauth token from digimocker login url

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
let opts = {
  'inlineObject': new DocxlibJs.InlineObject() // InlineObject | 
};
apiInstance.digiMockerSourceAuthCallback(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

### Return type

[**DigiMockerToken**](DigiMockerToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## digimockerSourceAuth

> GdriveUrl digimockerSourceAuth()

Get Digimocker Auth Url

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
apiInstance.digimockerSourceAuth((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**GdriveUrl**](GdriveUrl.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## digimockerSourceListFiles

> DigiMockerFileList digimockerSourceListFiles(opts)

Get list of all files in authenticated user&#39;s digimocker account

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
let opts = {
  'inlineObject1': new DocxlibJs.InlineObject1() // InlineObject1 | 
};
apiInstance.digimockerSourceListFiles(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

[**DigiMockerFileList**](DigiMockerFileList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gDriveSourceAuth

> GdriveUrl gDriveSourceAuth(opts)

Get Google Drive Auth Url

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
let opts = {
  'inlineObject2': new DocxlibJs.InlineObject2() // InlineObject2 | 
};
apiInstance.gDriveSourceAuth(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**GdriveUrl**](GdriveUrl.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gDriveSourceAuthCallback

> GdriveToken gDriveSourceAuthCallback(UNKNOWN_PARAMETER_NAME, opts)

Returns oauth token from google callback url

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
let UNKNOWN_PARAMETER_NAME = new DocxlibJs.null(); //  | Auth Code sent upon gdrive auth
let opts = {
  'inlineObject3': new DocxlibJs.InlineObject3() // InlineObject3 | 
};
apiInstance.gDriveSourceAuthCallback(UNKNOWN_PARAMETER_NAME, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **UNKNOWN_PARAMETER_NAME** | [****](.md)| Auth Code sent upon gdrive auth | 
 **inlineObject3** | [**InlineObject3**](InlineObject3.md)|  | [optional] 

### Return type

[**GdriveToken**](GdriveToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## gDriveSourceListFiles

> GdriveFileList gDriveSourceListFiles(opts)

Get list of all files in authenticated user&#39;s google drive

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.SourcesApi();
let opts = {
  'inlineObject4': new DocxlibJs.InlineObject4() // InlineObject4 | 
};
apiInstance.gDriveSourceListFiles(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inlineObject4** | [**InlineObject4**](InlineObject4.md)|  | [optional] 

### Return type

[**GdriveFileList**](GdriveFileList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

