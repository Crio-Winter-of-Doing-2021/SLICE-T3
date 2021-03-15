import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import LocalUpload from './services/LocalUpload'
import DropboxUpload from './services/DropboxUpload'


function TabPanel(props) {
    const { children, value, index, ...other } = props;
    
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpAppanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        height: 224,
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

export default function SourceStorage() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                className={classes.tabs}
            >
                <Tab label="Local Storage"  {...a11yProps(0)} />
                <Tab label="Google Drive"  {...a11yProps(1)} />
                <Tab label="Dropbox"  {...a11yProps(2)} />
            </Tabs>        
            <TabPanel value={value} index={0}>
                <LocalUpload />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box color="text.primary" borderColor="primary.main">
                Item two
                </Box>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div className="container">
                <DropboxUpload />
            </div>
            </TabPanel>
        </div>
    );
}