async function downloadFile(ConfigObject) {
    console.log("download func");
    console.log(ConfigObject);

    return new Promise((resolve,reject) => {
        try{
            const file = ConfigObject[0];
            resolve(file.buffer.toString('base64'));
        }catch(err){
            reject(err);
        }
    });
}

  module.exports = {
    downloadFile
  }  