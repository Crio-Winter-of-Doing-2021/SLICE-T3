import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useState} from 'react'
import TextField from '@material-ui/core/TextField';
import ListSelectedFiles from './DriveListFiles'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
// var SliceDocLibraryT3 = require('../../../node_modules/slice_doc_library_t3/dist/index');
var SliceDocLibraryT3 = require('slice_doc_library_t3/dist/index')
require('dotenv').config()


const DriveUpload = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [tokenValue, setTokenValue] = useState('')
    const [fileList, setFileList] = useState({})
    const [oAuthOutput, setOAuthOutput] = useState({})


    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'column',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    let apiInstance = new SliceDocLibraryT3.SourcesApi();

    const onButtonPress = () => {
        console.log("Button pressed")

        let creds = {
            "gdriveClientCredentials" : 
            {
                'client_id': `${process.env.REACT_APP_DRIVE_SECRET_ID}`,
                'client_secret': `${process.env.REACT_APP_DRIVE_SECRET_KEY}`,
                'redirect_uris': `${process.env.REACT_APP_DRIVE_REDIRECT_URIS}`,
            } 
        }

        let opts = {
        'inlineObject2': creds // InlineObject | 
        };

        console.log("opts:", opts)

        apiInstance.gDriveSourceAuth(opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ', data.authUrl);
            window.open(data.authUrl)
        }
        });
    }

    const handleTokenChange = (event) => {
        setTokenValue(event.target.value)
    }

    const onTokenSubmit = async (event) => {
        event.preventDefault()

        let creds = {
            "gdriveClientCredentials" : 
            {
                'client_id': `${process.env.REACT_APP_DRIVE_SECRET_ID}`,
                'client_secret': `${process.env.REACT_APP_DRIVE_SECRET_KEY}`,
                'redirect_uris': `${process.env.REACT_APP_DRIVE_REDIRECT_URIS}`,
            } 
        }

        let opts = {
        'inlineObject3': creds // InlineObject | 
        };

        console.log("Creds",opts)
        console.log("Token:", tokenValue)
        
        async function getOauthData(){
            return new Promise((resolve,reject) => {
                apiInstance.gDriveSourceAuthCallback(tokenValue, opts, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data)
                    }
                });  
            });
        }

        let tempOauthOutput = await getOauthData()
        .then(data=>data)
        .catch(error=>console.log("Error:", error))
        
        console.log("temp data", JSON.stringify(tempOauthOutput))
        setOAuthOutput(tempOauthOutput)
        console.log("oauth data", JSON.stringify(oAuthOutput))
        
        let creds_token = {
            "token": tempOauthOutput,
            "gdriveClientCredentials"    : 
            {
                'client_id': `${process.env.REACT_APP_DRIVE_SECRET_ID}`,
                'client_secret': `${process.env.REACT_APP_DRIVE_SECRET_KEY}`,
                'redirect_uris': `${process.env.REACT_APP_DRIVE_REDIRECT_URIS}`,
            }
        }

        let optsListFiles = {
            'inlineObject4': creds_token // InlineObject2 | 
          };

        async function getDriveFilesData(){
            return new Promise((resolve,reject) => {
                apiInstance.gDriveSourceListFiles(optsListFiles, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data)
                    }
                });  
            });
        }

        let driveFilesData = await getDriveFilesData()
        .then(data=>data)
        .catch(error=>console.log("Error:", error))

        console.log("Files:", driveFilesData.files)
        setFileList(driveFilesData.files)
        setAuthenticated(true)

    }

    const EnterToken = () => {
        const classes = useStyles();    
        return (
            <>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <form className={classes.form} onSubmit={onTokenSubmit} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="token"
                                label="Enter Token"
                                name="token"
                                onChange={handleTokenChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={onTokenSubmit}
                                className={classes.submit}
                            >
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Container>
            
                <Button pb={5} fullWidth onClick={onButtonPress} variant="contained" color="secondary" component="label">
                    Get Token
                </Button>
            </>
        )
    }

    const finalValue = authenticated ? <ListSelectedFiles rows={fileList} authToken={oAuthOutput} />: <EnterToken />

    return finalValue

}


export default DriveUpload
