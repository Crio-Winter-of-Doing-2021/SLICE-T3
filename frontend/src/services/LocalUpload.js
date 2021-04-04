import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import axios from 'axios';
import { ErrorOutlineTwoTone } from '@material-ui/icons';

import {useDropzone} from 'react-dropzone';
require('dotenv').config()

var FormData = require('form-data');
var fs = require('fs');

const FileUpload=()=>{
    const [selectedFile, setSelectedFile] = useState(null);

    const onChangeHandler=event=>{
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }

    const onClickHandler=()=>{
        var data = new FormData();
        console.log("File name:", selectedFile.name)
        let fileName = String(selectedFile.name)
        data.append('files', selectedFile);
        data.append('reqJson', '{\n    "sourceConfig": {\n        "name": "LocalStorage"\n    },\n    "destinationConfig": {\n        "name": "AwsS3",\n        "extendedData": {\n            "fileName": "fileName",\n            "bucketName": "slice-aws-bucket",\n            "credentials": {\n   "ACCESS_KEY": "AKIA57SBI3SBWSUJK4FO",\n                "SECRET_KEY": "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"\n            }\n        }\n    }\n}');
       
        axios({
            method: "post",
            url: "http://localhost:8081/docTransfer",
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then(function (response) {
            console.log(response);
            window.alert(`${selectedFile.name} transferred successfully!`)
        })
        .catch(function (response) {
            console.log('Error: ',response);
        });
    }

    return (
        <Container>
            <form method="post" action="#" id="#">
                <div class="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" name="file" onChange={onChangeHandler} class="form-control" multiple=""/>
                    <Button pt={2} onClick={onClickHandler} variant="contained" color="primary" component="label">
                        Submit
                    </Button>
                </div>
            </form>
        </Container>
    )
}
export default FileUpload





// function FileUpload(props) {
//   const {getRootProps, getInputProps, open, acceptedFiles} = useDropzone({
//     // Disable click and keydown behavior
//     noClick: true,
//     noKeyboard: true
//   });

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <Container maxWidth>
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here</p>
//         <button type="button" onClick={open}>
//           Open File Dialog
//         </button>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </Container>
//   );
// }

// export default FileUpload
