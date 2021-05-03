# DocxlibJs.TransferApi

All URIs are relative to *https://docxlib-backend.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileTransfer**](TransferApi.md#fileTransfer) | **POST** /docTransfer | Endpoint to transfer chosen file from a source to destination storage



## fileTransfer

> FileTransferResult fileTransfer(fileTransfer)

Endpoint to transfer chosen file from a source to destination storage

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.TransferApi();
let fileTransfer = new DocxlibJs.FileTransfer(); // FileTransfer | 
apiInstance.fileTransfer(fileTransfer, (error, data, response) => {
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
 **fileTransfer** | [**FileTransfer**](FileTransfer.md)|  | 

### Return type

[**FileTransferResult**](FileTransferResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, multipart/form-data
- **Accept**: application/json

