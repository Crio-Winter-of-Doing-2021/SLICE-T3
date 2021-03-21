"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApiClient", {
  enumerable: true,
  get: function get() {
    return _ApiClient["default"];
  }
});
Object.defineProperty(exports, "FileTransfer", {
  enumerable: true,
  get: function get() {
    return _FileTransfer["default"];
  }
});
Object.defineProperty(exports, "FileTransferResult", {
  enumerable: true,
  get: function get() {
    return _FileTransferResult["default"];
  }
});
Object.defineProperty(exports, "FileTransferSourceConfig", {
  enumerable: true,
  get: function get() {
    return _FileTransferSourceConfig["default"];
  }
});
Object.defineProperty(exports, "GdriveFile", {
  enumerable: true,
  get: function get() {
    return _GdriveFile["default"];
  }
});
Object.defineProperty(exports, "GdriveFileList", {
  enumerable: true,
  get: function get() {
    return _GdriveFileList["default"];
  }
});
Object.defineProperty(exports, "GdriveToken", {
  enumerable: true,
  get: function get() {
    return _GdriveToken["default"];
  }
});
Object.defineProperty(exports, "GdriveUrl", {
  enumerable: true,
  get: function get() {
    return _GdriveUrl["default"];
  }
});
Object.defineProperty(exports, "S3BucketList", {
  enumerable: true,
  get: function get() {
    return _S3BucketList["default"];
  }
});
Object.defineProperty(exports, "S3BucketListData", {
  enumerable: true,
  get: function get() {
    return _S3BucketListData["default"];
  }
});
Object.defineProperty(exports, "S3Credentials", {
  enumerable: true,
  get: function get() {
    return _S3Credentials["default"];
  }
});
Object.defineProperty(exports, "DestinationsApi", {
  enumerable: true,
  get: function get() {
    return _DestinationsApi["default"];
  }
});
Object.defineProperty(exports, "SourcesApi", {
  enumerable: true,
  get: function get() {
    return _SourcesApi["default"];
  }
});
Object.defineProperty(exports, "TransferApi", {
  enumerable: true,
  get: function get() {
    return _TransferApi["default"];
  }
});

var _ApiClient = _interopRequireDefault(require("./ApiClient"));

var _FileTransfer = _interopRequireDefault(require("./model/FileTransfer"));

var _FileTransferResult = _interopRequireDefault(require("./model/FileTransferResult"));

var _FileTransferSourceConfig = _interopRequireDefault(require("./model/FileTransferSourceConfig"));

var _GdriveFile = _interopRequireDefault(require("./model/GdriveFile"));

var _GdriveFileList = _interopRequireDefault(require("./model/GdriveFileList"));

var _GdriveToken = _interopRequireDefault(require("./model/GdriveToken"));

var _GdriveUrl = _interopRequireDefault(require("./model/GdriveUrl"));

var _S3BucketList = _interopRequireDefault(require("./model/S3BucketList"));

var _S3BucketListData = _interopRequireDefault(require("./model/S3BucketListData"));

var _S3Credentials = _interopRequireDefault(require("./model/S3Credentials"));

var _DestinationsApi = _interopRequireDefault(require("./api/DestinationsApi"));

var _SourcesApi = _interopRequireDefault(require("./api/SourcesApi"));

var _TransferApi = _interopRequireDefault(require("./api/TransferApi"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }