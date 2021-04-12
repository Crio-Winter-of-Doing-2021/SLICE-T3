import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FilePond } from 'react-filepond';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Grid from '@material-ui/core/Grid';
import 'filepond/dist/filepond.min.css';

var SliceDocLibraryT3 = require('slice_doc_library_t3/dist/index')
require('dotenv').config()

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },  
  }));
  

var FormData = require('form-data');
const FileUpload = () => {
    const [selectedFile, setSelectedFiles] = useState([]);

    const [bucketName, setBucketName] = React.useState('None Selected');
    const [bucketList, setBucketList] = React.useState([])

    let apiInstance = new SliceDocLibraryT3.DestinationsApi();
    useEffect(()=>{
        let s3Creds = {
        "ACCESS_KEY": process.env.REACT_AWS_ACCESS_KEY,
        "SECRET_KEY": process.env.REACT_AWS_SECRET_KEY
        }
        let listOpts = {
        's3Credentials': s3Creds // S3Credentials | 
        };

        async function getBucketList(){
        return new Promise((resolve,reject) => {
            apiInstance.s3StorageListBuckets(listOpts, (error, data, response) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(data)
                }
            });  
        });
        }
        let tempBucketList = []

        getBucketList()
        .then(data=>data['data'].forEach(bucket=>tempBucketList.push(bucket['Name'])))
        .catch(error=>console.log("Error:", error))

        console.log("Obtained buckets: ", tempBucketList)
        setBucketList(tempBucketList)
    }, [])

    function SimpleSelect() {
      const classes = useStyles();

      const handleChange = (event) => {
        event.preventDefault()
        setBucketName(event.target.value)
      };

      return (
        <div>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Bucket</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={handleChange}
              value={bucketName}
            >
              <MenuItem value={bucketList}>{bucketList}</MenuItem>
              
            </Select>
          </FormControl>
        </div>
      )
    }



    const onClickHandler = () => {
        if (selectedFile.length===0){
            window.alert('Select Files to transfer!')
          }
        console.log(selectedFile['files'])
        for (let i = 0; i < selectedFile['files'].length; i++) {
            console.log("Inside loop")
            var data = new FormData();
            console.log("File name:", selectedFile['files'][i].name)
            let fileName = selectedFile['files'][i].name
            let selectedBucket = bucketName[0]
            data.append('files', selectedFile['files'][i]);
            data.append('reqJson', '{\n    "sourceConfig": {\n        "name": "LocalStorage"\n    },\n    "destinationConfig": {\n        "name": "AwsS3",\n        "extendedData": {\n            "fileName": "fileName",\n            "bucketName": "slice-aws-bucket",\n            "credentials": {\n   "ACCESS_KEY": "AKIA57SBI3SBWSUJK4FO",\n                "SECRET_KEY": "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"\n            }\n        }\n    }\n}');
            console.log(data)
            axios({
                method: "post",
                url: "http://localhost:8081/docTransfer",
                data: data,
                headers: { "Content-Type": "multipart/form-data" },
            })
                .then(function (response) {
                    console.log(response);
                    window.alert(`${fileName} transferred successfully!`);
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
                    <Grid container direction="row" spacing={3}>
                        <Grid item xs={12} md={8} lg={6}>
                            <SimpleSelect />
                        </Grid>
                        <Grid item xs={12} md={4} lg={6}>
                            <Button onClick={onClickHandler} variant="contained" color="primary">
                                Transfer files
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </Container>
    )
}
export default FileUpload
