# docxlib_js

DocxlibJs - JavaScript client for docxlib_js
This library can be used to transfer files from one storage service to another.\
Currently integrated data sources -
Google Drive
\
Currently integrated data destinations -
S3 buckets

Install it via:

```shell
npm install docxlib_js --save
```

## Getting Started

Please follow the installation instruction and execute the following JS code:

```javascript
var DocxlibJs = require('docxlib_js');


var api = new DocxlibJs.DestinationsApi()
var opts = {
  's3Credentials': new DocxlibJs.S3Credentials() // {S3Credentials} 
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.s3StorageListBuckets(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://docxlib-backend.herokuapp.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DocxlibJs.DestinationsApi* | [**s3StorageListBuckets**](docs/DestinationsApi.md#s3StorageListBuckets) | **POST** /destination/s3/listBuckets | List all s3 buckets associated with given aws credentials
*DocxlibJs.SourcesApi* | [**digiMockerSourceAuthCallback**](docs/SourcesApi.md#digiMockerSourceAuthCallback) | **POST** /source/digimocker/oauth2callback | Returns oauth token from digimocker login url
*DocxlibJs.SourcesApi* | [**digimockerSourceAuth**](docs/SourcesApi.md#digimockerSourceAuth) | **GET** /source/digimocker/auth | Get Digimocker Auth Url
*DocxlibJs.SourcesApi* | [**digimockerSourceListFiles**](docs/SourcesApi.md#digimockerSourceListFiles) | **POST** /source/digimocker/listFiles | Get list of all files in authenticated user&#39;s digimocker account
*DocxlibJs.SourcesApi* | [**gDriveSourceAuth**](docs/SourcesApi.md#gDriveSourceAuth) | **POST** /source/gdrive/auth | Get Google Drive Auth Url
*DocxlibJs.SourcesApi* | [**gDriveSourceAuthCallback**](docs/SourcesApi.md#gDriveSourceAuthCallback) | **POST** /source/gdrive/oauth2callback | Returns oauth token from google callback url
*DocxlibJs.SourcesApi* | [**gDriveSourceListFiles**](docs/SourcesApi.md#gDriveSourceListFiles) | **POST** /source/gdrive/listFiles | Get list of all files in authenticated user&#39;s google drive
*DocxlibJs.TransferApi* | [**fileTransfer**](docs/TransferApi.md#fileTransfer) | **POST** /docTransfer | Endpoint to transfer chosen file from a source to destination storage


## Documentation for Models

 - [DocxlibJs.DigiMockerFileList](docs/DigiMockerFileList.md)
 - [DocxlibJs.DigiMockerToken](docs/DigiMockerToken.md)
 - [DocxlibJs.DigimockerFile](docs/DigimockerFile.md)
 - [DocxlibJs.FileTransfer](docs/FileTransfer.md)
 - [DocxlibJs.FileTransferResult](docs/FileTransferResult.md)
 - [DocxlibJs.FileTransferSourceConfig](docs/FileTransferSourceConfig.md)
 - [DocxlibJs.GdriveClientCredentials](docs/GdriveClientCredentials.md)
 - [DocxlibJs.GdriveFile](docs/GdriveFile.md)
 - [DocxlibJs.GdriveFileList](docs/GdriveFileList.md)
 - [DocxlibJs.GdriveToken](docs/GdriveToken.md)
 - [DocxlibJs.GdriveUrl](docs/GdriveUrl.md)
 - [DocxlibJs.InlineObject](docs/InlineObject.md)
 - [DocxlibJs.InlineObject1](docs/InlineObject1.md)
 - [DocxlibJs.InlineObject2](docs/InlineObject2.md)
 - [DocxlibJs.InlineObject3](docs/InlineObject3.md)
 - [DocxlibJs.InlineObject4](docs/InlineObject4.md)
 - [DocxlibJs.S3BucketList](docs/S3BucketList.md)
 - [DocxlibJs.S3BucketListData](docs/S3BucketListData.md)
 - [DocxlibJs.S3Credentials](docs/S3Credentials.md)


## Documentation for Authorization

All endpoints do not require authorization.
