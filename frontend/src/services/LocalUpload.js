import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FilePond } from 'react-filepond';
import Grid from '@material-ui/core/Grid';

import 'filepond/dist/filepond.min.css';
require('dotenv').config()

var FormData = require('form-data');
const FileUpload = () => {
    const [selectedFile, setSelectedFiles] = useState([]);

    const onClickHandler = () => {
        console.log(selectedFile['files'])
        for (let i = 0; i < selectedFile['files'].length; i++) {
            console.log("Inside loop")
            var data = new FormData();
            console.log("File name:", selectedFile['files'][i].name)
            let fileName = selectedFile['files'][i].name
            data.append('files', selectedFile['files'][i]);
            data.append('reqJson', '{\n    "sourceConfig": {\n        "name": "LocalStorage"\n    },\n    "destinationConfig": {\n        "name": "AwsS3",\n        "extendedData": {\n            "fileName": "fileName",\n            "bucketName": "slice-aws-bucket",\n            "credentials": {\n   "ACCESS_KEY": "AKIA57SBI3SBWSUJK4FO",\n                "SECRET_KEY": "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"\n            }\n        }\n    }\n}');

            axios({
                method: "post",
                url: "http://localhost:8081/docTransfer",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log(response);
                    window.alert(`${selectedFile['files'][i].name} transferred successfully!`);
                    setSelectedFiles(null)
                })
                .catch(function (response) {
                    console.log('Error: ', response);
                });

        }
    }

    return (
        <Container maxWidth='sm'>
            <div class="form-group" style={{ width: "500px" }}>
                <form method="post" action="#" id="#">
                    <FilePond allowMultiple={true}
                        files={selectedFile}
                        onupdatefiles={fileItems => {
                            setSelectedFiles({
                                files: fileItems.map(fileItem => fileItem.file)
                        });
                    }} />
                    <Button pt={2} onClick={onClickHandler} variant="contained" color="primary" component="label">
                        Submit
                    </Button>
                </form>
            </div>
        </Container>
    )
}
export default FileUpload
