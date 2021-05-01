# SliceDocLibraryT3.DestinationsApi

All URIs are relative to *http://localhost:8081*

Method | HTTP request | Description
------------- | ------------- | -------------
[**s3StorageListBuckets**](DestinationsApi.md#s3StorageListBuckets) | **POST** /destination/s3/listBuckets | List all s3 buckets associated with given aws credentials



## s3StorageListBuckets

> S3BucketList s3StorageListBuckets(opts)

List all s3 buckets associated with given aws credentials

### Example

```javascript
import SliceDocLibraryT3 from 'slice_doc_library_t3';

let apiInstance = new SliceDocLibraryT3.DestinationsApi();
let opts = {
  's3Credentials': new SliceDocLibraryT3.S3Credentials() // S3Credentials | 
};
apiInstance.s3StorageListBuckets(opts, (error, data, response) => {
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
 **s3Credentials** | [**S3Credentials**](S3Credentials.md)|  | [optional] 

### Return type

[**S3BucketList**](S3BucketList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

