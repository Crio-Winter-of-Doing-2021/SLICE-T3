const functionLookup = {
    "source" : {
        "GoogleDrive" : "./data_sources/GoogleDrive",
        "LocalStorage" : "./data_sources/LocalFile",
        "DigiMocker": "./data_sources/DigiMocker"
    },
    "destination" : {
        "AwsS3" : "./data_destinations/AwsS3"
    }
}

async function docTransfer(sourceConfig, destinationConfig, files){
    const source = sourceConfig.name;
    const storage = destinationConfig.name;
    const {downloadFile} = require(functionLookup["source"][source]);
    const {uploadFile} = require(functionLookup["destination"][storage]);

    // file provided directly
    if(files){
        sourceConfig.extendedData = files
    }

    return new Promise((resolve,reject) => {
        downloadFile(sourceConfig.extendedData)
        .then(fileDataBase64 =>{
            console.log("received file base64, uploading to destination..");
            uploadFile(fileDataBase64,destinationConfig.extendedData)
            .then(response => resolve(response))
            .catch(error => reject(error));
        })
        .catch(error => {
            console.log(error);
            reject(error);
        });
    });
}

module.exports = {
    docTransfer
}