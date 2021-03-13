import React from 'react';
import Button from '@material-ui/core/Button';
import {useState} from 'react';
import AnimatedModal from '../components/animated-model'

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [isFilePicked, setFilePicked] = useState(false);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0]);
        setFilePicked(true);
    }

    const handleSubmission = () => {
        const formData = new formData()
        formData.append('File', selectedFile)

        fetch(
            'S3_URL_HERE',
            {
                method: 'POST',
                body: formData,
            }
        )
        .then((response)=> response.json())
        .then((result)=>{
            console.log('Success: ', result);
        })
        .catch((error)=>{
            console.error('Error: ', error)
        })

    }

    return (
        <div>
            <input type="file" name="file" onChange={changeHandler}></input>
            {
                isFilePicked ? (
                    <div>
                        <h2>File details: </h2>
                        <p>File name: {selectedFile.name}</p>
                        <p>File type: {selectedFile.type}</p>
                        <p>Size : {selectedFile.size/(1024*1024)} MB</p>
                    </div>
                ) : (
                    <p>Select file </p>
                )
            }
            <Button pt={2} onClick={handleSubmission} variant="contained" color="primary" component="label">
                Submit
            </Button>
        </div>
    )
}

export default FileUpload