const AWS = require('aws-sdk');

async function listBuckets(credentials){
    const s3 = new AWS.S3({
        accessKeyId: credentials.ACCESS_KEY,
        secretAccessKey: credentials.SECRET_KEY
    });

    // console.log(s3);

    return new Promise((resolve,reject) => {
        // Call S3 to list the buckets
        s3.listBuckets(function(err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data.Buckets);
            }
        });
    });
}

async function uploadFile(fileContentBase64,ConfigObject) {
    const s3 = new AWS.S3({
        accessKeyId: ConfigObject.credentials.ACCESS_KEY,
        secretAccessKey: ConfigObject.credentials.SECRET_KEY
    });

    // Read content from the file
    // const fileContent = Buffer.from(fileContentByteArray);
    const fileContent = Buffer.from(fileContentBase64, 'base64');

    // Setting up S3 upload parameters
    const params = {
        Bucket: ConfigObject.bucketName,
        Key: ConfigObject.fileName,
        Body: fileContent
    };

    return new Promise((resolve,reject) => {

        s3.upload(params, function(err, data) {
                if (err) {
                    reject(err);
                }
                console.log(`File uploaded successfully. ${data.Location}`);
                console.log(data);
                resolve(data);
            });

    });
}


module.exports = {
    listBuckets,
    uploadFile
}