import { useState} from 'react'
import ListSelectedFiles from './DriveListFiles'
import Grid from '@material-ui/core/Grid';
import { GoogleLogin } from 'react-google-login';
import Button from '@material-ui/core/Button';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

var SliceDocLibraryT3 = require('slice_doc_library_t3/dist/index')
require('dotenv').config()


const DriveUpload = () => {
    const [authenticated, setAuthenticated] = useState(false)
    const [fileList, setFileList] = useState({})
    const [oAuthOutput, setOAuthOutput] = useState({})

    let apiInstance = new SliceDocLibraryT3.SourcesApi();

    const onTokenSubmit = async (outputTokenObj) => {

        let creds_token = {
            "token": outputTokenObj,
            "gdriveClientCredentials": 
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
    
    const responseGoogle = async (response) => {
        console.log(response['tokenObj']);
        if (response['tokenObj']){
            let outputTokenObj = response['tokenObj']
            setOAuthOutput(response['tokenObj'])
            onTokenSubmit(outputTokenObj)
        }
    }

    const EnterToken = () => { 
        return (
            <>
                <Grid
                    xs={12} md={4} lg={12}
                    container
                    direction="column"
                    justify="center"
                    alighItems="center"
                    >
                    <GoogleLogin
                        clientId={process.env.REACT_APP_DRIVE_SECRET_ID}
                        buttonText="Login"
                        render={renderProps => (
                        <Grid container>
                            <AccountCircleIcon fontSize="large" color='primary'/>
                            <Button size='large' 
                                    outlinedSizeLarge={true} 
                                    variant="contained" 
                                    color="primary" 
                                    onClick={renderProps.onClick} 
                                    disabled={renderProps.disabled}>
                                Click to Authenticate via Google
                            </Button>
                        </Grid>
                        )}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </Grid>
            </>
        )
    }

    const finalValue = authenticated ? <ListSelectedFiles rows={fileList} authToken={oAuthOutput} />: <EnterToken />

    return finalValue

}


export default DriveUpload
