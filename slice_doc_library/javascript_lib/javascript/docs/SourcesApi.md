# SliceDocLibraryT3.SourcesApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**gDriveSourceAuth**](SourcesApi.md#gDriveSourceAuth) | **GET** /source/gdrive/auth | Get Google Drive Auth Url
[**gDriveSourceAuthCallback**](SourcesApi.md#gDriveSourceAuthCallback) | **GET** /source/gdrive/oauth2callback | Returns oauth token from google callback url
[**gDriveSourceListFiles**](SourcesApi.md#gDriveSourceListFiles) | **POST** /source/gdrive/listFiles | Get list of all files in authenticated user&#39;s google drive



## gDriveSourceAuth

> GdriveUrl gDriveSourceAuth()

Get Google Drive Auth Url

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
apiInstance.gDriveSourceAuth((error, data, response) => {
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


## gDriveSourceAuthCallback

> GdriveToken gDriveSourceAuthCallback(code)

Returns oauth token from google callback url

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
let code = "code_example"; // String | Auth Code sent upon gdrive auth
apiInstance.gDriveSourceAuthCallback(code, (error, data, response) => {
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
 **code** | **String**| Auth Code sent upon gdrive auth | 

### Return type

[**GdriveToken**](GdriveToken.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## gDriveSourceListFiles

> GdriveFileList gDriveSourceListFiles(body)

Get list of all files in authenticated user&#39;s google drive

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.SourcesApi();
let body = new SliceDocLibraryT3.GdriveToken(); // GdriveToken | GDrive Auth token object
apiInstance.gDriveSourceListFiles(body, (error, data, response) => {
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
 **body** | [**GdriveToken**](GdriveToken.md)| GDrive Auth token object | 

### Return type

[**GdriveFileList**](GdriveFileList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

