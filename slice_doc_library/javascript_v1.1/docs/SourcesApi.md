# SliceDocLibraryT3.SourcesApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gDriveSourceAuth**](SourcesApi.md#gDriveSourceAuth) | **POST** /source/gdrive/auth | Get Google Drive Auth Url
[**gDriveSourceAuthCallback**](SourcesApi.md#gDriveSourceAuthCallback) | **POST** /source/gdrive/oauth2callback | Returns oauth token from google callback url
[**gDriveSourceListFiles**](SourcesApi.md#gDriveSourceListFiles) | **POST** /source/gdrive/listFiles | Get list of all files in authenticated user&#39;s google drive



## gDriveSourceAuth

> GdriveUrl gDriveSourceAuth(opts)

Get Google Drive Auth Url

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
let opts = {
  'inlineObject': new SliceDocLibraryT3.InlineObject() // InlineObject | 
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
 **inlineObject** | [**InlineObject**](InlineObject.md)|  | [optional] 

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
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
let UNKNOWN_PARAMETER_NAME = new SliceDocLibraryT3.null(); //  | Auth Code sent upon gdrive auth
let opts = {
  'inlineObject1': new SliceDocLibraryT3.InlineObject1() // InlineObject1 | 
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
 **inlineObject1** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

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
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
let opts = {
  'inlineObject2': new SliceDocLibraryT3.InlineObject2() // InlineObject2 | 
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
 **inlineObject2** | [**InlineObject2**](InlineObject2.md)|  | [optional] 

### Return type

[**GdriveFileList**](GdriveFileList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

