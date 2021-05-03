# SliceDocLibraryT3.TransferApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileTransfer**](TransferApi.md#fileTransfer) | **POST** /docTransfer | Endpoint to transfer chosen file from a source to destination storage



## fileTransfer

> FileTransferResult fileTransfer(fileTransfer)

Endpoint to transfer chosen file from a source to destination storage

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.TransferApi();
let fileTransfer = new SliceDocLibraryT3.FileTransfer(); // FileTransfer | 
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

