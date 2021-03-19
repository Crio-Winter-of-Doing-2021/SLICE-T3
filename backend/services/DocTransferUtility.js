const functionLookup = {
    "source" : {
        "GoogleDrive" : "./data_sources/GoogleDrive"
    },
    "destination" : {
        "AwsS3" : "./data_destinations/AwsS3"
    }
}

async function docTransfer(sourceConfig, destinationConfig){
    const source = sourceConfig.name;
    const storage = destinationConfig.name;

    const {downloadFile} = require(functionLookup["source"][source]);
    const {uploadFile} = require(functionLookup["destination"][storage]);

    return new Promise((resolve,reject) => {
        downloadFile(sourceConfig.extendedData)
        .then(fileDataBase64 =>{
            console.log(fileDataBase64);
            uploadFile(fileDataBase64,destinationConfig.extendedData)
            .then(response => resolve(response))
            .catch(error => reject(error));
        })
        .catch(error => {
            reject(error);
        });
    });
}

module.exports = {
    docTransfer
}