# SliceDocLibraryT3.TransferApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fileTransfer**](TransferApi.md#fileTransfer) | **POST** /docTransfer | Endpoint to transfer chosen file from a source to destination storage



## fileTransfer

> FileTransferResult fileTransfer(body)

Endpoint to transfer chosen file from a source to destination storage

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.TransferApi();
let body = new SliceDocLibraryT3.FileTransfer(); // FileTransfer | Data source, storage service and upload file specs
apiInstance.fileTransfer(body, (error, data, response) => {
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
 **body** | [**FileTransfer**](FileTransfer.md)| Data source, storage service and upload file specs | 

### Return type

[**FileTransferResult**](FileTransferResult.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

