const express = require('express')
const aws = require('aws-sdk');
const fileUpload = require('express-fileupload');
require('dotenv').config()

var uploadFile = express()
uploadFile.use(fileUpload());

aws.config.update({
    region: 'us-east-1',
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
})

const S3_BUCKET = process.env.S3_BUCKET

uploadFile.get('/', (req, res)=>{
    console.log('hello there')
})

uploadFile.post('/upload' ,(req, res) => {
    // var file = file.files;
    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    // const myFile = req.files.file;
    console.log("Starting..")
    console.log(req.files.file.name)

    const s3 = new aws.S3();
    const fileName = req.files.file.name;
    const fileType = req.files.file.type;
    // const fileData = req.files.data;
    
    var base64data = new Buffer.from(req.files.file.data, 'binary');
    var params = {
        ACL: 'public-read',
        Bucket: S3_BUCKET,
        Key: fileName,
        ContentType: fileType,
        Body: base64data,
    }
    
    s3.upload(params, (err, data)=>{
        // console.log('rip')

        if (err) {
            console.log("Error: ",err)
        }

        if (data) {
            console.log("Uploaded in: ", data.Location);
        }
    })
    // s3.getSignedUrl('putObject', params, (err, data) => {
    //     if(err){
    //         console.log(err);
    //         // res.json({success: false, error: err})
    //     }

    //     const returnData = {
    //         signedRequest: data,
    //         url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`
    //     };

    //     // res.json({success: true, data: {returnData}})
    // })
})

const PORT = 3001
uploadFile.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})