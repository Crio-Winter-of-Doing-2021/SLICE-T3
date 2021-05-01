# DocxlibJs.DestinationsApi

All URIs are relative to *https://docxlib-backend.herokuapp.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**s3StorageListBuckets**](DestinationsApi.md#s3StorageListBuckets) | **POST** /destination/s3/listBuckets | List all s3 buckets associated with given aws credentials



## s3StorageListBuckets

> S3BucketList s3StorageListBuckets(opts)

List all s3 buckets associated with given aws credentials

### Example

```javascript
import DocxlibJs from 'docxlib_js';

let apiInstance = new DocxlibJs.DestinationsApi();
let opts = {
  's3Credentials': new DocxlibJs.S3Credentials() // S3Credentials | 
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

