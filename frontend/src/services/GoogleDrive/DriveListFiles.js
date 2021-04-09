import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';


var SliceDocLibraryT3 = require('slice_doc_library_t3/dist/index')
require('dotenv').config()


function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'File name' },
  { id: 'identifier', numeric: true, disablePadding: false, label: 'Identifier' },
];

function ListSelectedFilesHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ListSelectedFilesHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  title: {
    flex: '1 1 100%',
  },
}));


const ListSelectedFilesToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          Selected Files
        </Typography> 
      )}

    </Toolbar>
  );
};

ListSelectedFilesToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

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
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));


export default function ListSelectedFiles({ rows, authToken }) {
  // console.log('Rows: ',rows)
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
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
              {/* {
                bucketList.map(bucket=>(
                  <MenuItem value={bucket}>
                    {bucket}
                  </MenuItem>
                ))
              } */}
            </Select>
          </FormControl>
        </div>
      )
    }

  function transferSelectedFiles(idName) {
    console.log('Inside transfer function')
    const fileId = idName.split(":")[0]
    const fileName = idName.split(":")[1]
    console.log('Id:', fileId, "Name:", fileName)

    var transferData = {
      "sourceConfig": {
        "name": "GoogleDrive",
        "extendedData": {
          "token": authToken,
          "fileId": fileId
        }
      },
      "destinationConfig": {
        "name": "AwsS3",
        "extendedData": {
          "fileName": fileName,
          "bucketName": bucketName[0], //To be asked from user via dropdown showing existing buckets
          "credentials": {
            "ACCESS_KEY": process.env.REACT_AWS_ACCESS_KEY,
            "SECRET_KEY": process.env.REACT_AWS_SECRET_KEY
          }
        }
      }
    }

    console.log(transferData)
    // Calls to lib
    let apiInstance = new SliceDocLibraryT3.TransferApi();
    let fileTransfer = transferData 
    apiInstance.fileTransfer(fileTransfer, (error, data, response) => {
      if (error) {
        console.error(error);
      } else {
        console.log('API called successfully. Transfered data ' + JSON.stringify(data));
        window.alert(`${fileName} transferred successfully!`)
        setSelected([])
      }
    });
  }

  const onUploadButtonClick = () => {
    console.log('Button clicked')
    console.log('Selected files: ', selected)
    selected.map((idName) => transferSelectedFiles(idName))
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id, name) => {
    const selectedIndex = selected.indexOf(`${id}:${name}`);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, `${id}:${name}`);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    console.log('New Selected:', newSelected)
    setSelected(newSelected);
    console.log('Selected ones are:', selected)
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id_name) => selected.indexOf(id_name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <ListSelectedFilesToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
            aria-label="list selected files"
          >
            <ListSelectedFilesHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(`${row.id}:${row.name}`);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.id, row.name)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </TableCell>
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.id}</TableCell>

                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <SimpleSelect />
      <Button pb={5} onClick={onUploadButtonClick} variant="contained" color="primary" component="label">
        Transfer files
      </Button>
    </div>
  );
}
