import DropboxChooser from 'react-dropbox-chooser'
import Button from '@material-ui/core/Button';

const DROPBOX_KEY=`${process.env.REACT_APP_DROPBOX_KEY}`

const DropboxUpload = () => {
    return (
        <DropboxChooser appKey={DROPBOX_KEY}
        success={files => console.log('chose:', files)}
        cancel={() => console.log('closed')}
        multiselect={true} >
            <Button variant="contained" color="primary" component="label"> Upload from Dropbox</Button>
            <div className="dropbox"></div>
        </DropboxChooser>
    )
}

export default DropboxUpload
