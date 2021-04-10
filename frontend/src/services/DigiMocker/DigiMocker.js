import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useForm } from 'react-hook-form';
import ListSelectedFiles from './ListFiles'
var SliceDocLibraryT3 = require('slice_doc_library_t3/dist/index')

const DigiMocker = () => {

    const [isAuthenticated, setAuthenticated] = useState(false)
    const [fileList, setFileList] = useState({})

    const { register, handleSubmit, setValue } = useForm()

    const useStyles = makeStyles((theme) => ({
        paper: {
            marginTop: theme.spacing(2),
            display: 'flex',
            flexDirection: 'row',
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        },
    }));

    let apiInstance = new SliceDocLibraryT3.SourcesApi();
    
    const onSubmit = async (data) => {
        
        let creds = {
            "email": data.email,
            "password": data.password
        };

        let loginOpts = {
            'inlineObject': creds // InlineObject | 
        };

        async function getDigiMockerToken(){
            return new Promise((resolve,reject) => {
                apiInstance.digiMockerSourceAuthCallback(loginOpts, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data)
                    }
                });  
            });
        }

        let authToken = await getDigiMockerToken()
        .then(data=>data)
        .catch(error=>console.log("Error:", error))
        
        console.log("Token:", authToken)

        let credsAndToken = {
            "email": "test@user.com",
            "password": "12346789",
            "token": authToken
        };
        
        let listFilesOpts = {
            'inlineObject1': credsAndToken // InlineObject1 | 
          };

        console.log(listFilesOpts)

        async function getFilesList(){
            return new Promise((resolve,reject) => {
                apiInstance.digimockerSourceListFiles(listFilesOpts, (error, data, response) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data)
                    }
                });  
            });
        }

        let tempFilesList = await getFilesList()
        .then(data=>data.files)
        .catch(error=>console.log("Error:", error))

        setFileList(tempFilesList)
        console.log("Files:", tempFilesList)

        if (tempFilesList){
            setAuthenticated(true)
        }   
    }

    function SignIn() {
        const classes = useStyles();

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            inputRef={register}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            inputRef={register}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                    </form>
                </div>
            </Container>
        );
    }

    const finalValue = isAuthenticated ? <ListSelectedFiles rows={fileList}/>: <SignIn />

    return finalValue
}

export default DigiMocker

