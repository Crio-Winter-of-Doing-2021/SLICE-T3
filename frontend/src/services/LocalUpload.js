import React from 'react';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import axios from 'axios';
import { ErrorOutlineTwoTone } from '@material-ui/icons';


const FileUpload=()=>{

    const [selectedFile, setSelectedFile] = useState(null);

    const onChangeHandler=event=>{
        console.log(event.target.files[0])
        setSelectedFile(event.target.files[0])
    }

    const onClickHandler=()=>{
        const data = new FormData()
        data.append('file', selectedFile)
        console.log(data)
        axios.post('http://localhost:3001/upload', data,  {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        })
        .then(res=>{
            console.log(res.statusText)
        })
        .catch(error=>{
            console.log('Received: ',ErrorOutlineTwoTone)
        })
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