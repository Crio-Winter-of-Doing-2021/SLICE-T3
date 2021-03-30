import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import ListSelectedFiles from './DriveListFiles'

const DriveUpload = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [tokenValue, setTokenValue] = useState('')
    const [fileList, setFileList] = useState({})
    const [oAuthOutput, setOAuthOutput] = useState({})

    const onButtonPress = () => {
        return (
            axios.get('http://localhost:8081/source/gdrive/auth')
                .then(response => {
                    window.open(response.data.authUrl)
                })
        )
    }

    const handleTokenChange = (event) => {
        setTokenValue(event.target.value)
    }

    const onTokenSubmit = async (event) => {
        event.preventDefault()
        
        var oauthConfig = {
            method: 'get',
            url: `http://localhost:8081/source/gdrive/oauth2callback?code=${tokenValue}&scope=https://www.googleapis.com/auth/drive.readonly`,
            headers: {}
        };
        
        var authOutput = await axios(oauthConfig)
            .then((response)=>response.data)
            .catch(function (error) {
                console.log(error);
            });
            
        console.log(authOutput) 
        setOAuthOutput(authOutput)
        // console.log('Output: ', authOutput)

        var listFilesConfig = {
            method: 'post',
            url: 'http://localhost:8081/source/gdrive/listFiles',
            headers: {
                'Content-Type': 'application/json'
            },
            data: authOutput
        };
        
        var newFileList = await axios(listFilesConfig)
        .then((response)=>response.data)
        .catch(function (error) {
            console.log(error);
        });
        setFileList(newFileList)
        console.log('File list: ', fileList)
        setAuthenticated(true)
    }

    const EnterToken = () => {
        return (
            <>
                <form onSubmit={onTokenSubmit}>
                    <TextField value={tokenValue} pb={2} id="outlined-basic" onChange={handleTokenChange} label="Enter Token" variant="outlined" />
                    <Button pl={5} onClick={onTokenSubmit} variant="contained" color="primary" component="label"> Submit </Button>
                </form>
                <Button pb={5} onClick={onButtonPress} variant="contained" color="primary" component="label">
                    Get Token
                </Button>
            </>
        )
    }

    const finalValue = authenticated ? <ListSelectedFiles rows={fileList.files} authToken={oAuthOutput} />: <EnterToken />

    return finalValue

}


export default DriveUpload
